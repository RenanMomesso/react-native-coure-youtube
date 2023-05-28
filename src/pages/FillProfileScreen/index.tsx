import HeaderNavigation from '@components/HeaderNavigation';
import ProfilePhoto from '@components/ProfilePhoto';
import TextInputIcon from '@components/TextInputWithIcon';
import useAndroidBackHandler from '@hooks/useBackHandler';
import React, { useRef } from 'react';
import { Alert, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearUserAction } from 'src/store/actions/userActions';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '@components/Button';
import FullScreenCalendar from '@components/FullScreenCalendar';

const FillProfileScreen: React.FC<any> = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [calendarOpen, setCalendarOpen] = React.useState(false)
    const [birthDate, setBirthDate] = React.useState("")

    const emailRef = useRef<any>(null);

    const dispatch = useDispatch();
    const handleGoBack = (): void => {
        dispatch(clearUserAction())
    }

    useAndroidBackHandler(() => {
        handleGoBack();
        return true;
    });

    const handleLoseAllFocus = () => {
        setCalendarOpen(false)
    }


    return (
        <>
            {calendarOpen && <FullScreenCalendar setBirthDate={setBirthDate} onPress={() => setCalendarOpen(false)} />}
            <Pressable onPress={handleLoseAllFocus} style={{ paddingHorizontal: 20, paddingTop: 40, backgroundColor: "#FFF", flex: 1 }}>
                <HeaderNavigation title='Fill Your Profile' navigation={navigation} onPress={handleGoBack} />
                <ProfilePhoto />
                <TextInputIcon
                    // isFocused={emailFocused}
                    keyboardType='email-address'
                    ref={emailRef}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    returnKeyType='next'
                    // endEdditing={() => passwordRef.current?.focus()}
                    // onFocus={() => setEmailFocused(true)}
                    // onBlur={() => setEmailFocused(false)}
                    placeholderTextColor={"lightgray"}
                />
                <TextInputIcon
                    // isFocused={emailFocused}
                    keyboardType='email-address'
                    ref={emailRef}
                    placeholder='Nickname'
                    value={email}
                    onChangeText={setEmail}
                    returnKeyType='next'
                    // endEdditing={() => passwordRef.current?.focus()}
                    // onFocus={() => setEmailFocused(true)}
                    // onBlur={() => setEmailFocused(false)}
                    placeholderTextColor={"lightgray"}
                />
                <TextInputIcon
                    // isFocused={emailFocused}
                    keyboardType='numeric'
                    ref={emailRef}
                    placeholder='Date of Birth'
                    value={birthDate}
                    onChangeText={setBirthDate}
                    returnKeyType='next'
                    // endEdditing={() => passwordRef.current?.focus()}
                    // onFocus={() => setEmailFocused(true)}
                    // onBlur={() => setEmailFocused(false)}
                    placeholderTextColor={"lightgray"}
                    rightIconName={<Icons name='calendar' size={20} color='lightgray' onPress={() => setCalendarOpen(true)} />}
                />
                <TextInputIcon
                    // isFocused={emailFocused}
                    keyboardType='email-address'
                    ref={emailRef}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    returnKeyType='next'
                    // endEdditing={() => passwordRef.current?.focus()}
                    rightIconName={<Icons name='email' size={20} color='lightgray' />}
                    // onFocus={() => setEmailFocused(true)}
                    // onBlur={() => setEmailFocused(false)}
                    placeholderTextColor={"lightgray"}
                />
                <TextInputIcon
                    // isFocused={emailFocused}
                    keyboardType='email-address'
                    ref={emailRef}
                    placeholder='Phone Number'
                    value={email}
                    onChangeText={setEmail}
                    returnKeyType='next'
                    // endEdditing={() => passwordRef.current?.focus()}
                    // onFocus={() => setEmailFocused(true)}
                    // onBlur={() => setEmailFocused(false)}
                    placeholderTextColor={"lightgray"}
                />
                <TextInputIcon
                    // isFocused={emailFocused}
                    keyboardType='email-address'
                    ref={emailRef}
                    placeholder='Gender'
                    value={email}
                    onChangeText={setEmail}
                    returnKeyType='next'
                    // endEdditing={() => passwordRef.current?.focus()}
                    // onFocus={() => setEmailFocused(true)}
                    // onBlur={() => setEmailFocused(false)}
                    placeholderTextColor={"lightgray"}
                />
                <Button text='Continue' onPress={() => Alert.alert("Filled")} />
            </Pressable>
        </>

    )
}

export default FillProfileScreen;