import styles from './MainPage.module.scss';
import MainImage from '../../../shared/images/image.png';
import { Image } from '../../../shared/ui/Image/Image';
import { Title } from '../../../shared/ui/Title/Title';
import { Text } from '@/shared/ui/Text/Text';
import { SendLetter } from '@/features/sendLetter';

export const MainPage = () => {

  return (
    <div className={styles.pageContainer}>
      <Image className={styles.image} width={'325px'} src={MainImage} alt='Изображение сраницы' />
      <section className={styles.formSection}>
        <Title className={styles.text} text={'Подарок на новый год'} />
        <Text text='Порадуй себя и родных' />
        <SendLetter />
      </section>

    </div>
  )
}