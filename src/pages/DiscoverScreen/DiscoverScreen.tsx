import HeaderNavigation from '@components/HeaderNavigation';
import QuizItem from '@components/QuizzItem';
import { quizzUseSelector } from '@hooks/useRedux';
import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuizzes } from 'src/store/actions/quizz-actions';
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
    const { allQuizzes, error: quizzError, loadingQuizzes } = useSelector(quizzUseSelector)
    console.log("🚀 ~ file: DiscoverScreen.tsx:32 ~ DiscoverScreen ~ allQuizzes:", allQuizzes)
    const dispatch = useDispatch();

    useEffect(() => {
        if(!!allQuizzes?.quizzes?.length) return;
        dispatch(fetchAllQuizzes())
    }, []);

    const quizzData = allQuizzes?.quizzes

    return (
        <Container>
            <HeaderNavigation title={'Discover'} />
            <FlatList
                data={quizzData}
                renderItem={({ item }) => <QuizItem
                    creatorName={'test'}
                    title={item.title}
                    backgroundImage={item?.bgQuizzQuestionImg}
                    creatorAvatar={'test'}
                // onPress={() => { }}
                />}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
};

export default DiscoverScreen;
