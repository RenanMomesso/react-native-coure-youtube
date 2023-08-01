import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@pages/Home';
import { AddNewIcon, BrainBattleIcon, CategoryIcon, HomeIcon, ProfileIcon } from '@theme/globalComponents/icons';
import CreateQuizz from '@pages/CreateQuizz';
import Text from '@components/Text';
import { useKeyboard } from '@hooks/useKeyBoard';
import BattleQuizz from '@pages/BattleQuizz';

const BottomTabNavigation: React.FC = () => {
    const Tab = createBottomTabNavigator();
    const { keyboardVisible } = useKeyboard();

    const screens = [
        { name: "Home", component: Home, icon: HomeIcon, label: "Home" },
        { name: "Library", component: CreateQuizz, icon: CategoryIcon, label: "Library" },
        { name: "Battle", component: BattleQuizz, icon: BrainBattleIcon, label: "Battle" },
        { name: "Create", component: CreateQuizz, icon: AddNewIcon, label: "Create" },
        { name: "Profile", component: CreateQuizz, icon: ProfileIcon, label: "Profile" }
    ];

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                elevation: 1,
                height: keyboardVisible ? 0 : 60,
                paddingBottom: 10,
            },
            tabBarHideOnKeyboard: true,
        }}>
            {screens.map(({ name, component, icon: Icon, label }, index) => (
                <Tab.Screen key={index} name={name} component={component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon style={{ width: name === "Profile" ? 22 : label === "Battle" ? 40 : 30, height: name === "Profile" ? 22 : label === "Battle" ? 40 : 30 }} color={focused ? "black" : "lightgray"} />
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 9, fontWeight: '500' }} color={focused ? 'black' : 'disabled'}>{label}</Text>
                        )
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;
