import React from 'react'
import s from './chat-filter.module.scss'

const ChatFilter = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Поиск..." className={s.search__input}/>
            </form>
        </div>
    )
}

export default ChatFilter;