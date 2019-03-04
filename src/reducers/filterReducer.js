export const setFilter = text => ({
    type: 'SET_FILTER',
    text
})

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.text
        default:
            return state
    }
}

export default filterReducer
