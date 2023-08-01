import Button from '@components/Button';
import Text from '@components/Text';
import UserAvatar from '@components/UserAvatar';
import { Container, Row } from '@theme/globalComponents';
import { BattleBg } from '@theme/globalComponents/icons';
import { avatarImage } from '@utils/avatarImage';
import React, { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreenProp } from 'src/dtos';
import { Countdown } from 'react-native-element-timer';

const socketIO = io("http://10.0.2.2:6000");
socketIO.on('connect', () => console.log("Connected"))

interface IRoomProps {
    roomID?: string | undefined;
    playerA?: string | undefined;
    playerB?: string | undefined;
}

const BattleQuizzSearchingOponent: React.FC = () => {
    const navigation = useNavigation<NavigationScreenProp>()
    const [room, setRoom] = useState<IRoomProps[]>([]);
    const [gameShouldStart, setGameShouldStart] = useState(false);

    const user = useSelector((state: RootState) => state.user);
    const userID = user.userInfo?._id || '';

    useEffect(() => {
        socketIO.on('joinedRoom', (rooms) => {
            setRoom(rooms);
        });
        socketIO.emit('join room', userID);
        return () => {
            socketIO.emit('leave room', userID);
        }
    }, []);

    const matchFound: IRoomProps = room?.find((room: IRoomProps) => room?.playerA && room?.playerB) || {} as IRoomProps;
    const playerBName = matchFound?.playerB === userID ? matchFound?.playerA : matchFound?.playerB;

    const shouldStartGame = useCallback(async () => {
        navigation.navigate('BattleGameScreen', { room: matchFound.roomID });
    }, []);

    useEffect(() => {
        let setTime: any;
        if (!!matchFound) {
            setGameShouldStart(true);
            setTime = setTimeout(() => {
                shouldStartGame();
            }, 5000);
        }

        return () => {
            clearTimeout(setTime);
            setGameShouldStart(false);
        }
    }, [matchFound]);

    return (
        <Container style={{ alignItems: 'center', padding: 20 }}>
            <Text size='heading'>Searching Oponent</Text>
            {gameShouldStart && <Text size='medium' style={{ marginVertical: 30 }}>Start on: <Countdown
                initialSeconds={5}

            /> seconds</Text>}
            <Row style={{ paddingHorizontal: 20 }}>
                {user?.userInfo?.username && <UserAvatar userName={user?.userInfo?.username} image={avatarImage("test")} />}
                <BattleBg style={{ width: 100, height: 100 }} />
                {!!playerBName && <UserAvatar userName={playerBName} image={avatarImage("test")} />}
            </Row>
            <Button text='Cancel' style={{ marginTop: 20 }} onClick={() => {
                // Emit event to join room
                navigation.navigate('BattleGameScreen', { room: matchFound.roomID });

            }} />
        </Container>
    );
}

export default BattleQuizzSearchingOponent;
