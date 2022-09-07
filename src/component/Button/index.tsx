import './Button.css'

type ButtonProps = {
  className: string
  href: string
  text: string
}

const Button = ({ className, text, href }: ButtonProps) => {
  return (
    <a className={`Button ${className}`} href={href}>{text}</a>
  )
};

export default Button;
