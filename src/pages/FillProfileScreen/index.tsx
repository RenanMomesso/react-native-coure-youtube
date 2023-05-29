import HeaderNavigation from '@components/HeaderNavigation';
import ProfilePhoto from '@components/ProfilePhoto';
import TextInputIcon from '@components/TextInputWithIcon';
import useAndroidBackHandler from '@hooks/useBackHandler';
import React, { useRef, useEffect } from 'react';
import { Alert, Pressable, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserAction } from 'src/store/actions/userActions';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '@components/Button';
import FullScreenCalendar from '@components/FullScreenCalendar';
import { RootState } from 'src/store';
import inputStateReducer from 'src/helpers/inputStateReducer';

const FillProfileScreen: React.FC<any> = ({ navigation }) => {


    const [calendarOpen, setCalendarOpen] = React.useState(false);
    console.log("🚀 ~ file: index.tsx:19 ~ calendarOpen:", calendarOpen)
    const initialState = {
        fullName: { value: '', isFocused: false, ref: useRef(null), label: 'Full Name' },
        nickName: { value: '', isFocused: false, ref: useRef(null), label: 'Nick Name' },
        birthDate: {
            value: '', isFocused: false, ref: useRef(null), label: 'Date of Birth',
            icon: 'calendar',
            onIconPress: () => setCalendarOpen(true),
            maskValue: [/^[0-2]$/, /^[0-9]$/, /^[0-9]$/, /^[0-9]$/, '-', /^[0-9]$/, /^[0-9]$/, '-', /^[0-9]$/, /^[0-9]$/],
            maxLength: 10,
        },
        email: {
            value: '', isFocused: false, ref: useRef(null), label: 'Email',
            icon: 'email',
        },
        phoneNumber: { value: '', isFocused: false, ref: useRef(null), label: 'Phone Number' },
        gender: { value: '', isFocused: false, ref: useRef(null), label: 'Gender' },
    };

    const [state, dispatcher] = React.useReducer(inputStateReducer, initialState);
    const setValue = React.useCallback((input, value) => {
        dispatcher({ type: 'SET_VALUE', input, value });
    }, []);

    const setFocus = React.useCallback((input, isFocused) => {
        dispatcher({ type: 'SET_FOCUS', input, isFocused });
    }, [])

    const handleFocus = React.useCallback((input) => {
        setFocus(input, true);
    }, [setFocus]);

    const handleBlur = React.useCallback((input) => {
        setFocus(input, false);
    }, [setFocus]);

    const handleLoseAllFocus = React.useCallback(() => {
        setCalendarOpen(false);
        Object.keys(state).forEach((key) => {
            state[key].ref.current?.blur();
        });
    }, [state, calendarOpen]);

    const dispatch = useDispatch();
    const handleGoBack = (): void => {
        dispatch(clearUserAction())
    }

    useAndroidBackHandler(() => {
        handleGoBack();
        return true;
    });

    const disabledButton = Object.keys(state).every((key) => !!state[key].value.length);

    return (
        <>
            {calendarOpen && <FullScreenCalendar setBirthDate={(value) => setValue('birthDate', value)} onPress={() => setCalendarOpen(false)} />}
            <Pressable onPress={handleLoseAllFocus} style={{ paddingHorizontal: 20, paddingTop: 40, backgroundColor: "#FFF", flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView
                        behavior={'padding'}
                        keyboardVerticalOffset={40}
                    >
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
                                    rightIconName={state[key].icon ? <Icons name={state[key].icon} size={20} color='gray' onPress={state[key].onIconPress} /> : null}
                                    maskValue={state[key].maskValue ?? null}
                                    maxLength={state[key].maxLength ?? null}
                                />
                            )
                        })}
                        <Button style={{ opacity: !disabledButton ? 0.5 : 1 }} disabled={!disabledButton} text='Continue' onPress={() => Alert.alert("Filled")} />
                    </KeyboardAvoidingView>
                </ScrollView>
            </Pressable>
        </>

    )
}

export default FillProfileScreen;