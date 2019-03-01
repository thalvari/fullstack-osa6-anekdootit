import React from 'react'
import {voteAnecdote} from '../reducers/anecdoteReducer'

const AnecdoteList = ({store}) => {
    const anecdotes = store.getState()
    const vote = id => event => {
        event.preventDefault()
        store.dispatch(voteAnecdote(id))
    }
    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).map(a =>
                <div key={a.id}>
                    <div>
                        {a.content}
                    </div>
                    <div>
                        has {a.votes}
                        <button onClick={vote(a.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList
