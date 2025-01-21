import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

const Carousel = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const items = [
    {
      title: 'AI that builds a website for you',
      price: 'Travel',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo...',
      imgSrc: '/images/travelv.jpg',
      bgColor: '#f2dad3',
    },
    {
      title: 'AI that builds a website for you',
      price: 'Business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo...',
      imgSrc: '/images/businessv.jpg',
      bgColor: '#f5bfaf',
    },
    {
      title: 'AI that builds a website for you',
      price: 'E-Commerce',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo...',
      imgSrc: '/images/ecommv.png',
      bgColor: '#dedfe1',
    },
    {
      title: 'AI that builds a website for you',
      price: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo...',
      imgSrc: '/images/portfoliov.jpg',
      bgColor: '#7eb63d',
    },
  ];

  const countItem = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [active]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % countItem);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + countItem) % countItem);
  };

  const handleButtonClick = () => {
    navigate('/form');
  };

  return (
    <div className="carousel-container">
      <section className="carousel">
        <div className="list">
          {items.map((item, index) => (
            <article
              key={index}
              className={`item ${index === active ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - active) * 100}%)`,
                backgroundColor: item.bgColor,
              }}
            >
              <div className="main-content">
                <div className="content">
                  <h2>{item.title}</h2>
                  <p className="price">{item.price}</p>
                  <p className="description">{item.description}</p>
                  <button className="addToCard" onClick={handleButtonClick}>
                    Generate your website
                  </button>
                </div>
              </div>
              <figure className="image">
                <img src={item.imgSrc} alt={item.title} />
              </figure>
            </article>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={prevSlide}>
            &lt;
          </button>
          <button id="next" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
