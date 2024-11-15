import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0090ff;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
export const Title = styled.h1`
  margin-bottom: 1rem;
  color: white;
  font-weight: bold;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 1rem;
  width: 80%;

  @media (min-width: 700px) {
    width: 30%;
  }
`
export const ImgDial = styled.img`
  top: 15%;
  width: 40%;
`
export const ImgLogo = styled.img`
  animation: fly 5s ease-in-out infinite alternate;
  position: absolute;
  top: 35%;
  width: 20%;

  @keyframes fly {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    25% {
      transform: translate(-25px, -5px) rotate(-2deg);
    }
    50% {
      transform: translate(25px, 25px) rotate(2deg);
    }
    75% {
      transform: translate(-5px, 25px) rotate(-1deg);
    }
    100% {
      transform: translate(5px, -25px) rotate(1deg);
    }
  }

  @media (min-width: 700px) {
    width: 10%;
    top: 25%;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`
export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #d4323f;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`
