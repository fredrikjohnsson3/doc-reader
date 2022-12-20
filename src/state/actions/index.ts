import { ActionType } from '../action-types';
import { MindeeRes } from '../submit';

export interface SubmitFileSuccessAction {
    type: ActionType.SUBMIT_FILE_SUCCESS;
    payload: {
        name: string;
        url: string;
        content: MindeeRes;
    };
}

export interface SubmitFileErrorAction {
    type: ActionType.SUBMIT_FILE_ERROR;
    payload: any;
}

export interface SubmitFileAction {
    type: ActionType.SUBMIT_FILE;
}

export type Action =
    | SubmitFileSuccessAction
    | SubmitFileErrorAction
    | SubmitFileAction;
