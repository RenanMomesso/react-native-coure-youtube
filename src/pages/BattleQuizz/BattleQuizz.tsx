import Text from '@components/Text';
import { Container, Row } from '@theme/globalComponents';
import { BattleBg } from '@theme/globalComponents/icons';
import { imagesUrl } from '@utils/avatarImage';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import BattleQuizzGameItem from './BattleQuizzGameItem';
import { NavigationScreenProp, RootStackParamList, ScreenName } from 'src/dtos';

interface BattleQuizzProps {
    navigation: NavigationScreenProp
}
const BattleQuizz: React.FC<BattleQuizzProps> = ({ navigation }) => {

    const loremImpsuText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sed ex in arcu dictum interdum et at mauris. Nulla eget arcu velit. Sed massa sem, pellentesque non eleifend ut, maximus non nulla.'
    const handleNavigation = (navigationTo: ScreenName) => {
        navigation.navigate(navigationTo as never)
    }

    return (
        <Container style={{ backgroundColor: "white" }}>
            <Text size='heading' align='center'>Game Mode</Text>
            <BattleQuizzGameItem image={imagesUrl.quizzGame} text={loremImpsuText} onPress={() => handleNavigation("BattleQuizzSearchingOpponent")} />

            <BattleQuizzGameItem image={imagesUrl.quizzQuestion} text={loremImpsuText} onPress={() => handleNavigation("PickOneVsOneGame")} />
            <BattleQuizzGameItem image={imagesUrl.quizzGame} text={loremImpsuText} />
        </Container >
    )
}

export default BattleQuizz;