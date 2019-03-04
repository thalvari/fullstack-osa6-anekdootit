import React from 'react'

const Notification = ({store}) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }
    return (
        <div>
            {store.getState().notification.show &&
            <div style={style}>
                {store.getState().notification.text}
            </div>
            }
        </div>
    )
}

export default Notification
