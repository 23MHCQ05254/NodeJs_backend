import axios from "axios";
import React, { useState } from "react";

function Home() {

    // Create state to store data
    const [data, setData] = useState(null);

    const fetchData = async () => {
        let Data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("API Response:", Data.data);       // Print actual JSON
        setData(Data.data);            // Save JSON into state
    };

    return (
        <>
            <h1>This is fetch data from axios</h1>

            {/* Must call function */}
            <button onClick={fetchData}>Click me</button>

            {/* Show data only if it exists */}
            <p>{data ? JSON.stringify(data) : "No data yet"}</p>
        </>
    );
}

export default Home;
