import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Innerheader from '../../components/Innerheader'
import api from '../../services/api'
import Cookies from 'universal-cookie';
import './styles.scss';
export default function Login({history}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit (e) {
    e.preventDefault();
    const response = await api.post('/sessions', {email, password}).then((response) => {
      console.log('usuario foi autenticado!');
      console.log(response.data.token);
      const cookies = new Cookies();
      var now = new Date();
      var time = now.getTime();
      var expireTime = time + 7*36000000;
      now.setTime(expireTime);
      cookies.set('jwt', response.data.token, { path: '/', expires: now, secure: true, sameSite: 'strict'});
      setEmail('');
      setPassword('');
      history.push('/BUZZ/profile');
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        setEmail('');
        setPassword('');
      }

    });
  }
  useEffect(() => {
    const cookies = new Cookies();
    cookies.get('jwt');
    if(cookies) {
      history.push('/BUZZ/profile');
    }
  }, []);
  return (
    <section id="login">
      <Innerheader />
      <div className="box-form">
        <div className="box-content">
          <div className="form-title">
            <h1>Olá! Digite o seu e-mail e senha</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-element">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-element">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
        <div className="box-signup">
          <span>
            Novo no Buzz? <Link to="/BUZZ/register"> <u>Cadastre-se</u></Link>
          </span>
        </div>
      </div>
      <div className="box-help"><div className="help-element">Esqueceu sua senha?</div> <div className="help-element">Ajuda</div></div>
    </section>
  );
}
