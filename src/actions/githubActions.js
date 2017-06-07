import 'whatwg-fetch';
import {
    GET_GITHUB_INITIATE,
    GET_GITHUB_SUCCESS,
    GET_GITHUB_FAIL,
    CHAGE_USER_ID,
} from '../constants/actionTypes';
import {
    showSpinner,
    hideSpinner,
} from './uiActions';

export const getGithub = (userId = 'torvalds') => {
    return (dispatch) => {
        dispatch({ type: GET_GITHUB_INITIATE });
        dispatch(showSpinner());
        fetch('https://api.github.com/users/' + userId)
            .then(function (response) { return response.json(); })
            .then(function (json) {
                dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
                dispatch(hideSpinner());
            })
            .catch(function (response) { dispatch({ type: GET_GITHUB_FAIL }); });
    };
};

// 同步 actions 處理，回傳 action 物件
export const changeUserId = (text) => ({ type: CHAGE_USER_ID, payload: { userId: text } });
