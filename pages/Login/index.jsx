import React, { useState } from 'react'
import { Container, LoginForm, Input, Button } from './style'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPasswortd] = useState('')

  return (
    <Container>
      <LoginForm>
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
        <Button type="submit">Entrar</Button>
      </LoginForm>
    </Container>
  )
}
