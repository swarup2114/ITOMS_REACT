import apiInstance from './BaseApi';
import { LoginValidateEndPoint } from './BaseApi';
export const validateLogin = async (payload) => {
    try {
        const response = await apiInstance.post(LoginValidateEndPoint, payload);
        return response.data;
    } catch (error) {
        console.error('Error validating login:', error);
        return error;
    }
};
