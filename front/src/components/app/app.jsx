import React from 'react'
import s from './app.module.scss'
import Navigation from '../navigation'
import Aside from '../aside'
import Messenger from '../messenger'

const App = () => {
 
    return (
        <div className={s.app}>
            <Aside />
            <Navigation />
            <Messenger />
        </div>
    )
}

export default App;