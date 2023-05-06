import * as Styles from './styles';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: () => void;
}

export function Input(props: InputProps) {
  return (
    <Styles.Input onChange={props.onChange}
                  value={props.value}
                  placeholder={props.placeholder}
    />
  )
}