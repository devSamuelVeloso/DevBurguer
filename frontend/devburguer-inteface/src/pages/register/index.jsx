import { Container, LeftContainer, RightContainer, InputContainer, Title, Form, Error, Link } from './styles.js'
import Logo from '../../assets/logo-dev-buguer.jpg'
import { Button } from '../../components/Button/index.jsx';
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'

function Register() {

  const schema = Yup.object({
    name: Yup.string().min(3, 'O seu nome tem que ter no minimo 3 caracteres').required('O nome é obrigatório'),
    email: Yup.string()
      .email()
      .required('Digite o seu email.'),
    password: Yup
      .string()
      .min(8, 'A senha deve ter no minimo 8 caracteres.')
      .required('Digite a sua senha'),
    confirmPassword: Yup
      .string()
      .oneOf([Yup.ref('password')], 'As senhas não se coincidem.')
      .required('Confirme a sua senha'),
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


    const { status } = await api.post('/register', {
      name: data.name,
      email: data.email,
      password: data.password,
    },
      {
        validateStatus: () => true
      }
    );

    try {
      if (status === 200 || status === 201) {
        toast.success('Conta criada com sucesso!')
      }
      else if (status === 409) {
        toast.error('O email ja cadastrado!')
      } else {
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente.')
    }
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo dev burguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          <span>
            Criar Conta
          </span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type='text' placeholder='Digite seu nome' {...register('name')} />
            <Error>{errors?.name?.message}</Error>
          </InputContainer>
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
            <label>Confirmar senha</label>
            <input type='password' placeholder='Confirme sua Senha' {...register('confirmPassword')} />
            <Error>{errors?.confirmPassword?.message}</Error>
          </InputContainer>
          <InputContainer>
            <Button type='submit'>Entrar</Button>
            <p>Já possui conta? <Link to={'/login'}>Clique aqui.</Link></p>
          </InputContainer>
        </Form>
      </RightContainer>
    </Container >
  );
}

export default Register;