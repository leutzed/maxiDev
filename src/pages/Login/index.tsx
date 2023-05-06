import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import api from "../../services/api";

import * as Styles from './styles';

export default function Login() {
  const [username, setUsername] = useState('');
  const [scode, setScode] = useState('');

  async function getUserData() {
    console.log('atumalaca')
    const response = await api.get(`/login.php?user=${username}&scode=${scode}`);

    console.log(response);
  }

  return (
    <>
      <Header />
      <Styles.Container>
        <Styles.LoginContainer>
          <Input placeholder="user" 
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
          />
          <Input placeholder="scode" value={scode}/>
          <Button text="Login" onClick={() => getUserData()} />
        </Styles.LoginContainer>
      </Styles.Container>

    </>
  )
}