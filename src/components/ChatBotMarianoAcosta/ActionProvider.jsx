import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const futbolInfMasc = () => {
    const message = createChatBotMessage('Just type in yor name to begin')
    updateState(message)
  }
  const secondAction = () => {
    const message = createChatBotMessage('second actions')
    updateState(message)
  }

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message]
    }))
  } 

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            futbolInfMasc,
            secondAction
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;