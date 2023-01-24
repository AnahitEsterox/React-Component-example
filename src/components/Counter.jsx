import React, {useState} from "react";

const Counter = () => {
    const [likes, setLikes] = useState(0)

    function increment() {
        setLikes(likes + 1)
    }

    function decrement() {
        setLikes(likes - 1)
    }
    return (
        <div>
            <h1 className="head border sides-2" style={{color: 'darkblue'}}>{likes}</h1>
            <button className="btn" onClick={increment}>Increment</button>
            <button  className="btn" onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;