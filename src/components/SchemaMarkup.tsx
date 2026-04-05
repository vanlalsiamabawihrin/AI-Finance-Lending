import React from "react";
import { Helmet } from "react-helmet";

interface SchemaMarkupProps {
  type?:
    | "organization"
    | "localBusiness"
    | "financialService"
    | "breadcrumb"
    | "faq"
    | "review";
  data?: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  type = "organization",
  data,
}) => {
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "AI Finance & Lending",
    alternateName: "AI Finance",
    url: "https://www.aifinancelending.com.au",
    logo: "https://www.aifinancelending.com.au/app-logo.png",
    description:
      "Expert mortgage brokers helping Australians secure the best home loans. Access to 40+ lenders with pre-approval in 24 hours.",
    telephone: "1300 000 000",
    email: "hello@aifinancelending.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 10, 123 Queen Street",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-37.8136",
      longitude: "144.9631",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/aifinance",
      "https://www.instagram.com/aifinance",
      "https://www.linkedin.com/company/aifinance",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: [
      "Mortgage Broker",
      "Home Loans",
      "Refinancing",
      "First Home Buyer Loans",
      "Investment Property Loans",
      "Construction Loans",
      "Commercial Loans",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
  });

  const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.aifinancelending.com.au/#organization",
    name: "AI Finance & Lending",
    image: "https://www.aifinancelending.com.au/app-logo.png",
    telephone: "1300 000 000",
    email: "hello@aifinancelending.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 10, 123 Queen Street",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-37.8136",
      longitude: "144.9631",
    },
    url: "https://www.aifinancelending.com.au",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
    priceRange: "$$",
  });

  const getFinancialServiceSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mortgage Brokerage",
    provider: {
      "@type": "FinancialService",
      name: "AI Finance & Lending",
      url: "https://www.aifinancelending.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mortgage Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Purchase Loans",
            description:
              "First home or upgrading? We find the perfect loan for your dream property.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Refinancing",
            description:
              "Lower your rate, reduce repayments, or access equity.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Investment Loans",
            description:
              "Build your property portfolio with tailored investment loan solutions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction Loans",
            description:
              "Building your dream home? We arrange construction and land loans.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "First Home Buyer",
            description:
              "Special programs, grants, and guidance for first-time buyers.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Loans",
            description:
              "Business property finance and commercial lending solutions.",
          },
        },
      ],
    },
  });

  const getBreadcrumbSchema = (items: any[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });

  const getFAQSchema = (faqs: any[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });

  const getReviewSchema = (reviews: any[]) => ({
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Organization",
      name: "AI Finance & Lending",
      url: "https://www.aifinancelending.com.au",
    },
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.text,
      publisher: {
        "@type": "Organization",
        name: "AI Finance & Lending",
      },
    })),
  });

  const getSchema = () => {
    switch (type) {
      case "organization":
        return getOrganizationSchema();
      case "localBusiness":
        return getLocalBusinessSchema();
      case "financialService":
        return getFinancialServiceSchema();
      case "breadcrumb":
        return getBreadcrumbSchema(data || []);
      case "faq":
        return getFAQSchema(data || []);
      case "review":
        return getReviewSchema(data || []);
      default:
        return getOrganizationSchema();
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(getSchema())}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
