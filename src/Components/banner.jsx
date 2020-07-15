import React, {Component} from 'react';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const photos = [
    {
        name: 'photo 1',
        url: 'https://s.yimg.com/ny/api/res/1.2/oRs63wqnTyfOAexy6BYGhg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5f2acfff720e9a2c822eaa0b4f37e3dd'
    },
    {
        name: 'photo 2',
        url: 'https://www.dogalize.com/wp-content/uploads/2017/06/La-sverminazione-e-la-pulizia-del-cucciolo-del-cane-2-800x400-800x400.jpg'
    },
    {
        name: 'photo 3',
        url: 'https://eldemocrata.com/wp-content/uploads/2019/12/perro-760x470.jpg'
    },
    {
        name: 'photo 4',
        url: 'https://pbs.twimg.com/profile_images/1146072983787724800/SElmsSlI_400x400.jpg'
    },
  
];

class Banner extends Component {
    render () {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            arrows: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            className: 'slides',
    
        };
        return (
            <div className="App">
                <Slider {...settings}>
                    {photos.map((photo,index) => {
                        return (
                            <div key={index}>
                                <img height="100%" src={photo.url}>

                                </img>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
export default Banner;
