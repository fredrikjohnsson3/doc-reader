import produce from 'immer';
import { Action } from '../actions';
import { Cell } from '../../state';

interface CellsReducerState {
    loading: boolean;
    error: string | null;
    order: string[];
    data: {
        [key: string]: Cell;
    };
}

const initialState: CellsReducerState = {
    loading: false,
    error: null,
    order: [],
    data: {},
};

const reducer = produce(
    (
        state: CellsReducerState = initialState,
        action: Action
    ): CellsReducerState => {
        return state;
    },
    initialState
);

export default reducer;
