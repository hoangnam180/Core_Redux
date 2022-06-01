const initialState = {
    title:'',
    list : [
        {
            id:1,
            title:"Learn"
        }
    ]
}
const todoReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'ADD_TITLE' : {
            return {
                ...state,
                title : action.payload
            }
        }
        case 'ADD_TODO' : {
            const newList = [...state.list]
            newList.push(
                {
                    id: Math.floor(Math.random() * 1000),
                    title: action.payload,
                }
                );
            console.log(newList);
            return {
                ...state,
                title: '',
                list: newList
            }
        }
        case 'DELETE_TODO' : {
            let newList = [...state.list]
            newList.splice(action.payload,1);
            return {
                ...state, 
                list : newList,
                title: '',
            }
        }
        case 'UPDATE_TODO' : {
            let newList = [...state.list]
            newList[action.payload.id] = {id : action.payload.id,title : action.payload.value}
            return {
                ...state, 
                list : newList,
                title: '',
            }
        }
            default:{
               return state;
            }
    }
}

export default todoReducer;