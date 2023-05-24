import * as S from './styles'

const App = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;

    sessionStorage.setItem('logged', 'true');
    sessionStorage.setItem('user', username);

    window.location.href = '/';
  }
  
  return (
    <div className='mfe-login'>
      <S.Form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <input type="password" name="senha" />
        <button type="submit">Enviar</button>
      </S.Form>
    </div>
  )
}

export default App
