import React from "react";
import Main from "./components/main";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

const blogTitle = {
  title: "Blog",
  desc: "Blog Section",
};

const BlogPage = ( {data} ) => {
  return (
    <div>
      <Main title={blogTitle.title} desc={blogTitle.desc} />
      <div className="container">
      <div className="row">
        {data.allMdx.nodes.map((node) => (
          <div className="col-4" key={node.id}>
            <div className="card p-3">
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export const query = graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          parent {
            id
          }
          body
        }
      }
    }
  `

export default BlogPage;
