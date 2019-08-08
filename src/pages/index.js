import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="text-center">
        <h1 className="text-5xl">Coming 🥄:</h1>
        <h2>A Guidebook to Professional Managerial Class Treason</h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
