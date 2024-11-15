import React, { useState } from 'react'
import {
  Container,
  LoginForm,
  Input,
  Button,
  ImgLogo,
  ImgDial,
  Title,
} from './style'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPasswortd] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('httpl://localhost:500/api/login', {
        email,
        password,
      })
      localStorage.setItem('token', token)
      window.location.href = '/dashboard'
    } catch (error) {
      setError('Credenciais invalidas. Tente novamente')
    }
  }

  return (
    <Container>
      <Title>Heroclix Tournament Manager</Title>
      <LoginForm onSubmit={handleLogin}>
        <ImgDial src="./WkDial_Blue.png" alt="Dial symbol" />
        <ImgLogo src="./GuizLogo.png" alt="Miniatura de Super" />
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPasswortd(e.target.value)}
        />
        <p>Fazer meu cadastro | Esqueceu a senha?</p>
        <Button type="submit">Entrar</Button>
      </LoginForm>
    </Container>
  )
}

export { Login }
