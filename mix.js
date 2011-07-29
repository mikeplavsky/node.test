var http = require( 'http' );

setInterval( function () {
  
  http.get( {host: 'sp2010dc', port: 3141 }, function(res) { 
    console.log( res.headers ); 
  });

}, 5000 );

setInterval( function() {
  console.log( "Hello, World!" );
}, 2000 );


http.Server(function(req,res) {
  
  res.writeHead(200);
  
  setTimeout( function() {
    res.end( "Done as you wanted!" );
  }, 2000);

}).listen( 8000 );
