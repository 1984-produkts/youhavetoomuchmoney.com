import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Header from "./header";

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-gray-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            Design by Maha S. Ahmed
            <br />
            Hosted by Netlify and the Internet Archive
            <br />
            ©2019, CC BY-SA-NC
            <br />
            <OutboundLink
              href="https://1984produkts.com"
              className="font-bold no-underline text-white"
            >
              1984 PRODUKTS, Inc.
            </OutboundLink>
          </p>

          <p>
            <OutboundLink
              href="https://github.com/yhtmmoney/youhavetoomuchmoney.com"
              className="font-bold no-underline text-white"
            >
              GitHub (though why you’d want to?)
            </OutboundLink>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
