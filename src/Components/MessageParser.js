class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hola")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("email")) {
        this.actionProvider.greet2();
      }

      if (lowerCaseMessage.includes("telefono")) {
        this.actionProvider.greet3();
      }

      if (lowerCaseMessage.includes("redes")) {
        this.actionProvider.greet4();
      }
    }
  }
  
  export default MessageParser;