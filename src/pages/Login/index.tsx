import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import * as Styles from './styles';

export default function Login() {
  return (
    <>
      <Header />
      <Styles.Container>
        <Styles.LoginContainer>
          <Input placeholder="user" />
          <Input placeholder="scode" />
          <Button text="Login" />
        </Styles.LoginContainer>
      </Styles.Container>

    </>
  )
}