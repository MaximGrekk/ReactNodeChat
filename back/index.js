const http = require('http')
const socketIo = require('socket.io')

const server = http.createServer()

const io = socketIo(server, {
  cors: '*'
})

let onlineUsers = 0;

io.on("connection", (socket) => {
  if (onlineUsers < 2) {
    ++onlineUsers;
    socket.emit('connected')
    console.log("All good for: ", socket.id);
    
    socket.on("message", (data) => { // событие message
      const myMessage = { body: data, id: socket.id }; // id юзера и само сообщение
      console.log(data);
      io.emit("message", myMessage); // отправка сообщения всем юзерам
    });
  } 
  else {
    socket.disconnect(); 
  }

  socket.on("disconnect", (socket) => { 
    --onlineUsers; // убираем юзера с нужным из массива подключенных юзеров при отключении
    console.log("A user disconnected");
  });
});

server.listen(8000, () => {
  console.log('server started...')
})








// const http = require('http')
// const socketIo = require('socket.io')

// const server = http.createServer()

// const io = socketIo(server, {
//   cors: '*'
// })

// io.on('connection', (socket) => {
//   console.log('connected')
//   console.log(socket.id)
  
//   socket.on('message', (data) => {
//     console.log('message: ', data)
    
//     setTimeout(() => {
//       io.emit('message', data)
//     }, 3000)
//   })
// })

// // io.on('message', (data) => {
// //   console.log('message: ', data)
// //   io.emit('message', data)
// // })

// const obj = {
//   chatId: []
// }

// server.listen(3000, () => {
//   console.log('server started...')
// })
