import Input from "./components/input";
import Todos from "./components/todos";
import { useDispatch, useSelector } from 'react-redux'

const TodoApp = () => {
    const todos = useSelector(state => state.todo.list)
    const dispatch = useDispatch();
    return (  
        <div>
            <Input />
            <Todos list={todos} dispatch={dispatch}/>
        </div>
    );
}
 
export default TodoApp;