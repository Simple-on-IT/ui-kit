import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { Input } from "../../Input/Input"
import { Title } from "../../Title/Title"
import styles from './Field.module.scss';
import classNames from "classnames";

type FieldProps = {
  title: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  addClass?: string;
}

export const Field = ({
  title,
  type = 'text',
  error,
  value,
  onChange,
}: FieldProps) => {

  const onChangecb = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onChange(newValue);
  }

  return (
    <fieldset className={classNames(
      styles.inputContainer,
      { [styles.errorBorder]: !!error }
    )}
    >
      <legend><Title text={title} /></legend>
      <Input type={type} value={value} onChange={onChangecb} />
      {error && (
        <legend className={styles.errorLegend}>
          <p className={styles.errorText}>
            {error}
          </p>
        </legend>
      )}
    </fieldset>
  )
}