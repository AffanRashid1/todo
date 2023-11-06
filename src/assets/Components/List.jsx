import React, { useState } from 'react';
import "../Components/list.css";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = (props) => {
    const [checkbox, setCheckbox] = useState(false)

    const delApi = async (id) => {
        await axios.delete(`https://43a0-2400-adc1-16b-5100-e1ef-ee90-3f97-5e04.ngrok-free.app/todos/remove/${id}`);
        await props.getData();
        toast.warn("Deleted Successfully");
    }

    const editHanndler = async () => {
        await axios.put("https://43a0-2400-adc1-16b-5100-e1ef-ee90-3f97-5e04.ngrok-free.app/todos/update");


    }
    return (
        <>
            {props.todos.map((elem, i) => {
                return <li key={i} className='todo-li'>
                    {elem.todo}
                    <div className='icons-box'>
                        <input type="checkbox" onChange={(e) => { setCheckbox(!checkbox) }} style={{ scale: "1.3" }} />
                        <DeleteIcon onClick={() => { delApi(elem._id) }} />
                    </div>
                </li>


            })}
        </>
    )
}

export default List