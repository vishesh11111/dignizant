import { Link, TextField } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const DropDown = ({ data, setData }) => {

    const handleChange = (event, index) => {
        let cloneData = [...data];
        cloneData[index].type = event.target.value
        setData(cloneData)
    };

    const handleAddMoreData = (index) => {
        let cloneData = [...data];
        if (!Array.isArray(cloneData[index].bulkData)) {
            cloneData[index].bulkData = [];
        }
        cloneData[index].bulkData.push({
            value: "",
            checked: false
        });
        setData(cloneData);
    }

    const handleDeleterow = (mainIndex, rowIndex) => {
        let cloneData = [...data];
        cloneData[mainIndex].bulkData.splice(rowIndex, 1);
        setData(cloneData);
    }

    const handleDeletdata = (index) =>{
        let cloneData = [...data];
        cloneData.splice(index, 1);
        setData(cloneData);
    }

    return (
        <div className='main-02 main-09 main-07'>
            <div className='main-007'>
                {
                    data?.map((item, indexNum) => (
                        <div key={indexNum} className='main-08'>
                            <div>
                                <TextField
                                    className='title-main'
                                    value={item?.value}
                                    variant='standard'
                                    label="Enter Text Here"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        console.log(newValue);
                                        let cloneData = [...data];
                                        cloneData[indexNum].value = newValue;
                                        setData(cloneData); // Update the state here
                                    }}
                                    fullWidth />
                                <br />
                                <div style={{ marginTop: "10px" }}>
                                    {
                                        item.type == "dropdown" &&
                                        item?.bulkData?.map((bulk, bulkindex) => (
                                            <div>({bulkindex + 1})option
                                                <TextField
                                                    variant='standard'
                                                    value={bulk?.value}
                                                    placeholder='Add Text Here...'
                                                    onChange={(e) => {
                                                        const newValue = e.target.value;
                                                        console.log(newValue);
                                                        let cloneData = [...data];
                                                        cloneData[indexNum].bulkData[bulkindex].value = newValue;
                                                        setData(cloneData);
                                                    }}
                                                />
                                                <DeleteIcon onClick={() => handleDeleterow(indexNum, bulkindex)} />
                                            </div>
                                        ))
                                    }
                                    {
                                        item.type == "radio_button" &&
                                        item?.bulkData?.map((bulk, bulkindex) => (
                                            <div><Radio
                                                value="a"
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'A' }}
                                            />

                                                <TextField
                                                    variant='standard'
                                                    value={bulk?.value}
                                                    onChange={(e) => {
                                                        const newValue = e.target.value;
                                                        console.log(newValue);
                                                        let cloneData = [...data];
                                                        cloneData[indexNum].bulkData[bulkindex].value = newValue;
                                                        setData(cloneData);
                                                    }}
                                                />
                                                <DeleteIcon onClick={() => handleDeleterow(indexNum, bulkindex)} />

                                            </div>
                                        ))
                                    }
                                    {
                                        item.type == "checkbox" &&
                                        item?.bulkData?.map((bulk, bulkindex) => (
                                            <div>
                                                <Checkbox />
                                                <TextField
                                                    variant='standard'
                                                    value={bulk?.value}
                                                    onChange={(e) => {
                                                        const newValue = e.target.value;
                                                        console.log(newValue);
                                                        let cloneData = [...data];
                                                        cloneData[indexNum].bulkData[bulkindex].value = newValue;
                                                        setData(cloneData);
                                                    }}
                                                />
                                                <DeleteIcon onClick={() => handleDeleterow(indexNum, bulkindex)} />

                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {item?.type !== "textbox" && <Link onClick={() => handleAddMoreData(indexNum)} style={{ cursor: "pointer" }}>Add More
                                        <TextField
                                            disabled
                                            variant='standard'
                                        />
                                    </Link>}
                                </div>
                            <DeleteIcon onClick={() => handleDeletdata(indexNum)} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='main-010'>
                {
                    data?.map((item, dropIndex) => (
                        <div className='main-08'>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small-label">Choose formate</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={item.type}
                                        label="Age"
                                        onChange={(e) => handleChange(e, dropIndex)}
                                    >
                                        {
                                            item?.dropData.map((iten) => (
                                                <MenuItem value={iten.value}>{iten?.name}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
