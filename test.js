var nodejava=require('./jabsorb');

// create jabsorb (json-rpc) client for talking to Java
var java = new nodejava.client(["compressorRater.doCompression"], "http://compressorrater.thruhere.net/json-rpc");

// pick the compressors we want to use
var compressors = {javaClass: "java.util.HashSet", set:{"Noop":"Noop", "JSMin":"JSMin", "gzip":"gzip"}};

// call the remote Java server via json-rpc
java.compressorRater.doCompression(
  function(r, e)
  {
    if (r && !e)
    {
      console.log ("got a result!");
      console.log ("result: " + JSON.stringify(r));
    }
    else
    {
      console.log("exception occured:");
      console.log("exception:  " + JSON.stringify(e));
    }
  }, "var x=1000;function (quazimodo)      {  quazimodo = 10*1000^8  -  x;   return quazimodo;}", compressors);

