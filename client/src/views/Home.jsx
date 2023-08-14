import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    const[ qwirks, setQwirks]= useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/qwirks")
        .then(response => {
            console.log(response.data)
            setQwirks(response.data)
        })
        .catch(err => console.log(err))

    }, [])





    return (
    <div> 
        <div>
        <h1> Qwirks</h1>
        <h3> oddities from along the way...</h3>
        </div>
        <div>
            <Link to={"/create"}> + Archive</Link>
        </div>
        <div> 
            <table>
                <thead>
                    <tr>
                        <th> Oddity</th>
                        <th> Description </th>
                    </tr>
                </thead>
                <tbody>
                    {qwirks.map((qwirk, i) => (
                        <tr key={i}>  
                            <td>{qwirk.qwirkName}</td>
                            <td> {qwirk.oddity1}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    
    )
}

export default Home