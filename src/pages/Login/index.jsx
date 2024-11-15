import React, { useState } from 'react'
import { login } from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  LoginForm,
  Input,
  Button,
  ImgLogo,
  ImgDial,
  Title,
} from './style'
import { GoogleLogin } from '@react-oauth/google'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPasswortd] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleRegisterRedirect = () => navigate('/register')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      login(email, password)
      localStorage.setItem('token', token)
      navigate('/dashboard')
    } catch (error) {
      setError('Credenciais inválidas. Tente novamente.')
    }
  }

  const handleGoogleLoginSucces = (credentialResponse) => {
    const token = credentialResponse.credential
    localStorage.setItem('token', token)
    navigate('/dashboard')
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
        <p>
          <span onClick={handleRegisterRedirect} style={{ cursor: 'pointer' }}>
            Fazer meu cadastro
          </span>{' '}
          | Esqueceu a senha?
        </p>
        <Button type="submit">Entrar</Button>
        <GoogleLogin
          onSuccess={handleGoogleLoginSucces}
          onError={() => console.log('Login Google Falhou')}
        />
      </LoginForm>
    </Container>
  )
}

export { Login }
