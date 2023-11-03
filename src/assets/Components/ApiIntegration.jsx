import React from 'react';


const ApiIntegration = () => {
    const getData = async () => {
        let response = await axios.get("https://9b3c-2400-adc1-16b-5100-fc62-80a2-4435-fc1e.ngrok-free.app/todos", {
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": true,
            }
        },);
        console.log(response.data.Todos)
    }
    return (
        <>

        </>
    )
}

export default ApiIntegration