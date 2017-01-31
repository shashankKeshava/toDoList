import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibityFilter } from '../actions';
const { SHOW_ALL } = VisibityFilter;

function visibityFilter(state = SHOW_ALL, actions) {
    switch (actions.type) {
        case SET_VISIBILITY_FILTER:
            return actions.filter
        default:
            return state
    }
}

function toDoS(state = [], actions) {
    switch (actions.type) {
        case ADD_TODO:
            return [...state, {
                text: actions.text,
                completed: false
            }]
        case TOGGLE_TODO:
            return state.map((toDoS, index) => {
                if (index == actions.index) {
                    return Object.assign({}, todo, { completed: !todo.completed })
                }
                return todo;
            })
        default:
            return state;
    }
}


const todoApp = combineReducers({
    visibityFilter,
    toDoS
})

export default todoApp;
