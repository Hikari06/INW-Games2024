import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Login() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }
 
  
    return (
    <main className='bg-primary-claro'>
        <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </main>
   );
}

export default Login ;