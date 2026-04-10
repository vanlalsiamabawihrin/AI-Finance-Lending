import type { GatsbyNode } from "gatsby";
import path from "path";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });
};

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createRedirect } = actions;

  // Prevent trailing slash redirects
  createRedirect({
    fromPath: "/*/",
    toPath: "/*",
    isPermanent: true,
    redirectInBrowser: true,
  });

  // Handle common redirect patterns
  createRedirect({
    fromPath: "/home",
    toPath: "/",
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: "/index.html",
    toPath: "/",
    isPermanent: true,
    redirectInBrowser: true,
  });
};
