import React from 'react'
import {connect} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {resetNotification, setNotification} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = props => {
    const create = async event => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        props.createAnecdote(newAnecdote)
        props.setNotification(`you created anecdote '${newAnecdote.content}'`)
        setTimeout(() => props.resetNotification(), 5000)
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
