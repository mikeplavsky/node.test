var http = require( 'http' );

setInterval( function () {
  
  http.get( {host: 'sp2010dc', port: 3141 }, function(res) { 
    console.log( res.headers ); 
  });

}, 5000 );

setInterval( function() {
  console.log( "Hello, World!" );
}, 2000 );
