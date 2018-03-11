import React, {Component} from 'react';
import Slider from 'react-slick'
import opened from './../resources/1.jpg'
import closed1 from './../resources/3.jpg'

export default class ImageRotator extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            lazyLoad: true,
            centerMode: true,
            centerPadding: '0px',
            autoplay: true,
            autoplaySpeed: 5000,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div><img src={opened} /></div>
                    <div><img src={closed1} /></div>
                </Slider>
            </div>
        );
    }
}