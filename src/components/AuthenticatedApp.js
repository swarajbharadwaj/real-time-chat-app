import React, { useState, useEffect } from 'react';
import '../styles/auth.css';
import { db } from '../config/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore'; // Updated import statements

function AuthenticatedApp() {
  const [chatroomName, setChatroomName] = useState('');
  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    const fetchChatrooms = async () => {
      const querySnapshot = await getDocs(collection(db, 'chat-rooms'));
      const chatroomData = querySnapshot.docs.map((doc) => doc.data());
      setChatrooms(chatroomData);
    };

    fetchChatrooms();
  }, []);

  const createChatroom = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      await addDoc(collection(db, 'chat-rooms'), { name: chatroomName }); // Create chatroom
      console.log('Chatroom created successfully');
      setChatroomName(''); // Clear input field
    } catch (error) {
      console.error('Error creating chatroom:', error);
    }
  };

  return (
    <div className="chatroom-form">
      <form onSubmit={createChatroom}>
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
          {chatrooms.map((chatroom, index) => (
            <li key={index}>
              <button>{chatroom.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { AuthenticatedApp };
