import axios from 'src/axios';

class AuthService {
  async signUp(data: any): Promise<any> {
    const response = await axios.post('/auth/sign-up', data);
    return response;
  }

  async signIn(data: any): Promise<any> {
    const response = await axios.post('/signin', data);
    return response;
  }
}

export const authService: AuthService = new AuthService();
