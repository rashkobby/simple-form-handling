

import { useState } from "react";

const Login = ({setToken}) => {
    const [userName,setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [isPending,setIsPending] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault()
        const token = {userName, password}
        setIsPending(true)
        setToken(token)
        
        setIsPending(false)
    }

    return ( 
        <div className="simple-form">
            <form onSubmit={handleSubmit}>
                <label>Firstname</label>
                <input type="text" placeholder="Enter Firstname" value={userName} onChange={(e)=> setUserName(e.target.value)} required />

                <label>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required />

                {!isPending && <button>Submit</button>}
                {isPending && <button disabled>Submitting....</button>}
            </form>
        </div>
     );
}
 
export default Login;