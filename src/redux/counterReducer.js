import { INC, DEC } from "./constants";

const counterReducer = (state = { count: 100 }, action) => {
    switch (action.type) {
        case INC:
            return { count: state.count + 1 };
        case DEC:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default counterReducer;