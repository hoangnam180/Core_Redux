import { useDispatch } from 'react-redux'
import {addTitle,addNewTodo} from '../../../actions/todo'
import { useSelector } from 'react-redux'
const Input = () => {
    const title = useSelector(state => state.todo.title)
    const dispatch = useDispatch();
    return ( 
        <>
            <input type="text" value={title} onChange={(e)=>dispatch(addTitle(e.target.value))}  />
            <button onClick={()=>{dispatch(addNewTodo(title))}}>Add</button>
        </>
     );
}
 
export default Input;
