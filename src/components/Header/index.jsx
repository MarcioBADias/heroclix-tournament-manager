import { Container } from './style'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleRedirect = (path) => navigate(path)

  return (
    <Container>
      <ul>
        <li
          onClick={() => handleRedirect('/login')}
          style={{ cursor: 'pointer' }}
        >
          Login
        </li>
        <li
          onClick={() => handleRedirect('/register')}
          style={{ cursor: 'pointer' }}
        >
          Cadastre-se
        </li>
      </ul>
    </Container>
  )
}

export { Header }
