import { SvgProps } from '../interfaces';

const Menu = ({ className, height = 24, onClick }: SvgProps) => {
  return (
    <svg onClick={onClick} className={className} style={{ height }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default Menu;
