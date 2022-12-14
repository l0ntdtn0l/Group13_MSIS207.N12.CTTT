import request from '../utils/request';
import { registerSuccess, registerFail } from '~/redux/user/userRegisterSlice';
import { loginSuccess, loginFail, userLogout } from '~/redux/user/userLoginSlice';
import { updateSuccess } from '../redux/user/userUpdateSlice';
import { resetFail, resetSuccess } from '../redux/user/userForgotSlice';

export const register = (inputs) => async (dispatch) => {
    try {
        const { data } = await request.post('/auth/register', inputs);
        dispatch(registerSuccess(data));
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch(registerFail(error.response.data));
    }
};
export const login = (inputs) => async (dispatch) => {
    try {
        const { data } = await request.post('/auth/login', inputs);
        dispatch(loginSuccess(data));
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch(loginFail(error.response.data));
    }
};
export const updateInfo = (inputs) => async (dispatch) => {
    try {
        const {data} = await request.post('/users/updateuser', inputs);
        dispatch(updateSuccess(data));
        localStorage.setItem('userInfo', JSON.stringify(data));
        window.location.reload(false)
    } catch (error) {
        console.log(error);
    }
};

export const resetPassword = (inputs) => async (dispatch) => {
    try {
        await request.post('/users/sendPasswordLink', inputs)
        dispatch(resetSuccess());
    } catch (error) {
        dispatch(resetFail(error.response.data));
    }
}

export const logout = async (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('bill');
    dispatch(userLogout());
};
