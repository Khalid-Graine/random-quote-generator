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
      <div className='bg-[rgb(105,212,176)] h-screen text-[#0a0445] text-center p-2 md:w-6/12  mx-auto flex flex-col justify-center '>

        <div className='bg-white border-[2px] border-r-4 border-b-4 border-[#0a0445] rounded-sm'>
          <div className='text-start px-2 py-3 font-semibold bg-[#fdf099]'>
        {advice.author}
          </div>
          <div className='px-2 py-6 text-start'>
          {advice.text}
          </div>
        </div>
      
       
        <button onClick={() => setRandom(Math.floor(Math.random() * 15))} className='bg-black mt-3 text-white px- py-1 rounded-sm'>Get Random Advice</button>
      </div>
    </>
  );
}

export default App;
