import React from 'react';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.png';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';


function Hero() {

    return (
        <div className="main">
            <div className="hero">
                <div className="container-hero">
                    <div className="left">
                        <div className="main-headeing-h1">
                            <h1>ORDER FOOD</h1>
                            <h1>TO YOUR DOOR</h1>
                        </div>

                        <div className="text-container-p">
                            <h3>FIND YOUR FAVORITE DISH</h3>
                            <p>Discover culinary delights and find your <br /> favorite dish with our swift and savory <br />food delivery service.</p>
                        </div>
                        <div className="btn">
                            <button>Explore Manu</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="text-container-1-right">
                            <h1>12K+</h1>
                            <p>User using our Services</p>
                        </div>

                        <div className="text-container-2-right">
                            <p>With order meal, get <br />your food delivered to <br />your doorstep within <br />an hour!</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* get-food */}

            <div className="get-food">
                <div className="left-get-food">
                    <h1>GET YOUR FOOD IN LESS THAN AN HOUR</h1>
                    <div className="manu">
                        <p>Craving delicious meals without the hassle of cooking or leaving your home? Look no further than OrderMeal, your go to food delivery app for satisfying your cravings with just a few taps.</p>
                        <button>Explore Manu</button>
                    </div>
                </div>
                <div className="right-get-food">
                    <div className="download-app">
                        <div className="text-download-app">
                            <h1 class='gray'>01</h1>
                            <h1>Download the app</h1>
                            <p>download the Order meal app and order your food online to get the fastest delivery</p>
                            <button>Download app</button>
                        </div>
                        <div className="img-download-app">
                        <img src={pic1} alt="" />
                        </div>
                    </div>
                    <div className="select-food">
                    <div className="text-select-food">
                            <h1 class='gray'>02</h1>
                            <h1>Select your food</h1>
                            <p>Select food you want from thousends of resturants.</p>
                            <h1 class='gray'>03</h1>
                            <h1>Confirm your Order</h1>
                            <p>Select food you want from thousends of resturants.</p>
                        </div>
                        <div className="img-select-food">
                        <img src={pic2} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            {/* french-fries */}
            <div className="french-fries">
                <div className="left-french-fries">
                   <h1>8 BURGERS+ FRENCH FRIES</h1>
                   <div className="fed-beef">
                    <div className="img-fed-beef"></div>
                    <div className="text-fed-beef">
                        <p>100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun</p>
                    </div>
                   </div>
                   <div className="btn-left-french-fries">
                    <button>Explore Manu</button>
                   </div>
                </div>
                <div className="right-french-fries">
                    <h1>Enjoy Brugrs at home!</h1>
                </div>
            </div>


            {/* SEE TODAY BEST DEAL !!! */}

            <div className="best-deals">
                <h1>SEE TODAY BEST DEAL !!!</h1>
                <div className="slide">
                    <li><img src={slide1} alt="" /></li>
                    <li><img src={slide2} alt="" /></li>
                    <li><img src={slide3} alt="" /></li>
                    <li><img src={slide4} alt="" /></li>
                </div>
                <div className="btn">
                    <button>See All</button>
                </div>
            </div>

        </div>
    );

}

export default Hero;