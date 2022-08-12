import { FC, ReactNode } from 'react';

interface DotsType {
  showDots?: boolean;
  dotsClass?: string;
  slideLength: number;
}

const Dots: FC<DotsType> = ({ showDots, dotsClass, slideLength }) => {

  let renderDots: ReactNode[] = []

  for (let i = 0; i < slideLength; i++) {
    renderDots = [
      ...renderDots,
      <div key={i}>
        <span className={dotsClass ? dotsClass : "dotsDefault"}></span>
      </div>
    ]
  }

  return <div className={showDots ? "dots" : ""}>{renderDots}</div>
}

export default Dots
