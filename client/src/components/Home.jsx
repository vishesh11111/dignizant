import React, { useState } from 'react'
import { MainPage } from '../pages/MainPage'
import { Button, TextField } from '@mui/material'
import { ListFiles } from '../pages/ListFiles'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
  const [inputData, setInputData] = useState("")
  const [clickCheck, setClickCheck] = useState(false);


  const handleChangeValue = () => {
    if (inputData.includes("@") && inputData.length > 1) {
      setClickCheck(true)
      localStorage.setItem("user", JSON.stringify({ email: inputData }))
    } else {
      toast.warn("Please enter valid Email format")
    }
  }

  return (
    <div>
      {!clickCheck && <div style={{ marginTop: "10px" }}>
        <TextField
          variant='outlined'
          placeholder='Enter Email'
          type='email'
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button onClick={handleChangeValue}>Submit</Button>
      </div>}
      {clickCheck && <ListFiles />}
      <ToastContainer />
    </div>
  )
}
