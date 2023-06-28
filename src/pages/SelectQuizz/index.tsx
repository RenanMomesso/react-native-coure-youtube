import {
    Animated,
    View,
    Pressable,
    Button,
    StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useCardAnimation } from '@react-navigation/stack';
import { NavigationScreenProp } from 'src/dtos';
import { games, quizzQuetionTypes } from '@utils/games'
import QuizzTitle from '@components/QuizzTitle';
import Text from '@components/Text';


export interface SelectQuizzProps {
    route: {
        params: {
            quizzId: string;
        }
    }
    navigation: NavigationScreenProp
}

export default function SelectQuizz({ route, navigation }: SelectQuizzProps) {
    const { quizzId } = route.params;
    const { colors } = useTheme();
    const { current } = useCardAnimation();

    const quizzesOptions: Record<string, any> = {
        versusGame: games,
        soloGame: games,
        questions: quizzQuetionTypes
    }

    const quizzes = quizzesOptions[quizzId]
    const addQuizzTypeText = quizzId === 'versusGame' || quizzId === 'soloGame' ? 'Select a Game' : 'Add a Question'

    const navigationToQuizz = (quizz: any) => {
        navigation.navigate('CreateQuestion', {
            questionType: quizz.id,
        })
    }


    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Pressable
                style={[
                    StyleSheet.absoluteFill,
                    { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                ]}
                onPress={navigation.goBack}
            />
            <Animated.View
                style={{
                    padding: 16,
                    flex: 1,
                    margin: 35,
                    borderRadius: 3,
                    backgroundColor: colors.card,
                    minWidth: '80%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 20,
                    justifyContent: 'center',
                    transform: [
                        {
                            scale: current.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.9, 1],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                }}
            >
                <Text size='heading'>{addQuizzTypeText}</Text>
                {quizzes.map((quizz: any) => <QuizzTitle  key={quizz.id} quizzTitle={quizz.name} onPress={() => navigationToQuizz(quizz)} />)}
            </Animated.View>
        </View>
    );
}