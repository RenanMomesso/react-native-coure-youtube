import { NavigationContainer } from '@react-navigation/native'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import OnboardingScreen from '../pages/OnboardingScreen'

const RootNavigation = () => {
    const Stack = createStackNavigator()

    const stackNavigationOptions: StackNavigationOptions = {
        headerShown: false,
    }

    const showOnboarding = true

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={stackNavigationOptions}>
                {/* {showOnboarding ? */}
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                {/* :
                    <> */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Signin" component={Signin} />

                {/* </> */}
                {/* } */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation