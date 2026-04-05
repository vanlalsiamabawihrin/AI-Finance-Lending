import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import App from "../App";

const IndexPage: React.FC<PageProps> = () => <App />;

export default IndexPage;

export const Head: HeadFC = () => (
  <title>AI Finance & Lending - Expert Mortgage Brokers Australia</title>
);
