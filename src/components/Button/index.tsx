import * as Styles from './styles';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function Button(props: ButtonProps) { 
  return (
    <Styles.Button onClick={props.onClick} >
      {props.text}
    </Styles.Button>
  )
}