import React, {useState, useEffect} from 'react'
import s from './messenger.module.scss'
import Message from '../message'
// import { socket } from "../app/app";
import socketClient  from "socket.io-client";

const SERVER = "http://localhost:8000";
const socket = socketClient(SERVER);
let feedback = document.getElementById('feedback');


const Messenger = () => {
    useEffect(() => {
        socket.on('connected', () => {
            console.log("Socket is running...")
        })
        socket.on("disconnect", () => {
            console.log("Socket is disconnect...");
        });
    }, [])

    let [message, setMessage] = useState("")
    let [messages, setMessages] = useState([])
    let [typing, setTyping] = useState("");
    let [time, setTime] = useState();
    
    const onSubmit = (e) => {
        e.preventDefault();
        socket.emit("message", message);
        setMessage("");
    }

    const onKeyPress = (e) => {
        if(e) {
            // console.log(e)
            console.log(feedback)
            socket.emit('typing', e.target.value);
            clearInterval(time)
            setTime(setTimeout(timeoutFunction, 2000))
        }
    }
    
    const messageFunc = (message, id) => {
        let time = new Date();
        const newMessage = {
            id: Date.now(),
            time: (`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`),
            body: message,
            created_at: Date.now(),
            updated_at: null,
            sender: id
        }
        setMessages((spread) => {
            return [...spread, newMessage];
          });
    }

    useEffect(() => {
        socket.on("message", (data) => {
            messageFunc(data.body, data.id);
        });
    },[])

    function timeoutFunction() {
        socket.emit("typing", false);
      }

    socket.on('typing', function(data){
        // console.log('User is typing a message...');
        if(data) {
            setTyping('User is typing message...');
            console.log(typing);
        }
        else {
            setTyping('');
        }
        
    });

    return (
        <div className={s.main}>
            <div className={s['messages-body']}>
                <div id="m" className={s.messages}>
                    {messages.map(item => {
                        return <Message key={item.id} socket={socket} item={item} m={() => document.getElementById('m').lastChild.scrollIntoView(true)
                    }/> 
                    })}
                </div>
            </div>
            <div id="feedback" className={s.feedback}>{typing}</div>
            <div className={s.message__form}>
                <form id="form" onSubmit={onSubmit}>
                    <button type="button" id="messageBtn" className={s.message__file}><i className="fas fa-file"></i></button>
                    <input type="text" required value={message} onKeyUp={onKeyPress} onChange={(e) => setMessage(e.target.value)} id="messageInput" placeholder="Введите сообщение..." className={s.message__input}/>
                        <button type="submit" className={s.message__send}><i className="fas fa-paper-plane"></i></button>
                </form> 
            </div>
        </div>
    )
}

export default Messenger;