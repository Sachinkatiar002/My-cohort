import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
   const focusRef = useRef();

   function handleButtonClick () {
     focusRef.current.focus()
   }

   useEffect(function() {
     focusRef.current.focus()
   },[focusRef])

    return (
        <div>
            <input ref={focusRef}  type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
