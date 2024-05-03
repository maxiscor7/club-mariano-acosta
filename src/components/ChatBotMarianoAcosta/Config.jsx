import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import BotAvatar from "./components/BotAvatar/BotAvatar";
import Options from "./components/Options/Options";

const config = {
  initialMessages: [createChatBotMessage(`¡Hola! Soy el asistente del Club Social y Deportivo Mariano Acosta. ¿Como puedo ayudarte?`, {
    widget: "options"
  })],
  botName: 'ChatBot',
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    header: () => <div style={{ backgroundColor: '#2898ec', padding: "5px", color: "white", borderRadius: "5px 5px 0 0" }}>Bienvenidos</div>
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      
    }
  ]
}

export default config