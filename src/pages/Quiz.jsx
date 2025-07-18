import React, { useState } from 'react'
import { useAsyncError, useNavigate } from 'react-router-dom'
import que from "./Question.json"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify"
export default function Quiz() {
  const navigate = useNavigate()
  const [options, setoptions] = useState(false)
  const [idx, setidx] = useState(0)
  const [playgame, setplaygame] = useState(false)
  const [checked, setchecked] = useState(false)
  const [afterwin, setafterwin] = useState(false)
  const [score,setscore] = useState(0)
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/")
  }

  const setgameplay = () => {
    setplaygame(true)
  }

  const optionButtonOnclick = (i) => {
    // e.target.classList.add("cursor-not-allowed")
    if(que[idx].answers[i].correct){
      toast.success("correct answer")
      setscore(score+1)
    }else{
      toast.warn("wrong answer")
    }
    setchecked(true)
  }

  const next = () => {
    if (idx + 1 == que.length) {
      // setidx(0)
      setafterwin(true)
      toast.success("Thanku for completing this text!")
      return

    }
    setchecked(false)
    setidx(idx + 1)
  }

  return (
    <>
      <div className='fixed h-screen w-screen flex justify-center items-center bg-gradient-to-br from-slate-400 to-blue-500'>
        <ToastContainer
          position="top-center"
          autoClose={2000}         // 2 seconds
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark" />
        <button onClick={() => logout()} className='p-2 border rounded-lg px-3 text-[20px] cursor-pointer absolute top-4 active:scale-95 '>Logout</button>
        {afterwin ? (<>

          <div>
            <h1 className=' text-[60px] text-white font-mono '>{`Congratulation  your score  ${score}`}</h1>

            <button onClick={() => navigate("/")} className='block mx-auto bg-blue-400 py-3 px-3 rounded-lg cursor-pointer'>Go to home</button>
          </div>

        </>) :
          (<>

            {!playgame ? (<><div className='flex justify-center items-center flex-col '>
              <span className='text-[70px]'>Hey! Lets play the game!</span>
              <br />
              <button onClick={() => setgameplay()} className='text-[30px]  bg-blue-600 text-white py-4 px-[10px] rounded-xl cursor-pointer active:scale-95'>Lets start😃</button>
            </div></>) : (<>
              <h1 className='absolute top-[150px] text-[20px] text-center'>Live score <br /><span className='text-[40px]'>{score}</span></h1>
              <div className='text-center' >
                <h1 className='absolute top-[10%] text-red-600 text-[20px]  w-full text-left'> Don't refresh the page, otherwise you will be thrown back and start from the beginning.</h1>
                <h1 className='text-[30px] font-semibold font-serif text-blue-200'>{que[idx].question}</h1>
                <div className="choices mt-7  justify-center items-center  grid grid-cols-2 ">
                  {que ? que[idx].answers.map((e, i) => {
                    return (
                      <>
                        <button onClick={() => optionButtonOnclick(i)} disabled={checked} className={`py-4 px-6 m-5 text-[15px] cursor-pointer font-serif rounded-2xl ${checked ? "cursor-not-allowed" : ""} ${(checked && que[idx].answers[i].correct) ? "bg-green-500" : "bg-white"} `}>{e.option1}</button>
                      </>
                    )
                  }) : ""}
                  {/* <button className='py-4 px-6 m-5 text-[30px] cursor-pointer bg-white rounded-2xl '>2) secomd</button>

              <button className='py-4 px-6 m-5 text-[30px] cursor-pointer bg-white rounded-2xl '>3) third</button>
              <button className='py-4 px-6 m-5 text-[30px] cursor-pointer bg-white rounded-2xl '> 4) fourth</button> */}
                </div>
                <button onClick={() => next()} className={`text-white bg-green-400 text-[20px] cursor-pointer py-[20px] px-[30px] rounded-xl block mx-auto mt-[40px] ${checked ? "visible" : "hidden"}`}>next</button>
              </div>
            </>)}

          </>)

        }



      </div>
    </>
  )
}
