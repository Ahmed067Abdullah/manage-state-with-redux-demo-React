export const increment = () => {
    return {
        type : 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type : 'DECREMENT'
    };
}

export const add = (num) => {
    return {
        type : 'ADD',
        num
    }
}

export const subtract = (num) => {
    return {
        type : 'SUBTRACT',
        num
    }
}
