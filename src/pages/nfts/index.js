import * as React from "react";

import Layout from "../../components/Layout";
import NFTRoll from "../../components/NFTRoll";

export default class NFTIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #011ED9, -0.5rem 0 0 #011ED9",
              backgroundColor: "#011ED9",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Collections
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <NFTRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
