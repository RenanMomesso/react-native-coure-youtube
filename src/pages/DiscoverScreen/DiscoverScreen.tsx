import HeaderNavigation from '@components/HeaderNavigation';
import QuizItem from '@components/QuizzItem';
import Text from '@components/Text';
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'src/axios';
import { useGetQuizzesQuery } from 'src/store/quizzApi';
import styled from 'styled-components/native';

// Define styles using styled-components
const Container = styled(View)`
  flex: 1;
  padding: 20px;
  background-color: white;
`;

const EmptyView = styled(View)`
  height: 200px;
  background-color: lightgray;
  margin-bottom: 20px;
`;


const DiscoverScreen = () => {
    const [quizzes, setQuizzes] = useState([])
    const { data, isLoading } = useGetQuizzesQuery({})

    const getItemLayout = (data: any, index: number) => {
        const item = data[index]
        const length = 180
        const offset = length * index
        return { length, offset, index }
    }

    return (
        <Container>
            <HeaderNavigation title={'Discover'} />
            <View style={{ flexDirection: 'row' }}>
                <FlatList
                    style={{ flexGrow: 0 }}
                    horizontal={false}

                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={data?.quizzes || []}
                    getItemLayout={getItemLayout}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                    renderItem={({ item }) => <QuizItem
                        quizzId={item?._id}
                        creatorName={item.authorId.username}
                        title={item.title}
                        backgroundImage={item?.bgQuizzQuestionImg}
                        creatorAvatar={'test'} />}
                />
            </View>
        </Container>
    );
};

export default DiscoverScreen;
