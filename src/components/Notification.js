import React from 'react'
import {connect} from 'react-redux'

const Notification = props => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }
    return (
        <div>
            {props.notification.show &&
            <div style={style}>
                {props.notification.text}
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    notification: state.notification
})

const ConnectedNotification = connect(mapStateToProps, {})(Notification)
export default ConnectedNotification
