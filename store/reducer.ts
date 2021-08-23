type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

export enum Types {
    Create = 'CREATE_PRODUCT',
    Delete = 'DELETE_PRODUCT',
    Add = 'ADD_PRODUCT',
}

type InitialStateType = {
    recordsCount: number;
}

const Reducer = (state: InitialStateType, action: any) => {
    switch (action.type) {
        case 'SET_RECORDS_COUNT':
            return {
                ...state,
                recordsCount: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;