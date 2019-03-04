import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import anecdoteService from './services/anecdotes'
import {initAnecdotes} from "./reducers/anecdoteReducer";

const App = props => {
    useEffect(() => {
        anecdoteService.getAll().then(anecdotes => props.initAnecdotes(anecdotes))
    }, [])
    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter/>
            <Notification/>
            <AnecdoteList/>
            <AnecdoteForm/>
        </div>
    )
}

export default connect(null, {initAnecdotes})(App)
