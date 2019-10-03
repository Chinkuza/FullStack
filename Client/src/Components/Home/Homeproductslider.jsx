import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import homeimg1 from "../../Assets/Img/homeproducts1.jpg";
import homeimg2 from "../../Assets/Img/homeproduct2.png";
import homeimg3 from "../../Assets/Img/homeproduct3.jpg";
import homeimg4 from "../../Assets/Img/homeproduct4.jpg";
import homeimg5 from "../../Assets/Img/homephone5.jpg";
import homeimg6 from "../../Assets/Img/homeproducts6.jpg";

class Homeproductslider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={homeimg1} alt="img01" />
        </div>
        <div>
          <img src={homeimg2} alt="img01" />
        </div>
        <div>
          <img src={homeimg3} alt="img01" />
        </div>
        <div>
          <img src={homeimg4} alt="img01" />
        </div>
        <div>
          <img src={homeimg5} alt="img01" />
        </div>
        <div>
          <img src={homeimg6} alt="img01" />
        </div>
      </Slider>
    );
  }
  //   return (
  //     <div id="mi-slider" className="mi-slider bg-light">
  //       <ul>
  //         <li>
  //           <a href="#">
  //   <img
  //     src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGDDgDzmq3F5JaH9Yiim_ZvcwBEf9mDKcft3xuEIuWEJLp7y_uNcvoAUssnwyF5E8SlGpoZ8fdDP_7HdHHRLhzp5tO8WqBzmq-IouXVxQ&usqp=CAE"
  //     alt="img01"
  //   />
  //             <h4>Iphone</h4>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://i.ebayimg.com/images/g/c2YAAOSw1-5bHpVl/s-l300.png"
  //               alt="img02"
  //             />
  //             <h4>Iphone 6</h4>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNwBFYEaNR07Q1o83F-z6oLzB9ducxGk4s0G6kimyU16d-Y5c"
  //               alt="img03"
  //             />
  //             <h4>Iphone 8</h4>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOeZYr77RwJyQHFFkqumIzG-bSVsHiMbnn6Qz1gBt8F4GWmmg"
  //               alt="img04"
  //             />
  //             <h4>The X</h4>
  //           </a>
  //         </li>
  //       </ul>
  //       <ul>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://www.samsung.com/global/galaxy/galaxy-s9/specs/images/galaxy-s9-share-image.jpg"
  //               alt="img05"
  //             />
  //             <h4> Samsung S6</h4>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkACDgdaDVPQhVrd7tOmD-6ZwMm8E7BgESd5AKOVUf0CzKtJcOmw"
  //               alt="img06"
  //             />
  //             <h4>Samsung Note 4</h4>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyk0pdGRd1JW9B0A9DqSOGfqHH_b32eN44dku8tFjeXOi4Tg81Zw"
  //               alt="img07"
  //             />
  //             <h4>Samsung Galaxy</h4>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbr-qn1fMxw4tldzk02H6rMoPoCciqtp3kBFVFpFW29w9q6dZ"
  //               alt="img08"
  //             />
  //             <h4>Grand prime</h4>
  //           </a>
  //         </li>
  //       </ul>
  //       <ul>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhMg11k9soY8jFhXhdH6usZZ1bIeWnvPlCJmSW09Ed5XoWFGSF"
  //               alt="img09"
  //             />
  //             <h4>Lg stylo</h4>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtaDV2votcI0LNeSa0zvCSgJGAKE714de7VRGHzpsCiGfN_kWx9w"
  //               alt="img10"
  //             />
  //             <h4>Lg galaxy prime</h4>
  //           </a>
  //         </li>
  //         <li>
  //           <a href="#">
  //             <img
  //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroEDetW-hquC25b3FwPHY0FfHiXJmVmemjVEFXS6lunQnTzZM"
  //               alt="img11"
  //             />
  //             <h4>Lg static</h4>
  //           </a>
  //         </li>
  //       </ul>

  //       <nav>
  //         <a href="#">Iphone</a>
  //         <a href="#">Samsung</a>
  //         <a href="#">Lg</a>
  //       </nav>
  //     </div>
  //   );
}
export default Homeproductslider;
