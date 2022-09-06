import React, { useState } from "react"
import { ReactDOM } from "react"

function Button(props) {
    const [count, setCount] = useState(0);    
    return (
    <div>
        <button type="submit" onClick={() => setCount(count+parseInt(props.clickValue[0]))}>{props.clickAction[0]}</button>
        <button type="submit" onClick={() => setCount(count+parseInt(props.clickValue[1]))}>{props.clickAction[1]}</button>
        <button type="submit" onClick={() => setCount(count+parseInt(props.clickValue[2]))}>{props.clickAction[2]}</button>
        <h2>{count}</h2>
    </div>);
}

export default Button