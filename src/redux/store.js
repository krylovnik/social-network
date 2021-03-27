import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi,how are you', likeCount: 12},
                {id: 2, message: "It's my first post", likeCount:14}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log("State has been changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
