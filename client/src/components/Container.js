import '../App.css';
import { useEffect } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import { useChat } from "../context/ChatContext"

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeChat((message) => {
      setMessages((lastState) => [...lastState, { message }]);
    });
    // subscribeInitialMessages((messages) => setMessages(messages)); backend kisminda da yorum satirina cevrildi
  }, []);
  return (
    <div className='App'>
      <ChatList />
      <ChatForm />
    </div>
  )
}

export default Container