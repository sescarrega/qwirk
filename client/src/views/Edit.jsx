import React,  { useEffect, useState }  from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from "react-router-dom"

const Edit = () => {
    const {id} = useParams()

    const [qwirk, setQwirk] = useState([])

    const [qwirkName,setQwirkName] = useState("")
    const [oddity1, setOddity1] = useState("")

    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/qwirk/${id}`)
        .then(res => {
            const qwirk = res.data
            console.log(qwirk)
            setQwirkName(qwirk.qwirkName)
            setOddity1(qwirk.oddity1)

        })
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/qwirk/${id}`, 
        {qwirkName, oddity1})
        .then(response=> navigate("/"))
        .catch (err => console.log(err))
        
    }
    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/api/qwirk/${id}`)
            .then (res => {
                const filteredList = qwirk.filter((qwirk) => qwirk.id !== id)
                setQwirk(filteredList)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
    <div>
        <div>
        <h1> Qwirks</h1>
        <h3> oddities from along the way...</h3>
        <Link to={"/"}> back to the catalog</Link>
        </div>
        <form onSubmit={handleSubmit}>
                <p> Oddity</p>
                <input type="text" name='qwirkName' value={qwirkName} onChange={e => setQwirkName(e.target.value)} ></input>
                <p> Description</p>
                <input type="text" name="oddity1" value={oddity1} onChange={e => setOddity1(e.target.value)}></input>
                <button type='submit'> Update Qwirk</button>
        </form>
        <div> 
            <h2> Not so odd? </h2>
        </div>
        <button onClick={handleDelete}> Delete Qwirk</button>

    </div>


    )
}

export default Edit