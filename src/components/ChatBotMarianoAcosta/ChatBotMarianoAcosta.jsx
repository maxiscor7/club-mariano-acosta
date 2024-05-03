import { Chatbot } from 'react-chatbot-kit';
import MessageParser from './MessageParser';
import config from './Config';
import ActionProvider from './ActionProvider';

export default function ChatBotMarianoAcosta() {
    return (
        <div>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider} />
        </div>
    );
};