import HeaderNavigation from '@components/HeaderNavigation';
import ProfilePhoto from '@components/ProfilePhoto';
import TextInputIcon from '@components/TextInputWithIcon';
import useAndroidBackHandler from '@hooks/useBackHandler';
import React, { Dispatch, Reducer, useRef } from 'react';
import { Alert, Pressable, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '@components/Button';
import FullScreenCalendar from '@components/FullScreenCalendar';
import inputStateReducer, { InputState } from 'src/helpers/inputStateReducer';
import { useKeyboard } from '@hooks/useKeyBoard';
import { useBottomSheet } from 'src/providers/BottomSheetProvider';
import { errorAlert } from '@utils/errorAlert';
import { updateUserService } from 'src/services/auth-service';
import { RootState } from 'src/store';
import { clearStorage } from '@utils/AsyncStorageUtils';
import { clearUser, updateUser } from 'src/store/reducers/userReducer';


const FillProfileScreen: React.FC<any> = ({ navigation }) => {

    const { userInfo: {
        email
    } } = useSelector((state: RootState) => state.user)
    const [calendarOpen, setCalendarOpen] = React.useState(false);
    const { closeBottomSheet } = useBottomSheet()
    const { keyboardHeight } = useKeyboard()

    const initialState: InputState = {
        fullname: { value: '', isFocused: false, ref: useRef(null), label: 'Full Name' },
        birthday: {
            value: '', isFocused: false, ref: useRef(null), label: 'Date of Birth',
            icon: 'calendar',
            onIconPress: () => setCalendarOpen(true),
            maskValue: [/^[0-2]$/, /^[0-9]$/, /^[0-9]$/, /^[0-9]$/, '-', /^[0-9]$/, /^[0-9]$/, '-', /^[0-9]$/, /^[0-9]$/],
            maxLength: 10,
        },
        email: {
            value: email || '', isFocused: false, ref: useRef(null), label: 'Email',
            icon: 'email',
        },
        phone: { value: '', isFocused: false, ref: useRef(null), label: 'Phone Number' },
        gender: { value: '', isFocused: false, ref: useRef(null), label: 'Gender' },
    };
    const scrollViewRef = useRef<ScrollView>(null);

    const [state, dispatcher]: [InputState, Dispatch<any>] = React.useReducer<Reducer<InputState, any>>(inputStateReducer, initialState);
    const setValue = React.useCallback((input: string, value: string) => {
        dispatcher({ type: 'SET_VALUE', input, value });
    }, []);

    const setFocus = React.useCallback((input: string, isFocused: boolean) => {
        setCalendarOpen(false);
        dispatcher({ type: 'SET_FOCUS', input, isFocused });
    }, [])

    const handleFocus = React.useCallback((input: string) => {
        closeBottomSheet()
        if (input === 'email' || input === 'gender' || input === 'phoneNumber') {
            scrollViewRef.current?.scrollTo({ y: keyboardHeight + 100, animated: true });
        }
        setFocus(input, true);
    }, [setFocus]);

    const handleBlur = React.useCallback((input: string) => {
        setFocus(input, false);
    }, [setFocus]);

    const handleLoseAllFocus = React.useCallback(() => {
        setCalendarOpen(false);
        Object.keys(state).forEach((key) => {
            state[key].ref.current?.blur();
        });
    }, [state, calendarOpen]);

    const dispatch = useDispatch();
    const handleGoBack = async (): Promise<void> => {
        clearStorage();
        dispatch(clearUser())
    }

    useAndroidBackHandler(() => {
        handleGoBack();
        return true;
    });

    const disabledButton = Object.keys(state).every((key) => !!state[key].value.length);

    const handleUpdateUser = async () => {
        try {
            const variables = Object.keys(state).reduce((acc, key) => {
                return { ...acc, [key]: state[key].value }
            }, {})
            const data = await updateUserService(variables)
            console.log("🚀 ~ file: index.tsx:85 ~ handleUpdateUser ~ data:", data)
            dispatch(updateUser(data))
        } catch (error) {
            errorAlert(error as Error)
        }
    }

    return (
        <>
            {calendarOpen && <FullScreenCalendar setBirthday={(value: string) => setValue('birthday', value)} onPress={() => setCalendarOpen(false)} />}
            <Pressable onPress={handleLoseAllFocus} style={{ paddingHorizontal: 20, paddingTop: 40, flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef} keyboardShouldPersistTaps={'always'}>
                    <HeaderNavigation title='Fill Your Profile' navigation={navigation} onPress={handleGoBack} />
                    <ProfilePhoto />
                    {Object.keys(initialState).map((key) => {
                        return (
                            <TextInputIcon
                                key={key}
                                isFocused={state[key].isFocused}
                                ref={state[key].ref}
                                placeholder={state[key].label}
                                value={state[key].value}
                                onChangeText={(value) => setValue(key, value)}
                                returnKeyType='next'
                                onFocus={() => handleFocus(key)}
                                onBlur={() => handleBlur(key)}
                                placeholderTextColor={"lightgray"}
                                rightIconName={state[key].icon ? <Icons name={state[key].icon || ''} size={20} color='gray' onPress={state[key].onIconPress} /> : undefined}
                                maskValue={state[key].maskValue ?? undefined}
                                maxLength={state[key].maxLength ?? undefined}
                            />
                        )
                    })}
                    <Button style={{ opacity: !disabledButton ? 0.5 : 1 }} disabled={!disabledButton} text='Continue' onClick={handleUpdateUser} />
                </ScrollView>
            </Pressable>
        </>

    )
}

export default FillProfileScreen;