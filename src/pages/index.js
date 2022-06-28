import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="mydog"
        src="C:\work\gatsby_projects\my-blog-2022-06-27\src\images/mypuppy.jpg"
      />
    </Layout>
  );
};
export default IndexPage;