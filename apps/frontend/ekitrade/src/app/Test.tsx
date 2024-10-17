import { useState, useEffect } from "react"

const Test = () => {
 const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/trade/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <div className="p-4 text-center text-7xl text-blue-500 z-50">{message}</div>;
}

export default Test