import React, { useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Row } from '../../globalStyles/globalComponents';
import { useDispatch, useSelector } from 'react-redux'
import { NavigationScreenProp, } from '../../dtos';
import HeaderNavigation from '@components/HeaderNavigation';
import { IconHome, InviteFriendsBanner, RightIconsWrapper, Shadow } from './home.styles';
import Text from '@components/Text';
import theme from '@theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import QuizItem from '@components/QuizzItem';
import { useGetQuizzesQuery } from 'src/store/quizzApi';
import { RootState } from 'src/store';

const Home: React.FC = () => {

    const { data, isLoading, isError, isSuccess, isUninitialized } = useGetQuizzesQuery({})
    const navigation = useNavigation<NavigationScreenProp>()
    const { userInfo } = useSelector((state: any) => state.user)

    const getItemLayout = (data: any, index: number) => {
        const item = data[index]
        const length = 180
        const offset = length * index
        return { length, offset, index }
    }

    const quizzesHome = data?.quizzes.slice(0, 7) || []

    return (
        <ScrollView style={{ padding: 20, backgroundColor: "#FFF" }}>
            <HeaderNavigation title='Quizzo' leftIcon={<IconHome name="icon" />}
                rightIcon={
                    <RightIconsWrapper>
                        <IconHome name="home" />
                    </RightIconsWrapper>
                }
            />
            <Text>{userInfo?._id}</Text>
            <Text>{userInfo?.email}</Text>
            <View style={{ position: 'relative' }}>
                <InviteFriendsBanner>
                    <Image style={{
                        resizeMode: 'cover',
                        width: '100%',
                        height: '100%',
                    }} source={{ uri: 'https://cdn.leonardo.ai/users/cb5f23fc-275a-422e-9e2e-8ca00cd4d119/generations/9ce560d4-2d25-4989-8949-8ef755da6ab7/Isometric_Scifi_Buildings_create_a_banner_with_some_circles_an_2.jpg' }} />
                </InviteFriendsBanner>
                <Shadow />
            </View>
            <Row style={{ justifyContent: 'space-between', marginTop: 30, marginBottom: 12 }}>
                <Text style={{ fontSize: 18 }}>Discover</Text>
                <Text color='disabled' style={{ color: theme.colors.purpleMain, fontSize: 16, fontWeight: '300' }} onPress={() => navigation.navigate("DiscoverScreen")}>View all {`->`}</Text>
            </Row>
            <FlatList
                style={{
                    flexGrow: 0,
                }}
                windowSize={2}
                keyExtractor={(_, index) => index.toString()}
                maxToRenderPerBatch={5}
                showsVerticalScrollIndicator={false}
                updateCellsBatchingPeriod={30}
                initialNumToRender={5}
                removeClippedSubviews={true}
                getItemLayout={getItemLayout}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={quizzesHome}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                renderItem={({ item }) => <QuizItem
                    quizzId={item?._id}
                    creatorName={item.authorId.username}
                    title={item.title}
                    backgroundImage={item?.bgQuizzQuestionImg}
                    creatorAvatar={'test'} />}
            />
        </ScrollView>
    )
}

export default Home;