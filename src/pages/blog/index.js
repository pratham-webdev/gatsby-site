import React from "react";
import Main from "../components/main";
import { Link,graphql } from "gatsby";

const blogTitle = {
  title: "Blog",
  desc: "Blog Section",
};

const BlogPage = ({ data }) => {
  return (
    <div>
      <Main title={blogTitle.title} desc={blogTitle.desc} />
      <div className="container">
        <div className="row g-3">
          {data.allMdx.nodes.map((node) => (
            <div className="col-md-4 col-12" key={node.id}>
              <div className="card p-3">
                <div className="card-body">
                  <h4 className="card-title">{node.frontmatter.title}</h4>
                  <div className="card-subtitle text-muted mb-3">
                    Posted: {node.frontmatter.date}
                  </div>
                    <Link className="btn btn-outline-primary btn-sm" to={`/blog/${node.slug}`}>
                      Read More
                    </Link>
                </div>
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
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      slug
    }
  }
}
`;

export default BlogPage;
