import * as Styles from './styles';

interface ButtonProps {
  text: string;
}

export function Button (props: ButtonProps) {
  return (
    <Styles.Button>{props.text}</Styles.Button>
  )
}