import { FC } from "react";

interface ArrowsType {
  arrowsClass?: string;
}

const PrevArrow: FC<ArrowsType> = ({ arrowsClass }) => {

  return (
    <button className={arrowsClass}>
      &lt;
    </button>
  )
}

export default PrevArrow;
