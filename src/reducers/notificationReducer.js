const initNotification = {
    show: false,
    text: ''
}

export const setNotification = text => ({
    type: 'SET_NOTIFICATION',
    data: {
        show: true,
        text
    }
})

export const resetNotification = () => ({
    type: 'RESET_NOTIFICATION',
    data: initNotification
})

const notificationReducer = (state = initNotification, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data
        case 'RESET_NOTIFICATION':
            return action.data
        default:
            return state
    }
}

export default notificationReducer
