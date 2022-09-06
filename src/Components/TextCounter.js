import React, { useState } from "react"
import { ReactDOM } from "react"

function TextCounter(props) {
    const [count, setCount] = useState(0);    

    const handleChange = (event) => {
        const element = event.target;
        setCount(element.value.length);
      };

    return (
        <div>
            <textarea cols={80} rows={10} onChange={handleChange} />
             <div>Count: {count}</div>
        </div>);
}

export default TextCounter