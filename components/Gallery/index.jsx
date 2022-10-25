import React from 'react';
import GalleryItem from "./GalleryItem";
import GalleryStyled from "./Gallery.styled";
import Carousel from "../Carousel";

function Index(props) {
    return (
        <GalleryStyled>
            <GalleryItem
                src={"/imgs/img1.jpg"}
                alt={"hello"}
            />
            <GalleryItem
                src={"/imgs/img2.jpg"}
                alt={"hello"}
            />
            <GalleryItem
                src={"/imgs/img3.jpg"}
                alt={"hello"}
            />
            <GalleryItem
                src={"/imgs/img4.jpg"}
                alt={"hello"}
            />
            <GalleryItem
                src={"/imgs/img5.jpg"}
                alt={"hello"}
            />
        </GalleryStyled>
    );
}

export default Index;