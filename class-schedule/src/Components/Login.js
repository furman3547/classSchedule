import { useRef, useState, useEffecct, useEffect} from 'react';
import {Link } from 'react-router-dom'



const Login =()=>{
    const userRef= useRef();
    const errRef=useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState ('');
    const [success, setSuccess] = useState(false);

useEffect(() => {
    userRef.current.focus();

}, [])

useEffect(()=> {
    setErrMsg('');
}, [user,pwd])



const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(user,pwd);
    setUser('');
    setPwd('');
    setSuccess(true);

}
    return(
      

        <section className="login-container">
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
       
            
            <form onSubmit={handleSubmit}> 
                <label htmlFor="username">Username:</label>
                <input
                type="text" 
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required 
                />

                <label htmlFor="password">Password:</label>
                <input
                type="password" 
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required 
                />
                <button>Sign In</button> <br></br>
                Need an Account?<br/>
                    <span className='line'>
                       
                        <Link to="/signup">SignUp</Link>
                    </span>
            </form>
            
        </section>
    )
}


export default Login