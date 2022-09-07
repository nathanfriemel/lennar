import Button from '../Button';
import { Close, Logo } from '../../svg';
import './MobileMenu.css';

type MobileMenuProps = {
  handleClose: () => void
  isOpen: boolean
  links: {href: string, name: string}[]
}

const MobileMenu = ({ handleClose, isOpen, links }: MobileMenuProps) => {
  return (
    <>
      {isOpen && <div className="MobileMenu-overlay" onClick={handleClose}></div>}
      <div className={`MobileMenu ${isOpen ? "MobileMenu-open" : "MobileMenu-closed"}`}>
        <Logo />
        <Close onClick={handleClose} className="MobileMenu-close" />
        {links.map(link => <a key={link.name} href={link.href} className="MobileMenu-link">{link.name}</a>)}
        <Button className="MobileMenu-button" href="/start" text="Start free trial" />
        <a className="MobileMenu-login" href="/login">Existing customer? <span>Login</span></a>
      </div>
    </>
  )
};

export default MobileMenu;