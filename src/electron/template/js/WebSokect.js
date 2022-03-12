const WEBSOCKET_ADDRESS = "ws://127.0.0.1:8003";

let socket;
function ConectWithServer(){
   socket = new WebSocket("ws://127.0.0.1:8003");

   socket.addEventListener("open",()=>{
       console.log("The conection Established with websocket server");
   })
}