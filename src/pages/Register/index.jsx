import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../services/authService'
import { Container, RegisterForm, Input, Button, Title } from './style'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }
    try {
      await register(username, email, password)
      alert('Registro feito com sucesso!')
      navigate('/login')
    } catch (error) {
      alert(error.message || 'Erro ao registrar o usuario')
    }
  }

  return (
    <Container>
      <Title>Cadastro - Heroclix Tournament Manager</Title>
      <RegisterForm onSubmit={handleRegister}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Input
          type="text"
          placeholder="Nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Registrar</Button>
        <p
          onClick={handleLoginRedirect}
          style={{ cursor: 'pointer', marginTop: '1rem' }}
        >
          Voltar
        </p>
      </RegisterForm>
    </Container>
  )
}

export { Register }
