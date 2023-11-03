import axios from 'axios'
import React from 'react'

const ApiIntegration = () => {
    const getData = async () => {
        let response = await axios.get("https://8fd4-2400-adc1-16b-5100-dcd3-f5c1-8040-826f.ngrok-free.app/todos", {
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": true,
            }
        },);
        console.log(response.data)

    }
    getData();
    return (
        <>

        </>
    )
}

export default ApiIntegration