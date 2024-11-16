import apiInstance from './BaseApi';
import { LoginAuthenticateUser } from './BaseApi';
export const AuthenticateUser = async (payload) => {
    try {
        const response = await apiInstance.post(LoginAuthenticateUser, payload);
        return response.data;
    } catch (error) {
        console.error('Error validating login:', error);
        return error;
    }
};
