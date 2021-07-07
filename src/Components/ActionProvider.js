class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hola! Espero te encuentres bien")
      this.updateChatbotState(greetingMessage)
    }

    greet2(){
        const greeting2Message = this.createChatBotMessage("Luis@gmail.com")
        this.updateChatbotState(greeting2Message)
    }

    greet3(){
        const greeting2Message = this.createChatBotMessage("02129771756 / 04242663931 / 04149875634")
        this.updateChatbotState(greeting2Message)
    }

    greet4(){
        const greeting2Message = this.createChatBotMessage("Ig:@E-Vent_vzla\nFacebook: E-Vent Venezuela\nTwitter: E-Vent Vzla")
        this.updateChatbotState(greeting2Message)
    }
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider