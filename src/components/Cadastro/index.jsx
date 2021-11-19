import * as yup from 'yup';
import {AiOutlineApple} from 'react-icons/ai'
import './style.css'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom'
function Cadastro () {

        const history = useHistory()

        const formSchema = yup.object().shape({
            name: yup.string().required("Nome obrigatório*"),
            email: yup.string().email("Email inválido*").required("Email obrigatório*"),
            password: yup.string().required("Senha obrigatória*").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "A senha deve conter ao menos 8 caracteres: Uma letra maiúscula, uma letra minúscula, um número, e um caractere especial*") ,
            confirmPassword: yup.string().required("Confirme sua senha*").oneOf([yup.ref("password"), null], "As senhas não correspondem*")
        });

        const {register, handleSubmit, formState: {errors}} = useForm({
            resolver: yupResolver(formSchema)
        });

        function onSubmitFunc(data){
            history.push(`/bem-vindo/${data.name}`)
        }

    return (
        <div className='Container'>
            <AiOutlineApple className="icon"/>
            <form className='Form' onSubmit={handleSubmit(onSubmitFunc)}>
            <input className="input" placeholder="Nome" {...register('name')}></input>
            <p className="errors-message">{errors.name?.message}</p>
            <input className="input" placeholder="Email" {...register('email')}></input>
            <p className="errors-message">{errors.email?.message}</p>
            <input className="input" type="password" placeholder="Senha" {...register('password')}></input>
            <p className="errors-message">{errors.password?.message}</p>
            <input className="input" type="password" placeholder="Confirme sua senha" {...register('confirmPassword')}></input>
            <p className="errors-message">{errors.confirmPassword?.message}</p>
            <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    )

}

export {Cadastro}