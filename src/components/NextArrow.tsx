import { FC } from "react";

interface ArrowsType {
  arrowsClass?: string;
}

const NextArrow: FC<ArrowsType> = ({ arrowsClass }) => {

  return (
    <button className={arrowsClass}>
      &gt;
    </button>
  )
}

export default NextArrow;
