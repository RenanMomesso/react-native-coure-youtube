import { NavigationContainer } from '@react-navigation/native'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import OnboardingScreen from '../pages/OnboardingScreen'
import { useSelector } from 'react-redux'
import SignupScreen from '@pages/Signup'
import SigninPassword from '@pages/SigninPassword'
import { RootState } from 'src/store'
import { RootStackParamList } from 'src/dtos'
import FillProfileScreen from '@pages/FillProfileScreen'

const RootNavigation = () => {
    const userReducer = useSelector((state: RootState) => state.user)
    console.log("🚀 ~ file: RootNavigation.tsx:20 ~ RootNavigation ~ userReducer:", JSON.stringify(userReducer, undefined, 3))
    const Stack = createStackNavigator<RootStackParamList>()
    const stackNavigationOptions: StackNavigationOptions = {
        headerShown: false,
    }

    let stackScreen = null;
    const onboardingComplete = userReducer.onboardingComplete
    const userInfo = userReducer.userInfo

    if (onboardingComplete && !userInfo?.email?.length) {
        stackScreen = (
            <>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="SigninPassword" component={SigninPassword} />
            </>
        )
    } else if (onboardingComplete && userInfo?.firstTimeLogging) {
        stackScreen = (
            <Stack.Screen name="FillProfileScreen" component={FillProfileScreen} />
        )
    } else if (onboardingComplete && userInfo?.email?.length) {

    } else {
        stackScreen = (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={stackNavigationOptions}>
                {stackScreen}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation