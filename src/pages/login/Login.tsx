import './Login.css'
import * as reset from './Resets'

import brand from "../../assets/brand.png"

export const Login = () => {

  return (
    <div className="App">
      <nav className='navigation'>
        <img src={brand} alt="" />
          <a href="/cadastro" className='button-n-conta'>Não possui uma conta?</a>
        </nav>
    

    <div className='container'>
      <div className='autenticandbox'>
        <div className='box'>

        </div>
      <p className='autentic'>Autenticação</p>
      </div>

        <div className='users'>
        <p>Email</p>
        <input type="email" className='email'/>
        <p>Senha</p>
        <input type="password" className='password'/>
        
        </div>
        <input type="button" value="Entrar" className='botao-entrar' />
    </div>
    </div>
  )
}

export default Login
