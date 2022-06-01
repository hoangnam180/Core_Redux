export const addNewTodo = (todo)=> {
    return {
        type : 'ADD_TODO',
        payload : todo
    }
}
export const addTitle = (title)=> {
    return {
        type : 'ADD_TITLE',
        payload : title
    }
}

export const deleteTodo = (id)=> {
    return {
        type : 'DELETE_TODO',
        payload : id
    }
}
export const updateTodo = (id,value)=> {
    return {
        type : 'UPDATE_TODO',
        payload : {id:id,value:value}
    }
}
