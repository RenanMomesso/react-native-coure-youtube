import { BASE_URL } from 'src/axios';
import { io, Socket } from 'socket.io-client';

class SocketService {
  socket!: Socket;

  setupSocketConnection() {
    this.socket = io('http://10.0.2.2:6000', {
      transports: ['websocket'],
      secure: false,
    });
    this.socketConnectionEvents();
  }

  socketConnectionEvents() {
    this.socket.on('connection', () => {
      console.log('connected');
    });

    this.socket.on('disconnect', (reason: string) => {
      console.log(`Reason: ${reason}`);
      this.socket.connect();
    });

    this.socket.on('connect_error', error => {
      console.log(`Error: ${error}`);
      this.socket.connect();
    });
  }
}

export const socketService: SocketService = new SocketService();
