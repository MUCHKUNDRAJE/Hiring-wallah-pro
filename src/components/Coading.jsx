import React from 'react'
import Editor from '@monaco-editor/react';
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Coading() {
const [Switch, setSwitch] = useState(0);
const navigate = useNavigate()


useEffect(() => {
  const preventTabSwitch = () => {
    if (document.hidden) {
      alert("You cannot switch tabs!");
      document.title = "Please return to the tab!";
      window.focus();
      setSwitch((prev) => prev + 1);
    } else {
      document.title = "Coding Challenge";
    }
  };

  if (Switch >= 3) {
    setTimeout(() => {
      alert("You have changed tabs too many times! You are getting disqualified.");
      navigate("/");
    }, 100); 
  } else if (Switch > 0) {
    alert(`You have switched tabs ${Switch} times!`);
  }

  document.addEventListener("visibilitychange", preventTabSwitch);

  return () => {
    document.removeEventListener("visibilitychange", preventTabSwitch);
  };
}, [Switch]);


  return (
    <div className='h-screen w-full bg-[#202124] gap-1  flex overflow-hidden'> 
    <div className=' w-[50%] bg-[#202124] '>
    <div className=' w-full  bg-zinc-900 p-5  flex gap-2'>
    <div className = 'h-10 w-10 rounded-full bg-white overflow-hidden '>
              <img src="https://res.cloudinary.com/dzryfm8cb/image/upload/v1743270407/Crop_mx4da2.png" alt="" />
           </div>
        <h1 className='text-white text-2xl font-bold mt-1 '>
           Compatative Test 
          </h1> 
    </div>
     <div className='h-full w-[100%] p-2 text-white bg-[#202124] text-white'>

     <div class="max-w-2xl  shadow-lg rounded-lg p-6">
    <h1 class="text-2xl font-bold text-center text-white">344. Reverse String</h1>
    <p class="mt-4"><strong class="text-white">Difficulty:</strong> <span class="text-green-500">Easy</span></p>
    <p class="mt-2 text-white">Write a function that reverses a string. The input string is given as an array of characters <code class="bg-zinc-900 px-2 rounded">s</code>.</p>
    <p class="mt-2 text-white">You must do this by modifying the input array <strong>in-place</strong> with <code class="bg-zinc-900 px-2 rounded">O(1)</code> extra memory.</p>

    <h2 class="mt-6 text-lg font-semibold text-white">Example 1:</h2>
    <pre class="bg-zinc-900  p-3 rounded-md overflow-x-auto">
    <strong>Input:</strong> s = ["h","e","l","l","o"]
    <br />
    <br />
     <strong>Output:</strong>s = ["o","l","l","e","h"]
    </pre>

    <h2 class="mt-4 text-lg font-semibold text-white">Example 2:</h2>
    <pre class="bg-zinc-900  p-3 rounded-md overflow-x-auto">
<strong>Input:</strong> s = ["H","a","n","n","a","h"]
<br />
<br />
<strong>Output:</strong> ["h","a","n","n","a","H"]
    </pre>

    <h2 class="mt-4 text-lg font-semibold text-white">Constraints:</h2>
    <ul class="list-disc list-inside text-white">
        <li><code>1 ≤ s.length ≤ 10<sup>5</sup></code></li>
        <li><code>s[i]</code> is a printable ASCII character.</li>
    </ul>
</div>

     </div>
    </div>
    
    <div className='h-full w-[60%] bg-[#202124] border-l-2 border-slate-600 '>
      <div className='h-10 w-full bg-zinc-800  flex text-white gap-2 items-center px-10 justify-between'>
        <div className='flex items-center gap-2'>
         <h1 className='p-2 hover:bg-zinc-700 cursor-pointer  '>Editor</h1>
         <h2 className='p-2 hover:bg-zinc-700 cursor-pointer '>Discription</h2>
        </div>
        <Link to="/">
        <div className='p-2 hover:bg-zinc-700 cursor-pointer text-red-500 font-bold'>Back</div>
        </Link>
      </div>
       <button className='bg-white px-2 rounded ml-3 mt-2 mb-2'>Java</button>
     <Editor 
          height="50%"
          defaultLanguage="java"
          defaultValue={` public class ReverseString {
                public static void main(String[] args) {
                 
        
                }
          }`}
      className=''
       theme="vs-dark"
        />
    <div className=' w-[100%] p-4 text-white flex items-start justify-start flex-col border-t-2 border-slate-600'>
      
      <h1 className='text-2xl text-start'>
          Test Case 
      </h1>
      <div className='w-full h-40  flex items-center justify-center'>
      You must run your code first
      </div>

    </div>
    </div>





    </div>
  )
}

export default Coading