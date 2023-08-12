import React, { useState } from 'react';
import '../styles/auth.css'; 
import { db } from '../config/firebase';
import 'firebase/firestore';
function AuthenticatedApp() {
    

  const [chatroomName, setChatroomName] = useState('');
 
  const snapshot =  db.collection('chat-rooms').get();
       const chatrooms = snapshot.docs.map(doc => doc.data());
  const createChatroom = async (chatroomData) => {
       try {
         await db.collection('chat-rooms').add(chatroomData);
       //  console.log('Chatroom created successfully');
       } catch (error) {
      //   console.error('Error creating chatroom:', error);
       }
       setChatroomName('');
     
     };

    

  return (
    <div className="chatroom-form">
      <form onSubmit={createChatroom(chatroomName)}>
        <input
          type="text"
          placeholder="Enter chatroom name"
          value={chatroomName}
          onChange={(e) => setChatroomName(e.target.value)}
        />
        <button type="submit">Create Chatroom</button>
      </form>
      <div className="chatroom-list">
        <h2>Previous Chatrooms</h2>
        <ul>
          {chatrooms.map((chatroom) => (
            <li key={chatroom.id}>
              <button >
                {chatroom.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


   
   export { AuthenticatedApp };