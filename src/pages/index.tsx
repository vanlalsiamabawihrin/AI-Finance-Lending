import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import App from "../App";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

const IndexPage: React.FC<PageProps> = () => (
  <>
    <SEO
      title="AI Finance & Lending - Expert Mortgage Brokers Australia"
      description="Get expert mortgage advice and access to 40+ lenders. Pre-approval in 24 hours. No upfront fees. Trusted by 2,500+ Australian homeowners."
      pathname="/"
    />
    <SchemaMarkup type="organization" />
    <SchemaMarkup type="localBusiness" />
    <SchemaMarkup type="financialService" />
    <App />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <title>AI Finance & Lending - Expert Mortgage Brokers Australia</title>
);
