import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { BlogPost } from "services";

interface imageProps {
  imageUrl: string;
}
const CarouselItem = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(p: imageProps) => p.imageUrl});
  height: 60vh;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
`;

type BannerProps = {
  entries: BlogPost[];
};

const Banner = (props: BannerProps) => {
  return (
    <div className="mb-3">
      <Carousel>
        {/* banner only has the first two post entried */}
        {props.entries.length > 0 && props.entries.length < 2}
        <Carousel.Item>
          <CarouselItem imageUrl={props.entries[0].heroImage.imageUrl} />
          <Carousel.Caption>
            <h3>{props.entries[0].title}</h3>
            <p>{props.entries[0].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem imageUrl={props.entries[1].heroImage.imageUrl} />
          <Carousel.Caption>
            <h3>{props.entries[1].title}</h3>
            <p>{props.entries[1].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Banner;
