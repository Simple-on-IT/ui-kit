import classNames from 'classnames';
import styles from './Text.module.scss';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

export const Text = ({
  text,
  className,
  ...props
}: TextProps) => {
  return (
    <p className={classNames(styles.text, className)} {...props}>{text}</p>
  )
}