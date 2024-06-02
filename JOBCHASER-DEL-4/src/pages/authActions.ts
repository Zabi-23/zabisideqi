
// authActions.ts
// authActions.ts

import { Dispatch } from 'redux';

export const registerUser = (email: string, _password: string) => async (dispatch: Dispatch) => {
    try {
        // Perform async operations here
        dispatch({ type: 'REGISTER_USER_SUCCESS', payload: { email } });
        return { success: true };
    } catch (error) {
        // Handle errors here
        dispatch({ type: 'REGISTER_USER_FAILURE', payload: { error } });
        return { success: false, error };
    }
};








