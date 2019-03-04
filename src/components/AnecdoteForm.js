import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {resetNotification, setNotification} from '../reducers/notificationReducer'

const AnecdoteForm = ({store}) => {
    const create = event => {
        event.preventDefault()
        store.dispatch(createAnecdote(event.target.content.value))
        store.dispatch(setNotification(`you created anecdote '${event.target.content.value}'`))
        setTimeout(() => store.dispatch(resetNotification()), 5000)
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

export default AnecdoteForm
