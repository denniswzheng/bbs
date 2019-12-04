import * as React from "react";
import { Component } from "react";
import PodcastPlayer from "components/podcastPlayer/podcastPlayer";

export default class Podcast extends Component {
  render() {
    return (
      <div>
        <p>PODCASTS</p>
        <PodcastPlayer />
      </div>
    );
  }
}
