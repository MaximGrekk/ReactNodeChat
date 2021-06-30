import React from 'react'
import s from './chat-list__item.module.scss'


const ChatListItem = () => {
    return (
        <li className={s.chat__item}>
            <button type="button" className={s.chat__button}>
                <img width="35px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" alt="userAvatar" className={s.chat__avatar}/>
                <p className={s.chat__name}>Some user</p>
            </button>
        </li>
    )
}

export default ChatListItem;