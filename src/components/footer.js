import React from "react";
import { StaticQuery, graphql } from "gatsby";

function Footer() {
    return(
        <StaticQuery
            query = { graphql`
                {
                    allSite {
                        edges {
                            node {
                                siteMetadata {
                                    twitter
                                    linkedin
                                    github
                                    author
                                }
                            }
                        }
                    }
                }
            `}

            render = { data => (
                <div style={{textAlign: 'center'}}>
                    {data.allSite.edges.map( ({node}) => (
                        <div>
                            <hr/>
                            <a style={{padding: '20px'}} href={node.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a style={{padding: '20px'}} href={node.siteMetadata.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
                            <a style={{padding: '20px'}} href={node.siteMetadata.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <h4>Designed & developed by {node.siteMetadata.author}</h4>
                        </div>
                    ))}
                </div>
            )}
        />
    )
}

export default Footer;