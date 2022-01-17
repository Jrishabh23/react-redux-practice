import { DECREMENT, INCREMENT } from "./action";

const initialState = {
    count: 0,
};
const addActionNumber = (state: any = initialState, action: any) => {
    console.log(state, action.type);
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default addActionNumber;
