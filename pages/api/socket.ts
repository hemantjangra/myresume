
import {Server} from 'socket.io';

function socketHandler(
  req: any,
  res: any
) {
  console.log('socket handler hit');
  if(!res.socket.server.io){
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
  }
  res.end();
}

export default socketHandler;
