import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibityFilter } from '../actionType';
const { SHOW_ALL } = VisibityFilter;

function visibityFilter(state = SHOW_ALL, actionType) {
    switch (actionType.type) {
        case SET_VISIBILITY_FILTER:
            return actionType.filter
        default:
            return state
    }
}

function toDoS(state = [], actionType) {
    switch (actionType.type) {
        case ADD_TODO:
            return [...state, {
                text: actionType.text,
                completed: false
            }]
        case TOGGLE_TODO:
            return state.map((toDoS, index) => {
                if (index == actionType.index) {
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
