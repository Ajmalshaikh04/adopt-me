// import { Component } from "react";

// class Carousel extends Component {
//   state = {
//     active: 0,
//   };

//   static defaultProps = {
//     images: [
//       "https://corsproxy.io/?http://pets-images.dev-apis.com/pets/none.jpg",
//     ],
//   };

//   handleIndexClick = (e) => {
//     this.setState({
//       active: +e.target.dataset.index,
//     });
//   };
//   render() {
//     const { active } = this.state;
//     const { images } = this.props;
//     return (
//       <div className="carousel">
//         <img src={images[active]} alt="animal hero" />
//         <div className="carousel-smaller">
//           {images.map((photo, index) => (
//             // eslint-disable-next-line
//             <img
//               onClick={this.handleIndexClick}
//               data-index={index}
//               key={photo}
//               src={photo}
//               className={index === active ? "active" : ""}
//               alt="animal thumbnail"
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
// export default Carousel;
//=======================================================================
import { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = (e) => {
    setActive(e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            onClick={handleIndexClick}
            data-index={index}
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  images: [
    "https://corsproxy.io/?http://pets-images.dev-apis.com/pets/none.jpg",
  ],
};

export default Carousel;
