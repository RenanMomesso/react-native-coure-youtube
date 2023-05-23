import { NavigationContainer } from '@react-navigation/native'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import OnboardingScreen from '../pages/OnboardingScreen'
import { useSelector } from 'react-redux'
import SignupScreen from '../pages/Signup'
import SigninPassword from '../pages/SigninPassword'

export type RootStackParamList = {
    Home: undefined
    Signin: undefined
    Signup: undefined
    SigninPassword: undefined
    Onboarding: undefined
}

const RootNavigation = () => {
    const userReducer = useSelector((state: any) => state.user)
    const Stack = createStackNavigator<RootStackParamList>()
    const stackNavigationOptions: StackNavigationOptions = {
        headerShown: false,
    }

    let stackScreen = null;
    const user = userReducer.user

    if (userReducer.onboardingComplete === false) {
        stackScreen = (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        )
    }

    if (user) {
        stackScreen = (
            <Stack.Screen name="Home" component={Home} />
        )
    } else {
        stackScreen = (
            <>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="SigninPassword" component={SigninPassword} />
            </>
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