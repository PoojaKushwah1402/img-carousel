/** @format */

import "./ImageCarousel/ImageCarousel.css";
import React from "react";
import ImageCarousel from "./ImageCarousel/ImageCarousel";

import leftIconDefault from "./assets/left.png";
import rightIconDefault from "./assets/right.png";

const ImageCarouselApp = ({
    activeClassName,
    data,
    imageIndicatorStyle,
    leftIcon,
    rightIcon,
    iconsStyle,
    hideActionBtns,
    hideImageIndicators
}) => {
    const props = {
        data: data || [],
        activeClassName: activeClassName || "active",
        imageIndicatorStyle: imageIndicatorStyle || {},
        leftIcon: leftIcon || leftIconDefault,
        rightIcon: rightIcon || rightIconDefault,
        iconsStyle: iconsStyle || {},
        hideActionBtns: hideActionBtns || false,
        hideImageIndicators: hideImageIndicators || false
    };
    return (
        <div className="ImageCarouselApp-container">
            <ImageCarousel {...props} />
        </div>
    );
};

export default ImageCarouselApp;
