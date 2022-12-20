import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Submit } from '../submit';

interface SubmitsReducerState {
    loading: boolean;
    error: string | null;
    order: string[];
    data: {
        [key: string]: Submit;
    };
}

const initialReducerState: SubmitsReducerState = {
    loading: false,
    error: null,
    order: [],
    data: {},
};

const reducer = produce(
    (
        state: SubmitsReducerState = initialReducerState,
        action: Action
    ): SubmitsReducerState => {
        switch (action.type) {
            case ActionType.SUBMIT_FILE:
                state.loading = true;
                return state;

            case ActionType.SUBMIT_FILE_SUCCESS:
                const submit: Submit = {
                    id: randomId(),
                    name: action.payload.name,
                    url: action.payload.url,
                    content: action.payload.content,
                };

                state.data[submit.id] = submit;
                state.order.push(submit.id);
                state.loading = false;

                return state;

            default:
                return state;
        }
    },
    initialReducerState
);

const randomId = () => {
    return Math.random().toString(36).substring(2, 5);
};

export default reducer;
