import { SvgProps } from '../interfaces';

const Close = ({ className, height = 24, onClick }: SvgProps) => {
  return (
    <svg onClick={onClick} className={className} style={{ height }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18 18 6M6 6l12 12" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Close;
