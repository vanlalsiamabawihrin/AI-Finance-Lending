import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  article?: boolean;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  image,
  article = false,
  children,
}) => {
  // Use hardcoded values to avoid StaticQuery issues
  // These values match the gatsby-config.ts siteMetadata
  const defaultTitle =
    "AI Finance & Lending - Expert Mortgage Brokers Australia";
  const defaultDescription =
    "Get expert mortgage advice and access to 40+ lenders. Pre-approval in 24 hours. No upfront fees. Trusted by 2,500+ Australian homeowners.";
  const siteUrl = "https://www.aifinancelending.com.au";
  const author = "AI Finance & Lending";
  const keywords =
    "mortgage broker, home loans, refinancing, first home buyer, investment loans, construction loans, mortgage advisor, Australian mortgage broker, home loan specialist";
  const defaultImage = "/app-logo.png";
  const twitterUsername = "@aifinance";
  const phone = "1300 000 000";
  const email = "hello@aifinancelending.com.au";
  const address = "Level 10, 123 Queen Street, Melbourne VIC 3000";

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en-AU" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={author} />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Mobile & PWA */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta name="theme-color" content="#0B1C3D" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="AU-VIC" />
      <meta name="geo.placename" content="Melbourne" />
      <meta name="geo.position" content="-37.8136;144.9631" />
      <meta name="ICBM" content="-37.8136, 144.9631" />

      {/* Business Contact Information */}
      <meta name="contact" content={email} />
      <meta name="telephone" content={phone} />
      <meta name="address" content={address} />

      {/* Robots Meta */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Additional SEO tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {/* Verification tags for webmaster tools */}
      <meta name="google-site-verification" content="your-verification-code" />

      {/* Additional meta tags for better indexing */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="origin-when-cross-origin" />

      {children}
    </Helmet>
  );
};

export default SEO;
