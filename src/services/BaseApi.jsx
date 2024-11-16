import axios from "axios";
export const BaseURL = "http://ec2-3-110-102-138.ap-south-1.compute.amazonaws.com:9008/api/ina"


const apiInstance = axios.create({
    baseURL: BaseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const LoginValidateEndPoint = "/login/validate"
export const LoginAuthenticateUser = "/login/authenticate"
export const LoginToken = "/login/token"
export default apiInstance;