import React, { useState } from 'react';
import "../Components/list.css";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';




const List = (props) => {
    const [checkbox, setCheckbox] = useState(true);

    const delApi = async (id) => {
        await axios.delete(`https://43a0-2400-adc1-16b-5100-e1ef-ee90-3f97-5e04.ngrok-free.app/todos/remove/${id}`);
        await props.getData();
        toast.warn("Deleted Successfully");
    }

    const editHandler = (todo) => {
        props.settodoInput(todo);
    }



    const putReqHandler = async (id, todo) => {
        const response = await axios({
            method: 'PUT',
            url: 'https://43a0-2400-adc1-16b-5100-e1ef-ee90-3f97-5e04.ngrok-free.app/todos/update',
            data: {
                id: id,
                todo: props.todoInput
            }
        });
        props.getData();
        toast.success("Updated Successfully");

    }

    const doneHandler = async (id) => {
        const response = await axios({
            method: 'PUT',
            url: 'https://43a0-2400-adc1-16b-5100-e1ef-ee90-3f97-5e04.ngrok-free.app/todos/update',
            data: {
                id: id,
                done: checkbox
            }
        });
        props.getData();
        console.log(checkbox)
        // toast.success("Updated Successfully");
    }


    return (
        <>
            {props.todos.map((elem, i) => {
                return <li key={i} className='todo-li'>
                    {elem.todo}
                    <div className='icons-box'>
                        <Checkbox type="checkbox" onChange={(e) => { setCheckbox(!checkbox) }} onClick={() => doneHandler(elem._id)} checked={true}/>
                        <DeleteIcon onClick={() => delApi(elem._id)} />
                        <EditIcon onClick={() => editHandler(elem.todo)} />
                        <Button variant="contained" onClick={() => putReqHandler(elem._id, elem.todo)} color="primary">Update Todo</Button>
                    </div>
                </li>
            })}
        </>
    )
}

export default List