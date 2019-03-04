import React from 'react'
import {connect} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {resetNotification, setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = props => {
    const create = event => {
        event.preventDefault()
        props.createAnecdote(event.target.content.value)
        props.setNotification(`you created anecdote '${event.target.content.value}'`)
        setTimeout(() => props.resetNotification(), 5000)
        event.target.content.value = ''
    }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <input name="content"/>
                <button type="submit">lisää</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification,
    resetNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
