
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import cardData from '../data/cardData.json'


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
}

const Carousel = () => {
    return (
        
            <AliceCarousel
                mouseTracking
                items={cardData.map((card, index) => (
                    <div key={index} className="max-w-[430px] bg-Vary-Light-Gray items-center flex flex-col justify-center ">
                        <img src={card.avatar} alt="avatar" className="pt-4 w-[75px]" />
                        <div className="mt-5 text-Dark-Blue font-semibold text-[14px]">{card.name}</div>
                        <p className="text-Dark-Grayish-Blue pt-4 lg:text-[16px] text-[14px] px-8 text-center mb-4 lg:leading-6 leading-6 ">
                            {card.description}
                        </p>
                    </div>
                ))}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        
    );
};

export default Carousel;
