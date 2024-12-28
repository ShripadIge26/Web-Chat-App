import React, { useState, useRef, useEffect } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react';
import { init, useQuery,id } from '@instantdb/react';


const Chat = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [userDet, setUserDet] = useState();
  const [userId, setUserId] = useState('5aee05e9-b2a5-488b-bac6-2e4d58d591cb');
  const [messages, setMessages] = useState([]);
  const [sessionValue, setSessionValue] = useState(sessionStorage.getItem('selectedUser'));
  

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])
  const db = init({
    // appId: "b5f1e5e3-6c9c-43e4-a00c-49155d437746", 
    appId: "361e1b0e-f452-4bab-b460-a2a34a13cb00", 
  });
  
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }

  const handleSendMessage = async () => {
    if (!userId) return;
  
    const db = init({
      appId: "361e1b0e-f452-4bab-b460-a2a34a13cb00", 
      // appId: "b5f1e5e3-6c9c-43e4-a00c-49155d437746", 
    });
  
    const message = {
      message: text,
      toId: userDet?.id,
    };
  
    await db.transact(db.tx.chathistory[id()].update(message));
  
    setText("");
  }

  const { data, error } = db.useQuery({chathistory:{}});

  

  useEffect(() => {

    if (data) {
      setMessages(data.documents);
    }
  }, [data]);


  useEffect(() => { 
    const userDetails = sessionStorage.getItem('selectedUser');
    if (userDetails) {
      setUserDet(JSON.parse(userDetails)); // Update userDet state with parsed data
    }
    const handleStorageChange = () => {
      setSessionValue(sessionStorage.getItem('selectedUser'));
    };

    window.addEventListener('storage', handleStorageChange);
  }, []);

  const filterdata = data?.chathistory?.filter((d) => d.toId === userDet?.id);
  // const userDetails = sessionStorage.getItem('selectedUser');
// console.log(userDetails)
  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img alt="" src='images/profile-placeholder-icon.svg' className='chat-user-profile-img' />
          <div className='texts'>
            <span className='chat-user-name'>{userDet?.username}</span>
          </div>
        </div>
        <div className='icons'>
          <img alt="" src='images/call-icon.svg' className='call-icon' />
          <img alt="" src='images/video-call-icon.svg' className='video-call-icon' />
          <img alt="" src='images/more-icon.svg' className='more-icon' />
        </div>
      </div>
      <div className='middle'>
        {filterdata?.map((message, index) => (
          <div key={index} className={`message ${message.toId === userDet?.id ? 'own' : ''}`}>
            {message.userId !== userId && (
              <img alt="" src='images/profile-placeholder-icon.svg' className='message-profile-image'/> 
            )}
            <div className='texts'>
              <p>
                {message.message}
              </p>
              <span>{message.createdAt}</span>
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
        
      </div>
      <div className='bottom'>
        <div className='attach-wrap'>
          <img alt="" src='images/attach-icon.svg' className='attach-icon' />
        </div>
        <div className='input-wrap'>
          <input placeholder='Type a message...' className='message-input' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='emoji-wrap'>
          <img alt="" src='images/emoji-icon.svg' className='emoji-icon' onClick={() => setOpen(prev => !prev)} />
          <div className='picker'>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <div className='send-wrap'>
          <img alt="" src='images/send-icon.svg' className='send-icon' onClick={handleSendMessage} />
        </div>
      </div>
    </div>
    // <p>hello</p>
  )
}

export default Chat