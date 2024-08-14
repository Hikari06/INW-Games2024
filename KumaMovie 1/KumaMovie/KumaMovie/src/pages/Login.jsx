import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }
 
  
    return (
    <main className='bg-primary-claro h-11'>
        <label className='mt-5'>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className='mt-5'>Enter your email:
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className='mt-5'>Enter your password:
        <input 
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" />
    </main>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);

export default Login ;