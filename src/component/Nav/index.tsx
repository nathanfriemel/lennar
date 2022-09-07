import { useCallback, useState } from 'react';

import { useViewport } from '../../bin/hooks';
import Button from '../Button';
import MobileMenu from './MobileMenu';
import { Logo, Menu } from '../../svg';
import './Nav.css';

const tabpleBreakpoint = 820;
const links = [
  {
    name: "Product",
    href: '/product'
  }, {
    name: "Features",
    href: '/features'
  }, {
    name: "Marketplace",
    href: '/marketplace'
  }, {
    name: "Company",
    href: '/company'
  }
];

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { width } = useViewport(); // This is probably overkill to make the logo slightly bigger on > tablet
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [setMobileMenuOpen]);

  return (
    <nav className="Nav">
      <Logo height={width < tabpleBreakpoint ? 30 : 37} />
      <Menu onClick={() => setMobileMenuOpen(true)} className="Nav-menu" />
      <MobileMenu isOpen={mobileMenuOpen} handleClose={closeMobileMenu} links={links} />
      <div className="Nav-links">
        {links.map(link => <a key={link.name} href={link.href} className="Nav-link">{link.name}</a>)}
      </div>
      <div className="Nav-right">
        <a href="/login" className="Nav-link">Log in</a>
        <Button className="Nav-button" href="/start" text="Start free trial" />
      </div>
    </nav>
  );
};

export default Nav;
