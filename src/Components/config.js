import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "BOB",
  initialMessages: [createChatBotMessage("Hola! Escribe 'email' si desea saber nuestro email, 'telefono' si desea saber nuestros telefonos, 'redes' para conocer nuestras redes")],
  
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;