import { useState } from 'react'
import './App.css'
import Facebook from './assets/Facebook-icon.png'
import Google from './assets/Google-logo.png'
import Apple from './assets/Apple-logo.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cadastro from './Cadastro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="login-container">
      <h1>LOGIN</h1>

        <label for="usuario">USUÁRIO</label>
        <input type="text" placeholder="Digite seu usuário" />

        <label for="senha">SENHA</label>
        <input type="password" placeholder="Digite sua senha" />

        <div className="opcoes">
          
            <input type="checkbox" /> Manter conectado
          <a href="#">esqueceu a senha?</a>
        </div>

        <button type="submit">ENTRAR</button>

        <p>LOGAR COM</p>
        <div className="social">
           
          <img src={Facebook} alt="" className="facebook" />
          
          <img src={Google} alt="" className="google" />
        
          <img src={Apple} alt="" className="apple" />
        </div>

        <p className="cadastro"> NÃO TEM CONTA?
           <Link to="/cadastro">Inscrever-se</Link> </p>
      
    </div>
    </>
  )
}

export default App
