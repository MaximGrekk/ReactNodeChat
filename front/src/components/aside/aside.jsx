import React from 'react'
import ChatList from '../chat-list'
import ChatFilter from '../chat-filter'
import s from './aside.module.scss'

const Aside = () => {
    return (
        <aside className={s.aside}>
            <ChatFilter />
            <ChatList />
        </aside>
    )
}

export default Aside;