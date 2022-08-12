import { FC, Children, ReactNode, cloneElement } from 'react';
import { PrevArrow, NextArrow, Dots } from './components';

interface SliderType {
  sliderClass: string;
  slidesToShow?: number;
  dotsClass?: string;
  arrowsClass?: string;
  title?: string;
  showArrows?: boolean;
  showDots?: boolean;
  children?: ReactNode | ReactNode[];
}

const Slider: FC<SliderType> = ({
  sliderClass,
  dotsClass,
  arrowsClass,
  slidesToShow,
  title,
  showArrows,
  showDots,
  children
}) => {
  const sliderCount = Children.count(children)
  console.log(slidesToShow)

  return (
    <div className={sliderClass}>

      {title &&
        <div>
          <h3>{title}</h3>
        </div>}

      {showArrows && <PrevArrow arrowsClass={arrowsClass} />}

      {children}

      {showArrows && <NextArrow arrowsClass={arrowsClass} />}

      {showDots && <Dots dotsClass={dotsClass} slideLength={sliderCount} />}

    </div>
  );
}

export default Slider;
