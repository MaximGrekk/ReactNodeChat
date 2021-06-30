import React from 'react'
import ChatListItem from '../chat-list__item'
import s from './chat-list.module.scss'


const ChatList = () => {
    return (
        <ul className={s.chats}>
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
        </ul>
    )
}

export default ChatList;