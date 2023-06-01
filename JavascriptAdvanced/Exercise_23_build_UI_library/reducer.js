import storage from "./utill/storage.js"
const init = {
    todos:storage.get(),
    filter: 'all',
    filters:{
        all: () => true,
        active: (todo) => !todo.isCompleted,
        completed: (todo) => todo.isCompleted
    },
    editIndex : null
}

const actions = {
    ADD({todos}, title){
        todos.push({title, isCompleted: false})
    },
    REMOVE({todos}, index){
        todos.splice(index, 1)
    },
    SwitchCompleted({todos, filters}, index){
        todos[index].isCompleted = !todos[index].isCompleted
    },
    ChekedToggle({todos, filters}){
        if(todos.every(filters.completed)){
            todos.forEach(todo => {
                todo.isCompleted = false
            });
        }else{
            todos.forEach(todo => {
                todo.isCompleted = true
            });
        }
    },
    Filters(state, fill){
        state.filter = fill
    },
    CheckFilter(state){
        if(state.todos.every(state.filters.completed)){
            state.filter = 'completed'
        }else if(state.todos.every(state.filters.active)){
            state.filter = 'active'
        }else{
            state.filter = 'all'
        }
    },
    ClearCompleted(state){
        state.todos = state.todos.filter(state.filters.active)
    },
    StartEdit(state, index){
        state.editIndex = index
    },
    Save(state, newTitle){
        if(state.editIndex !== null){
            state.todos[state.editIndex].title = newTitle
            state.editIndex = null
        }
    }
}

function reducer(state = init, action , args){
    actions[action] && actions[action](state, ...args)
    action !== "Filters" && actions.CheckFilter(state)
    storage.set(state)
    return state
}

export default reducer