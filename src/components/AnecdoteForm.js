import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer'

const AnecdoteForm = ({store}) => {
    const create = event => {
        event.preventDefault()
        store.dispatch(createAnecdote(event.target.content.value))
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
