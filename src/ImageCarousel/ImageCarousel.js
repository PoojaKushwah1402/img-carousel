/** @format */

import "./ImageCarousel.css";
import React from "react";

const ImageCarousel = ({
    data,
    activeClassName,
    imageIndicatorStyle,
    leftIcon,
    rightIcon,
    iconsStyle,
    hideActionBtns,
    hideImageIndicators
}) => {
    const [specifications, setSpecifications] = React.useState({});
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const carouselWrapperRef = React.useRef(null);
    const touchStartXRef = React.useRef(null);

    const maxImageIndex = data.length - 1;

    React.useEffect(() => {
        const conatiner = document.querySelector(".carousel-container");
        const innerConatiner = document.querySelector(".carousel-wrapper");

        const width = conatiner.offsetWidth;
        const height = innerConatiner.offsetHeight;

        setSpecifications({
            width,
            height
        });
    }, []);

    const slideRight = () => {
        const conatiner = document.querySelector(".carousel-wrapper");
        if (currentImageIndex < maxImageIndex) {
            conatiner.style.marginLeft = `-${
                specifications.width * (currentImageIndex + 1)
            }px`;
            setCurrentImageIndex((curr) => curr + 1);
        } else {
            {
                conatiner.style.marginLeft = `0px`;
                setCurrentImageIndex(0);
            }
        }
    };

    const slideLeft = () => {
        const conatiner = document.querySelector(".carousel-wrapper");

        if (currentImageIndex > 0) {
            conatiner.style.marginLeft = `-${
                specifications.width * (currentImageIndex - 1)
            }px`;
            setCurrentImageIndex((curr) => curr - 1);
        } else {
            conatiner.style.marginLeft = `-${
                specifications.width * maxImageIndex
            }px`;
            setCurrentImageIndex(maxImageIndex);
        }
    };

    const handleTouchStart = (e) => {
        touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchDelta = touchStartXRef.current - touchEndX;

        if (touchDelta > 50) {
            slideRight();
        } else if (touchDelta < -50) {
            slideLeft();
        }
    };

    return (
        <div className="carousel-container">
            <div
                ref={carouselWrapperRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="carousel-wrapper"
            >
                {data &&
                    data.map((item) => {
                        return (
                            <div
                                className="img-container"
                                style={{
                                    maxWidth: specifications.width,
                                    minWidth: specifications.width
                                }}
                            >
                                <img
                                    className="carousel-img"
                                    src={item.src}
                                    alt={item.title}
                                />
                            </div>
                        );
                    })}
            </div>
            <div className="carousel-slider">
                {!hideActionBtns && (
                    <div className="carousel-slider-btns">
                        <div onClick={slideLeft}>
                            <img
                                style={iconsStyle}
                                className="carousel-slider-btns-actions"
                                src={leftIcon}
                            />
                        </div>
                        <div onClick={slideRight}>
                            <img
                                style={iconsStyle}
                                className="carousel-slider-btns-actions"
                                src={rightIcon}
                            />
                        </div>
                    </div>
                )}

                {!hideImageIndicators && (
                    <div className="carousel-indicator-component">
                        {data.map((image, index) => (
                            <Dot
                                key={index}
                                active={index === currentImageIndex}
                                activeClassName={activeClassName}
                                style={imageIndicatorStyle}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Dot = (props) => {
    const {activeClassName, active = false, style} = props;
    const activeDotClass = active ? activeClassName : "";
    return <div style={style} className={`carousel-dot ${activeDotClass}`} />;
};

export default ImageCarousel;
