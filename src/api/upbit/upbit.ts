import axios from "axios";
const { of, fromEvent } = require('rxjs');
const { map, switchMap, mergeMap, takeUntil } = require('rxjs/operators');

axios.defaults.baseURL = 'https://api.upbit.com/v1'


export const fetchUpbitMarketCoinList =() => axios.get("/market/all");

export const openWebSocketToUpbit = (payload : string) => {
  let webSocket = new WebSocket("wss://api.upbit.com/websocket/v1");

  
  webSocket.binaryType = "arraybuffer";

    webSocket.onopen = function () {
      webSocket.send(
        '[{"ticket":"test"},{"type":"trade","codes":["KRW-BTC","BTC-BCH"]},{"format":"SIMPLE"}]'
      );
    };
  

  webSocket.onmessage = function (event) {
      var enc = new TextDecoder("utf-8");

      var arr = new Uint8Array(event.data);

      console.log(enc.decode(arr));
    };

}

let webSocket = new WebSocket("wss://api.upbit.com/websocket/v1");

const io$ = of(webSocket);

const connection$ = io$.pipe(
  switchMap((io : any) => {
    fromEvent(io, 'connection').pipe(map((client : any)=> ({io,client})))
  })
)

const disconnect$ = connection$.pipe(
  mergeMap(({ client } : any) =>
    fromEvent(client, 'disconnect').pipe(map(() => client))
  )
);

const listenOnConnect = (event : any)=> {
  return connection$.pipe(
    mergeMap(({ io, client } : any ) =>
      fromEvent(client, event).pipe(
        takeUntil(fromEvent(client, 'disconnect')),
        map((data : any) => ({ io, client, data }))
      )
    )
  );
}

export const onMessageFromUpbit = (event : MessageEvent) => {
  console.log(event);
}

export const onErrorFromUpbit = (event : MessageEvent) => {
  console.log(event);
}
// var ws = new WebSocket("wss://api.upbit.com/websocket/v1");
//     ws.binaryType = "arraybuffer";
//     // 연결이 수립되면 서버에 메시지를 전송한다
//     ws.onopen = function (event) {
//       ws.send(
//         '[{"ticket":"test"},{"type":"trade","codes":["KRW-BTC","BTC-BCH"]},{"format":"SIMPLE"}]'
//       );
//     };

//     ws.onmessage = function (event) {
//       var enc = new TextDecoder("utf-8");

//       var arr = new Uint8Array(event.data);

//       console.log(enc.decode(arr));
//     };

//     ws.onerror = function (event) {
//       console.log(event.data);
//     };
