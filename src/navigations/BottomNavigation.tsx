import React from 'react';
import { View, Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '@pages/Home';
import { HomeIcon } from '@theme/globalComponents/icons';
import CreateQuizz from '@pages/CreateQuizz';
import { IconHome, IconList } from '@pages/Home/home.styles';
import Text from '@components/Text';
import { useKeyboard } from '@hooks/useKeyBoard';


const BottomTabNavigation: React.FC = () => {

    const Tab = createBottomTabNavigator();
    const { keyboardVisible } = useKeyboard()

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                elevation: 1,
                height: keyboardVisible ? 0 : 60,
                paddingBottom: 10
            },
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (

                            <IconHome name="home" color={focused ? "black" : "lightgray"} size={35} />
                        )
                    },
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text style={{ fontSize: 9, fontWeight: '500' }} color={focused ? 'black' : 'disabled'}>Home</Text>
                        )
                    }
                }}
            />
            <Tab.Screen name="Library" component={CreateQuizz}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (

                            <IconList name="home" color={focused ? "black" : "lightgray"} size={35} />
                        )
                    },
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text style={{ fontSize: 9, fontWeight: '500' }} color={focused ? 'black' : 'disabled'}>Home</Text>
                        )
                    }
                }}
            />
            <Tab.Screen name="Join" component={CreateQuizz} />
            <Tab.Screen name="Create" component={CreateQuizz} />
            <Tab.Screen name="Profile" component={CreateQuizz} />

        </Tab.Navigator>
    )
}

export default BottomTabNavigation;