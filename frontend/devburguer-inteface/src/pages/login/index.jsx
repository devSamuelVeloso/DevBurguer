import { Container, LeftContainer, RightContainer, InputContainer, Title, Form, Error } from './styles.js'
import Logo from '../../assets/logo-dev-buguer.jpg'
import { Button } from '../../components/Button/index.jsx';
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'

function Login() {

  const schema = Yup.object({
    email: Yup.string()
      .email()
      .required('Digite o seu email.'),
    password: Yup
      .string()
      .min(8, 'A senha deve ter no minimo 8 caracteres.')
      .required('Digite a sua senha')
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  })

  const onSubmit = async (data) => {
    const response = await toast.promise(api.post('/sessions', {
      email: data.email,
      password: data.password
    }),
      {
        pending: 'Verificando seus dados...',
        success: 'Seja bem-vindo 🎉',
        error: 'Email ou senha incorretos ❌'
      }
    )
    console.log(response)
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo dev burguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>DevBurguer!</span>
          <br />
          Acesse com seu <span>Login e Senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type='email' placeholder='Digite seu Email' {...register('email')} />
            <Error>{errors?.email?.message}</Error>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type='password' placeholder='Digite sua Senha' {...register('password')} />
            <Error>{errors?.password?.message}</Error>
          </InputContainer>
          <InputContainer>
            <Button type='submit'>Entrar</Button>
            <p>Não possui conta? <a href="">Clique aqui.</a></p>
          </InputContainer>
        </Form>
      </RightContainer>
    </Container>
  );
}

export default Login;