export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const inc = () => {
    return { type: INCREMENT };
};

export const dec = () => {
    return { type: DECREMENT };
};
