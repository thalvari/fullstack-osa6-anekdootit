export const createAnecdote = data => ({
    type: 'CREATE',
    data
})

export const voteAnecdote = id => ({
    type: 'VOTE',
    data: {id}
})

export const initAnecdotes = anecdotes => ({
    type: 'INIT',
    data: anecdotes,
})

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'VOTE':
            const id = action.data.id
            const anecdoteToChange = state.find(a => a.id === id)
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }
            return state.map(a => a.id !== id ? a : changedAnecdote)
        case 'CREATE':
            return state.concat(action.data)
        case 'INIT':
            return action.data
        default:
            return state
    }
}

export default anecdoteReducer
