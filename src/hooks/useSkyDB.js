import { useState } from 'react';
import { SkynetClient } from 'skynet-js';

const client = new SkynetClient();

export const useSkyDBSetJson = () => {
  const [status, setStatus] = useState('');

  const setJSON = async (privateKey, dataKey, message) => {
    try {
      setStatus('setting');

      const jsonMessage = { message };

      await client.db.setJSON(privateKey, dataKey, jsonMessage);

      setStatus('completed');
    } catch (error) {
      setStatus('error');
    }
  };

  return [status, setJSON];
};

export const useSkyDBGetJson = () => {
  const [status, setStatus] = useState('');
  const [skyDbEntry, setSkyDbEntry] = useState({});

  const getJSON = async (publicKey, dataKey) => {
    try {
      setStatus('getting');

      const response = await client.db.getJSON(publicKey, dataKey);
      setSkyDbEntry(response.data);

      setStatus('completed');
    } catch (error) {
      setStatus('error');
    }
  };

  return [skyDbEntry, status, getJSON];
};
