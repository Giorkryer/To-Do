import * as C from './styles'
import brand from '../../assets/brand.png'



export const Theme = () => {

    return (
        <nav className='Navigation'>
        <img src={brand} alt="" />
          <a href="/cadastro" className='ButtonNaoConta'>Não possui uma conta?</a>
        </nav>
        
    )
}