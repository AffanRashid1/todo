import React, { useState } from 'react';
import "../Components/list.css";
import DeleteIcon from '@mui/icons-material/Delete';


const List = (props) => {
    const [checkbox, setCheckbox] = useState(false)


    return (
        <>
            {props.todos.map((elem, i) => {
                return <li key={i} className='todo-li'>
                    {elem.todo}
                    <div className='icons-box'>
                        <input type="checkbox" onChange={(e) => { setCheckbox(!checkbox) }} style={{ scale: "1.3" }} />
                        <DeleteIcon />
                    </div>
                </li>

            })}
        </>
    )
}

export default List