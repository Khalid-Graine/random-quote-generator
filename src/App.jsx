import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  const [random,setRandom] = useState(Math.floor(Math.random() * 15));
  const api = 'https://type.fit/api/quotes';


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setAdvice(response.data[random]);
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
    };

    fetchData();
  }, [random]); 
  return (
    <>
      <div className='bg-gray-200 text-center p-2'>
        <p> {advice.text}</p>
        <p> {advice.author}</p>
        <button onClick={() => setRandom(Math.floor(Math.random() * 15))} className='bg-black text-white px- py-1 rounded-sm'>Get Random Advice</button>
      </div>
    </>
  );
}

export default App;
