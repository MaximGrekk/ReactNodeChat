import React from 'react'
import s from './message.module.scss'


const Message = (props) => {
    // console.log(props)
    return (
        <div className={props.item.sender === props.socket.id ? s.message__item : s.message__itemRight} onLoad={props.m}>
            <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" alt="Avatar" className={s.chat__avatar} />
            <p>{props.item.body}</p>
            <p><small>{props.item.time}</small></p>
        </div>
    )
}

export default Message;