import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) =>{
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat];

    const  renderMessages = ()=>{
        const keys = Object.keys(messages);
        return keys.map((key,index) => {
            const message = messages[key];
            
        })
    }
    renderMessages();
    return (
        <div>
            ChatFeed
        </div>
    );
}
export default ChatFeed