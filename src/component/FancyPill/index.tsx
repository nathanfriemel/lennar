import { ChevronRight } from '../../svg';
import './FancyPill.css';

type FancyPillProps = {
  cta: string
  href: string
  text: string
}

const FancyPill = ({cta, href, text}: FancyPillProps) => {
  return (
    <div className="FancyPill">
      <span>{text}</span> {cta} <ChevronRight />
    </div>
  )
}

export default FancyPill;