import React, { useRef, useState } from 'react';
import { Container } from '../../globalStyles/globalComponents';
import { FlatList, ViewToken } from 'react-native'
import onboardingData from '../../constants/onboardingList';
import OnboardingItem from './components/OnboardingItem';
import Button from '../../components/Button';
import Paginator from './components/Paginator';
import SkipSlides from './components/Skip';
import { useDispatch } from "react-redux"
import { onBoardingCompleted } from '../../store/actions/userActions';

const OnboardingScreen = () => {
    const dispatch = useDispatch()
    const flatListRef = React.useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
        if (viewableItems?.[0]?.index === undefined) return;
        setCurrentIndex(viewableItems?.[0]?.index!)
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    const onboardingNextSlide = () => {
        if (currentIndex < onboardingData.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigationToLogin()
        }
    }

    const skipSlide = () => {
        navigationToLogin();
    };
    const buttonTitle = currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next';

    const navigationToLogin = async () => {
        dispatch(onBoardingCompleted())
    };

    return (
        <Container>
            <SkipSlides skipSlide={skipSlide} />
            <FlatList
                ref={flatListRef}
                data={onboardingData}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={OnboardingItem}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
            />
            <Paginator data={onboardingData} currentIndex={currentIndex || 0} />
            <Container style={{ marginTop: -80, paddingHorizontal: 20 }}>
                <Button activeOpacity={0.9} text={buttonTitle} onClick={onboardingNextSlide} />
            </Container>
        </Container>
    )
}

export default OnboardingScreen;