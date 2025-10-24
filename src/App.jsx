import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="login-container">
      <h1>LOGIN</h1>

      <form>
        <label htmlFor="usuario">USUÁRIO:</label>
        <input type="text" id="usuario" placeholder="Digite seu usuário" required />

        <label htmlFor="senha">SENHA:</label>
        <input type="password" id="senha" placeholder="Digite sua senha" required />

        <div className="opcoes">
          <label>
            <input type="checkbox" /> Manter conectado
          </label>
          <a href="#">esqueceu a senha?</a>
        </div>

        <button type="submit">ENTRAR</button>

        <p>LOGAR COM</p>
        <div className="social">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="Google"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
            alt="Apple"
          />
        </div>

        <p className="cadastro">
          NÃO TEM CONTA? <a href="#">Inscrever-se</a>
        </p>
      </form>
    </div>
    </>
  )
}

export default App
