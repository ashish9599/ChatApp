import Style from "../styles/footer.module.css";
import React, { useEffect, useRef, useState } from 'react';
import ChatBox from "./chatBox";



const userlist = ["Alan", "Bob", "Carol", "Dean", "Elin"];
function Footer() {
    
  const [messages, setMessages] = useState([]);
    const inputref=useRef(null);

useEffect(()=>{
    inputref.current.focus();
},[])


    const handleSubmit = (event) => {
        event.preventDefault();
        const inputmessage = event.target.message.value;
        const randomUser = userlist[Math.floor(Math.random() * userlist.length)];
        const newMessage = {
            username: randomUser,
            message: inputmessage,
        };

        setMessages([...messages, newMessage]);
        event.target.reset();
    };



    return (
        <>
            <ChatBox messages={messages} />
            <form onSubmit={handleSubmit} className={Style.footer}>
                <input ref={inputref} type="text" name="message" placeholder="Type a message"  required />
                <button type="submit">Send</button>
            </form>
        </>
    )
}



export default Footer;