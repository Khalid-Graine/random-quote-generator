import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [random, setRandom] = useState(Math.floor(Math.random() * 15));
  const api = "https://type.fit/api/quotes";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        const data = response.data[random];
        setAdvice({
          text: data.text,
          author: data.author.split(",")[0],
        });
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    };

    fetchData();
  }, [random]);
  return (
    <>
      <div className="bg-[rgb(105,212,176)] text-lg h-screen text-[#0a0445] text-center p-2 md:w-6/12  mx-auto flex flex-col justify-center ">
        <div className="bg-white the-border ">
          <div className="text-start px-2 py-3 font-semibold bg-[#fdf099]">
            {advice.author}
          </div>
          <div className="px-2 py-6 text-start">{advice.text}</div>
        </div>

        <button
          onClick={() => setRandom(Math.floor(Math.random() * 15))}
          className=" mt-3 text-white font-bold text-xl px- py-2   the-border hover:bg-[#0a0445] active:bg-[#0a0460]"
        >
          Get Random Quote
        </button>
      </div>
    </>
  );
}

export default App;
