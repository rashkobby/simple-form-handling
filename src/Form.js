import { useState } from "react";

const Form = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending,setIsPending] = useState(false)

    const handleSubmit = (e)=> {
        // e.preventDefault()
        const person = {firstName, lastName, email, password}
        setIsPending(true)
        fetch('http://localhost:9000/person', {
            method: 'POST',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(person)
        }).then(()=>{
            setIsPending(false)
        })
    }

    return ( 
        <div className="simple-form">
            <form onSubmit={handleSubmit}>
                <label>Firstname</label>
                <input type="text" placeholder="Enter Firstname" value={firstName} onChange={(e)=> setFirstName(e.target.value)} required />

                <label>Lastname</label>
                <input type="text" placeholder="Enter Lastname" value={lastName} onChange={(e)=> setLastName(e.target.value)} required />

                <label>Email</label>
                <input type="Email" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)} required />

                <label>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required />

                {!isPending && <button>Submit</button>}
                {isPending && <button disabled>Submitting....</button>}
            </form>
        </div>
     );
}
 
export default Form;