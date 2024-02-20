'use client';

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [text,setText] = useState("");
  const handleSubmit = async()=>{
    const response = await axios.post("http://localhost:8001/code/compile",{code:text,language_id:"53",input:"2 \n 5"});
    console.log(response.data);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {// @ts-ignore
      <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setText(e.target.value)} placeholder="Type something..." value={text}></textarea>
     }
     <button onClick={handleSubmit}>submit</button>
      </main>
  );
}
