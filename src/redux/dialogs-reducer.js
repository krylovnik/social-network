const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogsData: [
        {id: 1, name: 'Danial'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Jack'},
        {id: 4, name: 'Vladimir'},
        {id: 5, name: 'Pavel'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        case ADD_MESSAGE :
            let messageText = state.newMessageText;
            return {
                ...state,
                newMessageText : '',
                messagesData: [...state.messagesData,{id: 6, message: messageText} ]
            }
        default:
            return state;
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
}

export default dialogsReducer;