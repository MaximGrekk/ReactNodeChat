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
    
    socket.on("message", (data) => { 
      const myMessage = { body: data, id: socket.id }; 
      console.log(data);
      io.emit("message", myMessage); 
    });
  } 
  else {
    socket.disconnect();
  }

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  });

  socket.on("disconnect", (socket) => { 
    --onlineUsers; 
    console.log("A user disconnected");
  });
});

server.listen(8000, () => {
  console.log('server started...')
})
