import { Button } from '@mui/base'
import React, { useEffect, useState } from 'react'
import { MainPage } from './MainPage'
import axios from 'axios'
import { AllUrl } from '../Api/Api'

export const ListFiles = () => {
    const [state, setState] = useState({
        YourData: [],
        AllData: [],
        show: false,
    })

    const handleShow = () =>{
        setState(pre=>({...pre, show: !state.show}))
    }

    const getData = async () =>{
        try {
            const result = await axios.post(AllUrl.getourPost, {email: JSON.parse(localStorage.getItem("user")).email});
            console.log(result?.data?.data);
            setState({...state, YourData: result?.data?.data})
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <div>
            {!state.show && <Button onClick={handleShow}>Create new Form</Button>}
            {!state.show ? <div>
                <h3>Your Form</h3>
                {
                    state?.YourData?.map((item, index)=>(
                        <div className='main-019'>
                            <h3 style={{margin: "0px"}}>{item?.title}</h3>
                            <p style={{margin: "1px"}}>{item.description}</p>
                        </div>
                    ))
                }
                <hr />
                <h3>Other Form</h3>
            </div> :
                <div>
                    <MainPage click={handleShow}/>
                    </div>}
        </div>
    )
}
