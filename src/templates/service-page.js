import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const ServicePageTemplate = ({
                                        image,
                                        intro,
                                    }) => {
    const heroImage = getImage(image) || image;

    return (
        <div className="content">
            <FullWidthImage img={heroImage}  />
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <Features gridItems={intro.blurbs} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

ServicePageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
};

const ServicePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <ServicePageTemplate
                image={frontmatter.image}
                intro={frontmatter.intro}

            />
        </Layout>
    );
};

ServicePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default ServicePage;

export const ServicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
       
        
      }
    }
  }
`;