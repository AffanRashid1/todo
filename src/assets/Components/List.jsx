import React from 'react'

const List = ({ todos }) => {
    return (
        <>
            {todos.map((elem) => {
                return <li>
                    {elem}
                </li>

            })}
        </>
    )
}

export default List