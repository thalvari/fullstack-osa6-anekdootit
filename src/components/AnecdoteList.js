import React from 'react'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {setNotification, resetNotification} from "../reducers/notificationReducer";

const AnecdoteList = ({store}) => {
    const vote = anecdote => event => {
        event.preventDefault()
        store.dispatch(voteAnecdote(anecdote.id))
        store.dispatch(setNotification(`you voted '${anecdote.content}'`))
        setTimeout(() => store.dispatch(resetNotification()), 5000)
    }
    const {anecdotes, filter} = store.getState()
    return (
        <div>
            {anecdotes
                .filter(a => a.content.toLowerCase().includes(filter))
                .sort((a, b) => b.votes - a.votes)
                .map(a =>
                    <div key={a.id}>
                        <div>
                            {a.content}
                        </div>
                        <div>
                            has {a.votes}
                            <button onClick={vote(a)}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default AnecdoteList
