import React from 'react';
import { Alert, View, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const { height } = Dimensions.get('window')
const FullScreenCalendar: React.FC<any> = ({ onPress, setBirthDate }) => {
    return (
        <View onTouchStart={() => onPress} style={{
            backgroundColor: 'white', zIndex: 1000,
            position: 'absolute',
            right: 0, left: 0,
            elevation: 5,
            marginHorizontal: 8,
            marginTop: 20,


        }}>
            <Calendar

                onDayPress={(day) => {
                    setBirthDate(day.dateString)
                    onPress()

                }}
                style={{
                    backgroundColor: "transparent",
                    borderRadius: 10
                }}
            />
        </View>
    )
}

export default FullScreenCalendar;