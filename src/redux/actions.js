import { INC, DEC } from "./constants";

const increment = () => {
    return { type: INC };
}

const decrement = () => {
    return { type: DEC };
}

export { increment, decrement };
