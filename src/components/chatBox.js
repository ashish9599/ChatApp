import styles from '../styles/chatBox.module.css';
import React, { useEffect, useRef, useState } from 'react';



const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function ChatBox({ messages }) {

  const chatAreaRef = useRef(null);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleLike = (index) => {
    setLikes((prevLikes) => ({
             ...prevLikes,
             [index]: prevLikes[index] ? prevLikes[index] + 1 : 1,
    }));
    
  };

  return (
    <div className={styles.chatArea}>
      {messages.length === 0 ? (
        <div className={styles.noMessage}>Nothing to show in chat</div>
      ) : (
        messages.map((message, index) => {
          const userIndex = user_list.indexOf(message.username);
          const userClass = `user${userIndex + 1}`;

          return (
              <div className={styles.container}>
                <span className={styles.username}>{message.username}: </span>
                <div key={index} className={`${styles.message} ${styles[userClass]}`}>
                  <div className={styles.messageContent}>{message.message}</div>
                </div>
                <div className={styles.likes}>
                  {likes[index]===undefined ? 
                    <img src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png"
                      onClick={() => handleLike(index)} />
                  : <img src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png" 
                    onClick={() => handleLike(index)}/>
                  }
                  <span>{likes[index] || 0}</span>
                </div>
              </div>
          );
        })
      )}
    </div>
  );
}



export default ChatBox;
