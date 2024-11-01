import { Button } from '@/shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';
import styles from './SendLetter.module.scss';
import { Title } from '@/shared/ui/Title/Title';

export const SendLetter = () => {
  return (
    <form className={styles.container}>
      <fieldset className={styles.inputContainer}>
        <legend><Title text='Имя:' /></legend>
        <Input type='text' />
      </fieldset>
      <fieldset className={styles.inputContainer}>
        <legend><Title text='Почта:' /></legend>
        <Input type='email' />
      </fieldset>
      <fieldset className={styles.inputContainer}>
        <legend><Title text='Подарок:' /></legend>
        <Input type='text' />
      </fieldset>

      <Button addClass={styles.button} text='Отправить' />
    </form>
  )
}