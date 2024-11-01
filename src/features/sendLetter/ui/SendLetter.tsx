import { Button } from '@/shared/ui/Button/Button';
import styles from './SendLetter.module.scss';
import { Field } from '@/shared/ui/Field/ui/Field';
import { useState } from 'react';
import { Letter } from '../model/types/letterTypes';
import { onValidateLetter } from '../model/util/onValidateLetter';

export const SendLetter = () => {
  const [state, setState] = useState<Letter>({
    name: '',
    email: '',
    present: '',
    error: {}
  })

  const onChangeName = (value: string) => {
    const error = onValidateLetter('name', value);
    setState((prev) => ({
      ...prev,
      name: value,
      error: {
        ...prev.error,
        name: error,
      }
    }))
  }
  const onChangeEmail = (value: string) => {
    setState((prev) => ({
      ...prev,
      email: value,
    }))
  }
  const onChangePresent = (value: string) => {
    setState((prev) => ({
      ...prev,
      present: value,
    }))
  }

  return (
    <form className={styles.container}>
      <Field
        title='Имя:'
        value={state.name}
        onChange={onChangeName}
        error={state?.error?.name}
      />
      <Field
        title='Почта:'
        value={state.email}
        onChange={onChangeEmail}
      />
      <Field
        title='Подарок:'
        value={state.present}
        onChange={onChangePresent}
        error={state?.error?.present}
      />
      <Button addClass={styles.button} text='Отправить' />
    </form>
  )
}