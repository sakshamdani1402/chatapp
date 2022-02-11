import {ChatEngine} from 'react-chat-engine'
import ChatFeed from "./components/ChatFeed";
import './App.css';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="12f1f3a2-e626-422c-81b0-2ea4a1a15822"
      userName="saksham"
      userSecret="123123"
      renderChatFeed = {(ChatFeedProps)=> <ChatFeed {...ChatFeedProps}/> }
    />

  );
}

export default App;
