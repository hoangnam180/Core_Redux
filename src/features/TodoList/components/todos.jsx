 import { useSelector } from 'react-redux';
import {deleteTodo,updateTodo} from '../../../actions/todo'
const Todos = ({list,dispatch}) => {
    const title = useSelector(state => state.todo.title)
    return ( 
        <div>
            <ul>
                {list.map((item,index)=>(
                    <li key={index}>{item.title} 
                    <span onClick={()=>dispatch(deleteTodo(index))} style={{marginLeft:'145px'}}>
                        Xóa
                    </span>
                    <span onClick={()=>dispatch(updateTodo(index,title))} style={{marginLeft:'145px'}}>
                        Sửa
                    </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default Todos;