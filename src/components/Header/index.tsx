import * as Styles from './styles';

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <>
      <Styles.Header>
        <Styles.Logo src={logoImg}/>
        <p style={{color: "#f5aa41"}}>maxi</p>
        <p style={{color: "#5a9598"}}>DEV</p>
      </Styles.Header>
    </>
  )
}