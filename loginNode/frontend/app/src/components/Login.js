import { useState } from "react";
import axios from 'axios';


function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    


    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Teste")
        //console.log("email: " + email + " e senha: " + password);

        //agora utilizando o axios para fazer a comunicação entre frontend e backend

        const response = await axios.post('http://localhost:3000/login', 
            JSON.stringify({email,password}), 
            {
                headers: {"Content-Type" : "application/json"}
            }
        );
        
       //estamos esperando um objeto do outro lado, por isso mandamos desse jeito 
    };

    return (
      <div className="App-div">
          <h2>Login </h2>
          <form className="loginForm">
            <input className="email" type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}></input>
            <br></br>
            <input className="password" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}></input>
            <div className="buttonDiv">
              <button type="submit" className="buttonClass" onClick={(e) => handleLogin(e)}>Login</button>
            </div>
          </form>
       </div>
    );
  
}

export default Login;
  