import './style.css'
import {useParams, useHistory} from 'react-router-dom'
function BemVindo () {

    const history = useHistory()

    const {name} = useParams();

    function handleClick(){
        history.push("/")
    }
    return(
        <>
        <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        </div>
        <h3 className='title'>Olá, {name}, seja bem-vindo(a)!</h3>
        <button className="button-1" onClick={handleClick}>Voltar</button>
        </>
    )
}

export {BemVindo}