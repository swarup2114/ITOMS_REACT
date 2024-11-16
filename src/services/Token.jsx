import apiInstance from './BaseApi';
import { LoginToken } from './BaseApi';
export const Token = async (payload) => {
    try {
        const response = await apiInstance.post(LoginToken, payload);
        return response.data;
    } catch (error) {
        console.error('Error validating login:', error);
        return error;
    }
};
