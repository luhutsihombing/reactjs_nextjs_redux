import React, {Component} from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import NextArrow from '../../../carousel/NextArrow';
import PrevArrow from '../../../carousel/PrevArrow';

class ThumbnailCoundown extends Component<
  {
    product: {
      variants: {
        thumbnail: string;
      }[];
    };
  },
  {
    galleryCarousel: Slider;
    variantCarousel: Slider;
    photoIndex: number;
    isOpen: boolean;
  }
> {
  slider1: Slider;
  slider2: Slider;

  constructor(props) {
    super(props);
    this.state = {
      galleryCarousel: null,
      variantCarousel: null,
      photoIndex: 0,
      isOpen: false
    };
  }

  componentDidMount() {
    this.setState({
      galleryCarousel: this.slider1,
      variantCarousel: this.slider2
    });
  }

  handleOpenLightbox = (e, imageIndex) => {
    e.preventDefault();
    this.setState({photoIndex: imageIndex, isOpen: true});
  };

  render() {
    const gallerySetting = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    const {product} = this.props;
    const {photoIndex, isOpen} = this.state;
    const productImages = [];
    product.variants.forEach(variant => {
      productImages.push(variant.thumbnail);
    });

    return (
      <div className="ps-product__thumbnail" data-vertical="true">
        <figure>
          <div className="ps-wrapper">
            <Slider
              {...gallerySetting}
              ref={slider => {
                this.slider1 = slider;
              }}
              asNavFor={this.state.variantCarousel}
              className="ps-product__gallery ps-carousel inside">
              {product.variants.map((variant, index) => (
                <div className="item" key={variant.thumbnail}>
                  <a href="#" onClick={e => this.handleOpenLightbox(e, index)}>
                    <img src={variant.thumbnail} alt="martfury" />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </figure>
        <Slider
          asNavFor={this.state.galleryCarousel}
          ref={slider => {
            this.slider2 = slider;
          }}
          swipeToSlide
          arrows={false}
          slidesToShow={3}
          vertical
          focusOnSelect
          className="ps-product__variants">
          {product.variants.map(variant => (
            <div className="item" key={variant.thumbnail}>
              <img src={variant.thumbnail} alt="martfury" />
            </div>
          ))}
        </Slider>
        {isOpen && (
          <Lightbox
            mainSrc={productImages[photoIndex]}
            nextSrc={productImages[(photoIndex + 1) % productImages.length]}
            prevSrc={productImages[(photoIndex + productImages.length - 1) % productImages.length]}
            onCloseRequest={() => this.setState({isOpen: false})}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + productImages.length - 1) % productImages.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % productImages.length
              })
            }
          />
        )}
      </div>
    );
  }
}

export default ThumbnailCoundown;
