import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Slider from './Slider';

import slides from './mock/slide.json'

import "./slider.css"

const sliderSettings = {
  sliderClass: "slider",
  title: "Catálogo de Exemplo",
  showArrows: true,
  showDots: true,
  slidesToShow: 3
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="main">
      <Slider {...sliderSettings}>
        {slides.map((item, index) => (
          <div key={index}>
            <div><img src={item.image} alt={item.title} /></div>

            <span>{item.title}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </Slider>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
