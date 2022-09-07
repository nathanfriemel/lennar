import { SvgProps } from '../interfaces';

const ChevronRight = ({ className, height = 20, onClick }: SvgProps) => {
  return (
    <svg onClick={onClick} className={className} style={{ height }} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z" fill="#6B7280"/>
    </svg>
  );
}

export default ChevronRight;
