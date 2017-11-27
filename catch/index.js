"use strict";

process.on('uncaughtException', function(err) {
  console.error('Error caught in uncaughtException event:', err);
});


  
    throw new Error("error");
 
