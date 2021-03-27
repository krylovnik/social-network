import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messagesElements = state.messagesData.map( (message) =>
        <Message message={message.message} key={message.id}/>)

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (event) => {
        let messageText = event.target.value;
        props.updateNewMessageBody(messageText);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={c.dialogPage}>
            <div className={c.dialogsList}>
                {dialogElements}
            </div>
            <div className={c.allMessages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder="Enter your message" value={state.newMessageText}
                                   onChange={onMessageChange} ></textarea></div>
                    <div><button onClick={addMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
