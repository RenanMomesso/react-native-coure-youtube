import Button from '@components/Button';
import HeaderNavigation from '@components/HeaderNavigation';
import { CloseIcon, CloseIonicons, FavoriteIconStar } from '@components/Quizzes/QuizzGame/QuizzGame.styled';
import Text from '@components/Text';
import { useNavigation } from '@react-navigation/native';
import { Container, Row } from '@theme/globalComponents';
import { HomeIcon } from '@theme/globalComponents/icons';
import theme from '@theme/theme';
import { avatarImage } from '@utils/avatarImage';
import React, { useEffect, useState } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { NavigationScreenProp } from 'src/dtos';
import { quizzService } from 'src/services/api/quizz/quizz.service';
import { useGetQuizzByIdQuery, useGetQuizzesQuery } from 'src/store/quizzApi';


const { width } = Dimensions.get('window')
export interface QuizzProps {
    route: {
        params: {
            quizzId: string
        }
    },
    navigation: NavigationScreenProp
}

const QuizzScreen = ({ route, navigation }: QuizzProps) => {
    const quizzId = route.params.quizzId
    const { data, isLoading } = useGetQuizzByIdQuery(quizzId)
    const title = data?.title
    const questionsQty = data?.questions?.length
    const authorUsername = data?.authorId?.username
    const authorEmail = data?.authorId?.email
    const quizzDescription = data?.description

    const navigationBack = () => {
        navigation.goBack()
    }
    if (!data?._id) return;
    return (
        <Container style={{ padding: 20 }}>
            <HeaderNavigation
                leftIcon={<CloseIonicons onPress={navigationBack} />}
                rightIcon={
                    <Row style={{ marginLeft: 'auto' }}>
                        <FavoriteIconStar />
                        <HomeIcon />
                    </Row>
                }
            />
            <Image source={{ uri: data?.bgQuizzQuestionImg }} style={{ width: width - 40, height: 195, resizeMode: 'cover', borderRadius: 8, marginVertical: 20 }} />
            <Text size='medium' color='black' style={{ fontSize: 20, textTransform: "capitalize", fontWeight: '500', marginBottom: 15 }}>{title}</Text>
            <Row style={{ justifyContent: 'space-between', borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 12, borderColor: 'lightgray' }}>
                <View style={{ alignItems: 'center', borderRightWidth: 1, paddingRight: 20, borderColor: 'lightgray' }}>
                    <Text size='medium'>{questionsQty}</Text>
                    <Text size='text' color="black" style={{ color: "gray" }}>Questions</Text>
                </View>
                <View style={{ alignItems: 'center', borderRightWidth: 1, paddingRight: 20, borderColor: 'lightgray' }}>
                    <Text size='medium'>18.5K</Text>
                    <Text size='text' color="black" style={{ color: "gray" }}>Played</Text>
                </View>
                <View style={{ alignItems: 'center', borderRightWidth: 1, paddingRight: 20, borderColor: 'lightgray' }}>
                    <Text size='medium'>925</Text>
                    <Text size='text' color="black" style={{ color: "gray" }}>Favorited</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text size='medium'>256</Text>
                    <Text size='text' color="black" style={{ color: "gray" }}>Shared</Text>
                </View>
            </Row>
            <Row style={{ marginVertical: 12 }}>
                <Image source={{ uri: avatarImage(data?.authorId?.avatar) }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
                <View>
                    <Text size='medium' color='black' style={{ fontSize: 16, textTransform: "capitalize", fontWeight: '500' }}>{authorUsername}</Text>
                    <Text size='text' color='black' style={{ fontSize: 14, textTransform: "capitalize", fontWeight: '500' }}>{authorEmail}</Text>
                </View>
                <Button text='Follow' bgColor={theme.colors.purpleMain} textColor='white' style={{ marginLeft: 'auto', width: 100, height: 40, borderRadius: 20 }} />
            </Row>
            <Text>Description</Text>
            <Text color='disabled' style={{ color: "gray", fontWeight: 'normal' }}>{quizzDescription || 'No Description added.'}</Text>
            <Row style={{ position: 'absolute', bottom: 20, left: 20, }}>
                <Button text='Play Solo' bgColor={theme.colors.purpleMain} textColor='white' style={{ flex: 1, borderRadius: 20, }} />
                <Button text='Play With Friends' bgColor={theme.colors.purpleMain} textColor='white' style={{ flex: 1, borderRadius: 20, }} />
            </Row>
        </Container>
    )
}

export default QuizzScreen;