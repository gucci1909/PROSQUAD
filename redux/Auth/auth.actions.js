import {
	SIGNUP_ERROR,
	SIGNUP_SUCCESS,
	SIGNUP_REQUEST,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	LOGIN_REQUEST,
	LOGOUT,
} from "./auth.actionTypes";
import axios from "axios";
import { removeItem, setItem } from "../localStorage";

const signUpApi = (payload) => (dispatch) => {
	console.log(payload);
	dispatch({ type: SIGNUP_REQUEST });
	return axios
		.post("https://main--dancing-selkie-b495f8.netlify.app/api/users/signup", {
			...payload,
		})
		.then((res) => dispatch({ type: SIGNUP_SUCCESS, payload: res }))
		.catch((err) => dispatch({ type: SIGNUP_ERROR }));
};

const loginApi = (payload) => (dispatch) => {
	dispatch({ type: LOGIN_REQUEST });
	return axios
		.post("https://main--dancing-selkie-b495f8.netlify.app/api/users/login", {
			...payload,
		})
		.then((res) => {
			dispatch({ type: LOGIN_SUCCESS });
			setItem("token", res.data.token);
			setItem("user", res.data.user);
			setItem("refreshToken", res.data.refreshToken);
			setItem("userid", res.data.id);
			setItem("role", res.data.role);
		})
		.catch((err) => dispatch({ type: LOGIN_ERROR }));
};

const logout = () => (dispatch) => {
	removeItem("token");
	removeItem("userId");
	removeItem("isAuth");
	dispatch({ type: LOGOUT });
};

export { signUpApi, loginApi, logout };
