import React, { useState, useRef, useEffect } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"})
  }, [])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }


  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src='images/profile-placeholder-icon.svg' className='chat-user-profile-img' />
          <div className='texts'>
            <span className='chat-user-name'>Abhishek Talkokul</span>
          </div>
        </div>
        <div className='icons'>
          <img src='images/call-icon.svg' className='call-icon' />
          <img src='images/video-call-icon.svg' className='video-call-icon' />
          <img src='images/more-icon.svg' className='more-icon' />
        </div>
      </div>
      <div className='middle'>
        <div className='message'>
          <img src='images/profile-placeholder-icon.svg' className='message-profile-image'/> 
          <div className='texts'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='images/profile-placeholder-icon.svg' className='message-profile-image'/> 
          <div className='texts'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='images/profile-placeholder-icon.svg' className='message-profile-image'/> 
          <div className='texts'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='images/profile-placeholder-icon.svg' className='message-profile-image'/> 
          <div className='texts'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem Ipsum is simply.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
        
      </div>
      <div className='bottom'>
        <div className='attach-wrap'>
          <img src='images/attach-icon.svg' className='attach-icon' />
        </div>
        <div className='input-wrap'>
          <input placeholder='Type a message...' className='message-input' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='emoji-wrap'>
          <img src='images/emoji-icon.svg' className='emoji-icon' onClick={() => setOpen(prev => !prev)} />
          <div className='picker'>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <div className='send-wrap'>
          <img src='images/send-icon.svg' className='send-icon' />
        </div>
      </div>
    </div>
  )
}

export default Chat