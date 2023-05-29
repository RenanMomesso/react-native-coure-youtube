import HeaderNavigation from '@components/HeaderNavigation';
import ProfilePhoto from '@components/ProfilePhoto';
import TextInputIcon from '@components/TextInputWithIcon';
import useAndroidBackHandler from '@hooks/useBackHandler';
import React, { useRef, useEffect } from 'react';
import { Alert, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserAction } from 'src/store/actions/userActions';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '@components/Button';
import FullScreenCalendar from '@components/FullScreenCalendar';
import { RootState } from 'src/store';

const FillProfileScreen: React.FC<any> = ({ navigation }) => {

    const { userInfo } = useSelector((state: RootState) => state.user)
    const [email, setEmail] = React.useState(userInfo?.email || "")
    const [calendarOpen, setCalendarOpen] = React.useState(false)
    const [birthDate, setBirthDate] = React.useState("")
    const [fullName, setFullName] = React.useState(userInfo?.name || "")
    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [nickName, setNickName] = React.useState("")
    const [gender, setGender] = React.useState('')

    const [fullNameFocused, setFullNameFocused] = React.useState(false)
    const [nickNameFocused, setNickNameFocused] = React.useState(false)
    const [phoneNumberFocused, setPhoneNumberFocused] = React.useState(false)
    const [emailFocused, setEmailFocused] = React.useState(false)
    const [birthDateFocused, setBirthDateFocused] = React.useState(false)
    const [genderFocused, setGenderFocused] = React.useState(false)

    const emailRef = useRef<any>(null);
    const genderRef = useRef<any>(null);
    const nickNameRef = useRef<any>(null);
    const fullNameRef = useRef<any>(null);
    const birthDateRef = useRef<any>(null);
    const phoneNumberRef = useRef<any>(null);

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
        genderRef.current?.blur()
        emailRef.current?.blur()
        nickNameRef.current?.blur()
        fullNameRef.current?.blur()
        birthDateRef.current?.blur()
    }

    useEffect(() => {
        if (calendarOpen) {
            handleLoseAllFocus()
        }
    }, [fullNameFocused, nickNameFocused, phoneNumberFocused, emailFocused, birthDateFocused, genderFocused])


    const disabledButton = !!email.length || !!phoneNumber.length || gender.length || !!birthDate.length || !!fullName.length || !!nickName.length

    return (
        <>
            {calendarOpen && <FullScreenCalendar setBirthDate={setBirthDate} onPress={() => setCalendarOpen(false)} />}
            <Pressable onPress={handleLoseAllFocus} style={{ paddingHorizontal: 20, paddingTop: 40, backgroundColor: "#FFF", flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView
                        behavior={'padding'}
                        keyboardVerticalOffset={40}
                    >
                        <HeaderNavigation title='Fill Your Profile' navigation={navigation} onPress={handleGoBack} />
                        <ProfilePhoto />
                        <TextInputIcon
                            isFocused={fullNameFocused}
                            ref={fullNameRef}
                            placeholder='Fullname'
                            value={fullName}
                            onChangeText={setFullName}
                            returnKeyType='next'
                            // endEdditing={() => passwordRef.current?.focus()}
                            onFocus={() => setFullNameFocused(true)}
                            onBlur={() => setFullNameFocused(false)}
                            placeholderTextColor={"lightgray"}
                        />
                        <TextInputIcon
                            isFocused={nickNameFocused}
                            ref={nickNameRef}
                            placeholder='Nickname'
                            value={nickName}
                            onChangeText={setNickName}
                            returnKeyType='next'
                            onSubmitEditing={() => nickNameRef.current?.focus()}
                            onFocus={() => setNickNameFocused(true)}
                            onBlur={() => setNickNameFocused(false)}
                            placeholderTextColor={"lightgray"}
                        />
                        <TextInputIcon
                            isFocused={birthDateFocused}
                            keyboardType='numeric'
                            ref={birthDateRef}
                            placeholder='Date of Birth'
                            value={birthDate}

                            onChangeText={setBirthDate}
                            returnKeyType='next'
                            maskValue={[/^[0-2]$/, /^[0-9]$/, /^[0-9]$/, /^[0-9]$/, '-', /^[0-9]$/, /^[0-9]$/, '-', /^[0-9]$/, /^[0-9]$/]}
                            maxLength={10}
                            onFocus={() => setBirthDateFocused(true)}
                            onBlur={() => setBirthDateFocused(false)}
                            placeholderTextColor={"lightgray"}
                            rightIconName={<Icons name='calendar' size={20} color='lightgray' onPress={() => setCalendarOpen(true)} />}
                        />
                        <TextInputIcon
                            isFocused={emailFocused}
                            keyboardType='email-address'
                            ref={emailRef}
                            placeholder='Email'
                            onChangeText={setEmail}
                            defaultValue={userInfo?.email}
                            returnKeyType='next'
                            // endEdditing={() => passwordRef.current?.focus()}
                            rightIconName={<Icons name='email' size={20} color='lightgray' />}
                            onFocus={() => setEmailFocused(true)}
                            onBlur={() => setEmailFocused(false)}
                            placeholderTextColor={"lightgray"}
                        />
                        <TextInputIcon
                            isFocused={phoneNumberFocused}
                            keyboardType='phone-pad'
                            ref={phoneNumberRef}
                            placeholder='Phone Number'
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            returnKeyType='next'

                            onFocus={() => setPhoneNumberFocused(true)}
                            onBlur={() => setPhoneNumberFocused(false)}
                            placeholderTextColor={"lightgray"}
                        />
                        <TextInputIcon
                            isFocused={genderFocused}
                            ref={genderRef}
                            placeholder='Gender'
                            value={gender}
                            onChangeText={setGender}
                            returnKeyType='next'
                            // endEdditing={() => passwordRef.current?.focus()}
                            onFocus={() => setGenderFocused(true)}
                            onBlur={() => setGenderFocused(false)}
                            placeholderTextColor={"lightgray"}
                        />
                        <Button style={{ opacity: disabledButton ? 0.5 : 1 }} disabled={!!disabledButton} text='Continue' onPress={() => Alert.alert("Filled")} />
                    </KeyboardAvoidingView>
                </ScrollView>
            </Pressable >
        </>

    )
}

export default FillProfileScreen;