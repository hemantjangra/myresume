import {FC, useEffect, useState} from 'react';
import {WebSocketInterface, UA} from 'jssip';

interface ITestCall {

}

function TestCall({}: ITestCall) {
  const [phone, setPhone] = useState<any>();

  useEffect(() => {
    const socket = new WebSocketInterface('wss://tryit.jssip.net:10443');
    const configurations = {
      sockets: [socket],
      uri: 'sip:hemant_ggpgjm@tryit.jssip.net',
    };

    const testPhone = new UA(configurations);
    testPhone.start();





    setPhone(testPhone)


  },[]);

  function callHandler(){

    const eventHandlers = {
      'progress': function (e:any) {
        console.log('call in progress event arguments ', e);
      },
      'failed': function (e:any) {
        console.log('call failed event arguments ', e);
      },
      'ended': function (e:any) {
        console.log('call ended event arguments ', e);
      },
      'connected': function (e:any) {
        console.log('call connected event arguments ', e);
      },
      'confirmed': function (e:any) {
        console.log('call confirmed event arguments ', e);
      }
    }

    const options = {
      eventHandlers,
      mediaConstraints: {
        'audio': true,
        'video': true
      }
    }
    phone.call('sip:hemantsclient_zfd86p@tryit.jssip.net', options)

  }

  return <button onClick={callHandler}>Call</button>
}

export default TestCall;