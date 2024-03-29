import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useImperativeHandle } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { act } from 'react-test-renderer';
import { a } from 'aws-amplify';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

type BottomSheetProps = {
    children?: React.ReactNode;
    translateY?: Animated.SharedValue<number>;
};

export type BottomSheetRefProps = {
    scrollTo: (destination: number) => void;
    isActive: () => boolean;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
    ({ children, translateY }, ref) => {

        const active = useSharedValue(false);

        const scrollTo = useCallback((destination: number) => {
            'worklet';
            active.value = destination !== 0;

            translateY.value = withSpring(destination, { damping: 50 });
        }, []);

        const isActive = useCallback(() => {
            return active.value;
        }, []);





        useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
            scrollTo,
            isActive,

        ]);

        const context = useSharedValue({ y: 0 });
        const gesture = Gesture.Pan()
            .onStart(() => {
                context.value = { y: translateY.value };
            })
            .onUpdate((event) => {
                translateY.value = event.translationY + context.value.y;
                translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
            })
            .onEnd(() => {
                console.log("🚀 ~ file: index.tsx:63 ~ .onEnd ~ MAX_TRANSLATE_Y:", MAX_TRANSLATE_Y)
                if (translateY.value > -SCREEN_HEIGHT / 3) {
                    scrollTo(0);
                    active.value = false;
                } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                    active.value = true;
                    scrollTo(MAX_TRANSLATE_Y);

                } else {
                    active.value = false;
                }
            });

        const rBottomSheetStyle = useAnimatedStyle(() => {
            const borderRadius = interpolate(
                translateY.value,
                [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
                [25, 5],
                Extrapolate.CLAMP
            );

            return {
                borderRadius,
                transform: [{ translateY: translateY.value }],
            };
        });

        return (
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
                    <View style={styles.line} />
                    {children}
                </Animated.View>
            </GestureDetector>
        );
    }
);

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        elevation: 5,
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
        zIndex: 100,
        paddingHorizontal: 20
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    },
});

export default BottomSheet;