import { useState } from "react"

const WorkoutForm = () =>{

const[title,setTitle] = useState('')
const[load,setLoad] = useState('')
const[qty,setQty] = useState('')
const[error,setError] = useState(null)

const handleSubmit = async(e)=>{
    e.preventDefault()

    const workout ={title,load,qty}

    const response =await fetch('/api/workouts',{
        method:'POST',
        body:JSON.stringify(workout),
        headers:{
            'content-type': 'application/json'
        }
    })

    const json = await response.json()

    if(!response.ok){
        setError(json.error)
    }

    if(response.ok){
        setTitle('')
        setLoad('')
        setQty('')
        setError(null)
        console.log('new workout addad',json)
    }
}


return (

<form className="create" onSubmit={handleSubmit}> 

<h3>Add new Workout </h3>
        <label> Title </label>
        <input type="text"
         onChange={(e)=> setTitle(e.target.value)}
         value={title}
            />

<label> Load </label>
        <input type="number"
         onChange={(e)=> setLoad(e.target.value)}
         value={load}
            />
            <label> Qty </label>
        <input type="number"
         onChange={(e)=> setQty(e.target.value)}
         value={qty}
            />

<button>Add Workout</button>
{error && <div className="error">{error}</div>}
    </form>
)
}



export default WorkoutForm