import React from 'react'
import {connect} from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {resetNotification, setNotification} from "../reducers/notificationReducer";

const AnecdoteList = props => {
    const vote = anecdote => event => {
        event.preventDefault()
        props.voteAnecdote(anecdote.id)
        props.setNotification(`you voted '${anecdote.content}'`)
        setTimeout(() => props.resetNotification(), 5000)
    }
    return (
        <div>
            {props.visibleAndSortedAnecdotes.map(a =>
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

const mapStateToProps = ({anecdotes, filter}) => ({
    visibleAndSortedAnecdotes: anecdotes
        .filter(a => a.content.toLowerCase().includes(filter))
        .sort((a, b) => b.votes - a.votes),
    filter
})

const mapDispatchToProps = {
    voteAnecdote,
    setNotification,
    resetNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList
