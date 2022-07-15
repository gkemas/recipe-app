import React from 'react'
import { FormContainer, LoginContainer,Header, StyledInput, StyledForm, StyledButton } from './Login.style'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate =useNavigate()
  const userInfo = {
    username: 'ahmet',
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(userInfo))
    navigate()
  }
  return (
    <LoginContainer>
    <FormContainer>
    <Header>
    {'<Gkhn/>'}Recipe
    </Header>
    <StyledForm onSubmit={handleSubmit}>

  <StyledInput type="text" placeholder='username'/>
  <StyledInput type="password" placeholder='password'/>
  <StyledButton type="submit">Login</StyledButton>
   
    </StyledForm>

   </FormContainer>


    </LoginContainer>
  )
}

export default Login