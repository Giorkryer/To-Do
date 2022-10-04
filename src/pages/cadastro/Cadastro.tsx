import './Cadastro.css'
import './Resetapp.css'

import brand from '../../assets/brand.png' 

export const Cadastro = () => {
  return (
    <div className="App">
      <nav className='navigation'>
        <img src={brand} alt="" />
       
          <a href="/" className='button-n-conta'>Já possui uma conta?</a>
        </nav>
    </div>
  )
}