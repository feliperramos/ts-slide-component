import { FC, ReactNode } from 'react';

interface DotsType {
  dotsClass?: string;
  slideLength: number;
}

const Dots: FC<DotsType> = ({ dotsClass, slideLength }) => {

  let renderDots: ReactNode[] = []

  for (let i = 0; i < slideLength; i++) {
    renderDots = [
      ...renderDots,
      <div key={i}>
        <span className={dotsClass ? dotsClass : "dotsDefault"}></span>
      </div>
    ]
  }

  return <>{renderDots}</>
}

export default Dots
