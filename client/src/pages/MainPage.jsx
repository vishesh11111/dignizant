import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './css/mainpage.css';
import { DropDown } from './DropDown';
import { Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from "axios"
import { AllUrl } from '../Api/Api';

export const MainPage = ({click}) => {
    const [state, setState] = useState({
        inpt: 'Untitled form',
        inpt2: "Form description"
    });
    // textbox, radio button, checkbox, and dropdown,
    const [dropData, setDropData] = useState([
        {
            id: 1,
            name: "Textbox",
            value: "textbox"
        },
        {
            id: 2,
            name: "Radio Button",
            value: "radio_button"
        },
        {
            id: 3,
            name: "Dropdown",
            value: "dropdown"
        },
        {
            id: 4,
            name: "Checkbox",
            value: "checkbox"
        },
    ])
    const [AddData, setAddData] = useState([]);

    const handleAddDAta = () => {
        let data = {
            type: "textbox",
            value: "",
            bulkData: [
                {
                    value: "",
                    checked: false
                }
            ],
            dropData: dropData
        }
        setAddData([...AddData, data]);
    }

    const handleSaveData = async() =>{
        let ApiData = {
            email: JSON.parse(localStorage.getItem("user")).email,
            data: AddData,
            title: state.inpt,
            description: state.inpt2
        }
        try {
            const result= await axios.post(AllUrl.createPost, ApiData)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        console.log("00000",ApiData);
    }

    console.log("--", AddData)
    return (
        <div>
            <Button onClick={click}>Cancel<CancelIcon/></Button>
            <div className='main-01'>
                <div className='main-02'>
                    <div className='main-inp1'>
                        <TextField
                            className='title-main'
                            value={state.inpt}
                            variant='standard'
                            fullWidth
                            onChange={(e) => setState(pre => ({ ...pre, inpt: e.target.value }))}
                            sx={{
                                '& input': {
                                    fontSize: '40px', // Change font size
                                    height: '50px', // Change input box height
                                },
                            }}
                        />
                        <TextField
                            className='title-main'
                            value={state.inpt2}
                            variant='standard'
                            fullWidth
                            onChange={(e) => setState(pre => ({ ...pre, inpt2: e.target.value }))}
                            sx={{
                                '& input': {
                                    marginTop: "20px",
                                    fontSize: '15px', // Change font size
                                    height: '20px', // Change input box height
                                },
                            }}
                        />
                    </div>
                </div>
                <div className='main-03'>
                    <ControlPointIcon onClick={handleAddDAta} sx={{
                        marginTop: "10px",
                    }} />
                </div>
            </div>
            <DropDown data={AddData} setData={setAddData} />
            <Button variant='contained' onClick={handleSaveData}>Submit</Button>
        </div>
    );
};
