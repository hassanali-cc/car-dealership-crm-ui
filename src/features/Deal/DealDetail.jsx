import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLoaderData } from 'react-router-dom';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { fetchDealDetail } from '../../services/apiDeals.js';

const SOCKET_URL = 'ws://localhost:8000'

const DealDetail  = () => {
  const { userId } = useSelector((state) => state.user)
  const deal = useLoaderData()
  const { id } = useParams();
  const [customerId, setCustomerId] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(SOCKET_URL, {
    shouldReconnect: true,
    reconnectAttempts: 3,
    reconnectInterval: 5000
  });

  useEffect(() => {
    if (lastMessage !== null) setMessageHistory((prev) => prev.concat(lastMessage));
  }, [lastMessage]);

  useEffect(() => {
      return () => console.log("Unset deal status")
  }, [])

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const placeBid = () => {
      if (customerId) {
          sendJsonMessage({
              type: 'PLACE_BID',
              dealId: id,
              customerId
          });
      }
  }

  return (
    <div>
      <div className='mb-4'>Connection Status: {connectionStatus}</div>
      <div>Deal Detail</div>
      <h1>Name: {deal?.title}</h1>
      <p>Description: {deal?.description}</p>
      <div>
        <input value={customerId} placeholder='Enter Customer ID' onChange={(e) => setCustomerId(e.target.value)} />
        <button onClick={placeBid} disabled={readyState !== ReadyState.OPEN}>Place Bid</button>
      </div>
      <br></br>
      <div>Message History:</div>
      <ul>
        {messageHistory.map((message, idx) => (
          <div key={idx}>{message ? message.data : null}</div>
        ))}
      </ul>
    </div>
  );
};

export async function loader({ params }) {
    return await fetchDealDetail(params.id);
}

export default DealDetail;
