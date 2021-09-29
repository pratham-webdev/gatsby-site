import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Main from "../components/main";

const blogPost = {
  title: "Blog Detail",
  desc: "Blog Detail Section",
};

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <div>
      <Main title={blogPost.title} desc={blogPost.desc} />
      <div className="container pb-3">
        <div className="card p-3">
          <div className="card-body">
            <h4 className="card-title">{data.mdx.frontmatter.title}</h4>
            <div className="card-subtitle text-muted mb-3">
              Posted: {data.mdx.frontmatter.date}
            </div>
            <div className="card-text">
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
            <div>
            <GatsbyImage className="img-fluid mb-3" image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
            </div>
            <Link className="btn btn-outline-primary btn-sm" to="/blog/">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
query($slug: String) {
  mdx(slug: {eq: $slug}) {
    body
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`;

export default BlogPost;
