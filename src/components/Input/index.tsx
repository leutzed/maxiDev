import * as Styles from './styles';

interface InputProps {
  placeholder: string;
}

export function Input (props: InputProps) {
  return (
    <Styles.Input placeholder={props.placeholder}/>
  )
}