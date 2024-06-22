import { ActionsTypes, DialogPageType, MessageType } from "./store";

const ADD_MESSAGE = "ADD_MESSAGE";

const initialState: DialogPageType = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Viktor" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yoohoo" },
    { id: 4, message: "Yoohoo" },
  ],
};

export const dialogsReducer = (
  state: DialogPageType = initialState,
  action: ActionsTypes
): DialogPageType => {
  switch (action.type) {
    case "ADD_MESSAGE":
      const newMessage: MessageType = { id: 5, message: action.newMessageBody };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export type AddMessageType = ReturnType<typeof addMessageActionCreator>;

export const addMessageActionCreator = (newMessageBody: string) => {
  return {
    type: ADD_MESSAGE,
    newMessageBody,
  } as const;
};
