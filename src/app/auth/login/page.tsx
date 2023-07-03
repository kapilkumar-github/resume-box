import React from 'react'
import Styles from './login.module.scss'
import { Input, Button } from '@mui/material';

const Login = () => {
  const [cred, setCred] = React.useState({ email: '', password: '' }) 
  
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCred(prev => ({
      ...cred,
      [name]:value
    }))
    
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    console.log(event.target)
  }

  return (
    <div className={Styles.LoginWrapper}>
      <form onSubmit={handleSubmit}>
        <Input value={cred.email} placeholder="Enter Email" type='email' onChange={ handleChange} />
        <Input value={cred.password} placeholder="Enter password" type='password' onChange={handleChange} />
        <Button value="Login"/>
      </form>
    </div>
  )
}

export default Login
