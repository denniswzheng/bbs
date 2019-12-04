import React from "react";
import { Layout } from "components/layout";
import { BlogApi, BlogPost } from "services";
import { BlogBox } from "components/blog";
import PodcastChannels from "components/podcastChannels/podcastChannels";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "components/banner/banner";

type BlogPageProps = {
  entries: Array<BlogPost>;
};

export default class Index extends React.Component<BlogPageProps> {
  static async getInitialProps() {
    const api = new BlogApi();
    const entries = await api.fetchBlogEntries();
    return { entries };
  }

  renderBlogList = entries =>
    entries.map((entry, i) => {
      let colSize;

      // modding by 3 because that's the number of post
      // in every other column
      if (i % 4 != 0) {
        colSize = 4;
      } else {
        colSize = 12;
      }
      return (
        <BlogBox
          key={i}
          id={entry.id}
          slug={entry.slug}
          imageUrl={entry.heroImage.imageUrl}
          title={entry.title}
          author={entry.author.name}
          description={entry.description}
          tags={entry.tags}
          colSize={colSize}
        />
      );
    });

  render() {
    const { entries } = this.props;
    return (
      <Layout>
        <Banner entries={[entries[1], entries[2]]} />
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col lg={9}>
            <Row>
              {entries.length > 0 && this.renderBlogList(entries)}
              {entries.length == 0 && <div>Loading...</div>}
            </Row>
          </Col>
          <Col lg={3}>
            <Row>
              <Col>
                <h3 style={{ textAlign: "center" }}>PODCAST</h3>
                <PodcastChannels />
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    );
  }
}
