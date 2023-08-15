import React, { useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from "react-router-dom"

const Create = () => {
    const [qwirkName,setQwirkName] = useState("")
    const [oddity1, setOddity1] = useState("")

    const navigate = useNavigate()

    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/qwirk", {qwirkName, oddity1})
        .then(response => {
            console.log(response.data)
            navigate("/")
        })
        .catch(err => {
            console.log(err.response.data.errors)
            const errArr = []
            const errObj = err.response.data.errors 
            for(const errKey in errObj){
                errArr.push(errObj[errKey]['message'])
            }
            setErrors(errArr)
        })
    }



    return (
    <div>Create
        <div>
        <h1> Qwirks</h1>
        <h3> oddities from along the way...</h3>
        <Link to={"/"}> back to the catalog</Link>
        <p> add the the archives? </p>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <p> Oddity</p>
                <input type="text" name='qwirkName' value={qwirkName} onChange={e => setQwirkName(e.target.value)} ></input>
                <p> Description</p>
                <input type="text" name="oddity1" value={oddity1} onChange={e => setOddity1(e.target.value)}></input>
                <button type='submit'> Add Qwirk</button>
            </form>
            {errors.map((err, i) =>{
            return(
                <p key={i}> {err}</p>
            )
            })}

        </div>
        
    </div>
    )
}

export default Create