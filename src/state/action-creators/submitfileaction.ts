import { ActionType } from '../action-types';
import { Dispatch } from '@reduxjs/toolkit';
import { Action } from '../actions';
import { MindeeRes } from '../submit';

const submitFileAction = (file: File, resData: MindeeRes) => {
    return (dispatch: Dispatch<Action>) => {
        let submitData = {
            id: '',
            name: '',
            url: '',
            content: resData,
        };

        submitData.name = file.name;
        submitData.url = URL.createObjectURL(file);

        dispatch({
            type: ActionType.SUBMIT_FILE_SUCCESS,
            payload: submitData,
        });
    };
};

export default submitFileAction;
