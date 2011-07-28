var http = require( 'http' );

var srv = http.createServer(function(req,res) {

  res.writeHead( 200, {'conten-type': 'text/plain' } );

  res.write( 'Hello!\n' );

  setTimeout ( function () {
    res.end( 'World!\r\n' );
  }, 10000);
  
});

srv.listen( 2000 );
