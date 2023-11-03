import React, { useState } from 'react'

const List = (props) => {
    const [checkbox, setCheckbox] = useState(false)

    return (
        <>
            {props.todos.map((elem) => {
                return <li>
                    {elem}
                    <input type="checkbox" onChange={(e) => {setCheckbox(!checkbox)}}/>
                </li>

            })}
        </>
    )
}

export default List