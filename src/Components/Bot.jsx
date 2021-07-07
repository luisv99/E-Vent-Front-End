import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

export default function Bot(){
    return(
        <div>
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
        </div>
    )
}