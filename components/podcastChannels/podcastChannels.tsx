import * as React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;
const PodcastButton = styled(Button)`
  width: 100%;
  margin: 12px;
  border: none;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;

const ItunesButton = styled(PodcastButton)`
  background: linear-gradient(
    to bottom,
    rgb(205, 102, 246) 0%,
    rgb(154, 61, 209) 80%,
    rgb(142, 52, 201) 100%
  );
`;

const OverCastButton = styled(PodcastButton)`
  background: linear-gradient(
    to bottom,
    rgb(255, 138, 10) 0%,
    rgb(255, 105, 48) 100%
  );
`;

const SpotifyButton = styled(PodcastButton)`
  background: linear-gradient(
    to bottom,
    rgb(4, 160, 59) 0%,
    rgb(16, 172, 71) 100%
  );
`;

const PodcastChannels: React.FunctionComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <UnorderedList>
              <li className="subscribe-itunes">
                <a
                  target="_blank"
                  href="https://podcasts.apple.com/us/podcast/big-bank-sports-podcast/id1477113887"
                  rel="noopener noreferrer"
                >
                  <ItunesButton>iTunes</ItunesButton>
                </a>
              </li>
              <li className="subscribe-overcast">
                <a
                  target="_blank"
                  href="https://overcast.fm/itunes1477113887/big-bank-sports-podcast"
                  rel="noopener noreferrer"
                >
                  <OverCastButton>Overcast</OverCastButton>
                </a>
              </li>
              <li className="subscribe-spotify">
                <a
                  target="_blank"
                  href="https://open.spotify.com/show/7lBCRqjG7xw8x54Z6YEnyE"
                  rel="noopener noreferrer"
                >
                  <SpotifyButton>Spotify</SpotifyButton>
                </a>
              </li>
            </UnorderedList>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PodcastChannels;
