import { FC, Children, ReactNode, cloneElement } from 'react';
import { PrevArrow, NextArrow, Dots } from './components';

interface SliderType {
  sliderClass: string;
  slidesToShow?: number;
  dotsClass?: string;
  dotsDirection?: string | "dotsDefaultDirection";
  arrowsClass?: string;
  title?: string;
  showArrows?: boolean;
  showDots?: boolean;
  children?: ReactNode | ReactNode[];
  arrowsDirection?: string;
}

const Slider: FC<SliderType> = ({
  sliderClass,
  dotsClass,
  dotsDirection,
  arrowsClass,
  slidesToShow,
  title,
  showArrows,
  arrowsDirection,
  showDots,
  children
}) => {
  const sliderCount = Children.count(children)
  console.log(slidesToShow)

  const renderDirectionArrow = (arrowsDirection: string) => {
    switch (arrowsDirection) {
      case "arrowDefaultDirection":
        return (
          <>
            {title &&
              <div>
                <h3>{title}</h3>
              </div>}

            <div>

              {showArrows && <PrevArrow arrowsClass={arrowsClass ? arrowsClass : "arrowsDefaultClass"} />}

              {children}

              {showArrows && <NextArrow arrowsClass={arrowsClass ? arrowsClass : "arrowsDefaultClass"} />}

            </div>
          </>
        );

      case "arrowsTop":
        return (
          <>
            <div>
              {title &&
                <div>
                  <h3>{title}</h3>
                </div>}

              {showArrows && <PrevArrow arrowsClass={arrowsClass ? arrowsClass : "arrowsDefaultClass"} />}

              {showArrows && <NextArrow arrowsClass={arrowsClass ? arrowsClass : "arrowsDefaultClass"} />}
            </div>

            {children}
          </>
        );
    }
  }

  return (
    <div className={sliderClass}>

      {renderDirectionArrow(arrowsDirection ? arrowsDirection : 'arrowDefaultDirection')}

      <div className={dotsDirection ? dotsDirection : "dotsDefaultDirection"}>
        {showDots && <Dots showDots={showDots} dotsClass={dotsClass} slideLength={sliderCount} />}
      </div>

    </div>
  );
}

export default Slider;
