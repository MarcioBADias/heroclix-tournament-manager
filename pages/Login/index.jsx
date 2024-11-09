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

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPasswortd] = useState('')

  return (
    <Container>
      <Title>Heroclix Tournament Manager</Title>
      <LoginForm>
        <ImgDial src="./WkDial_Blue.png" alt="Dial symbol" />
        <ImgLogo src="./GuizLogo.png" alt="Miniatura de Super" />
        <h2>Login</h2>
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
