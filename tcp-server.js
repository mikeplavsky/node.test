var tcp = require('net');

var srv = tcp.createServer(function(socket) {
  
  socket.write("Hello!\n");
  socket.write("World!\n");

  socket.on( 'data', function (data) {
    socket.write(data);
  }); 

});

srv.listen(8000);

