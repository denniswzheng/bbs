import React from "react";
import "./style.css";
import styled from "styled-components";
import Link from "next/link";
import Col from "react-bootstrap/Col";
type ImageContainerProps = {
  imageUrl: string;
};

const ImageContainer = styled.div<ImageContainerProps>`
  background-image: ${props => `url(${props.imageUrl})`};
`;

const defaultProps = {
  author: "",
  description: "",
  publishedDate: "",
  readingTime: "",
  className: ""
};

type BlogBoxProps = {
  id: string;
  slug: string;
  imageUrl: string;
  title: string;
  colSize: number;
  tags?: Array<string>;
} & typeof defaultProps;

export const BlogBox = (props: BlogBoxProps) => {
  return (
    // mt: is margin-top from bootstrap not react-bootstrap
    <Col lg={props.colSize} style={{ flexWrap: "nowrap" }}>
      <article className="card">
        <ImageContainer imageUrl={props.imageUrl} className="card__img" />
        <Link href="/blog/[slug]" as={`/blog/${props.slug}`} passHref>
          <a className="card_link">
            <ImageContainer
              imageUrl={props.imageUrl}
              className="card__img--hover"
            />
          </a>
        </Link>
        <div className="card__info">
          {props.tags && props.tags.length > 0 && (
            <span className="card__category">{props.tags[0]}</span>
          )}

          <Link href="/blog/[slug]" as={`/blog/${props.slug}`} passHref>
            <a style={{ color: "#000", textDecoration: "none" }}>
              <h5 className="card__title">{props.title}</h5>
            </a>
          </Link>
          <span className="card__by">
            by{" "}
            <a href="#" className="card__author" title="author">
              {props.author}
            </a>
          </span>
        </div>

        <div className="card__info-hover">
          <div className="card__description">{props.description}</div>
        </div>
      </article>
    </Col>
  );
};

BlogBox.defaultProps = defaultProps;
