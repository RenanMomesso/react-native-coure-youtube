import { socketService } from '../socketConnection';

export class QuizzSocketHandler {
  static socketIOQuizz(users: any) {
    socketService?.socket?.emit('rockPaperScissor', users);
    socketService?.socket?.on('rockPaperScissor users', (users: any) => {
      console.log('Recebido do back', users);
    });
  }

  static socketIOPaperRockScissor(users: any, setUsers: any) {
    console.log('Enviado para o back', users);
    socketService?.socket?.emit('rockPaperScissor', users);
    
    socketService?.socket?.on(
      'rockPaperScissor users',
      (detailsBackend: any) => {
          console.log('Recebido do back', users);
        setUsers(detailsBackend);
      },
    );
  }
}
