"use client";
import { SITE } from "../lib/site";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "GeneralContractor"],
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        alternateName: "Parkline Infra",
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/images/parkline-logo.png`,
          width: 400,
          height: 100,
        },
        image: `${SITE.url}/images/parkline-logo.png`,
        description: SITE.description,
        foundingDate: "2015",
        telephone: [SITE.contact.phone1Display, SITE.contact.phone2Display],
        email: SITE.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          postalCode: SITE.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.lat,
          longitude: SITE.geo.lng,
        },
        areaServed: [
          "Rajasthan", "Gujarat", "Haryana", "Uttar Pradesh",
          "Madhya Pradesh", "Punjab", "Kerala", "Delhi NCR",
          "Karnataka", "Uttarakhand", "Maharashtra"
        ],
        hasMap: `https://maps.google.com/?q=${SITE.geo.lat},${SITE.geo.lng}`,
        openingHours: "Mo-Sa 09:00-18:00",
        priceRange: "Contact for quote",
        sameAs: [],
        knowsAbout: [
          "Ground Improvement",
          "Stone Column Installation",
          "Vibro Replacement",
          "Pile Foundation",
          "Bridge Construction",
          "Railway Infrastructure",
          "Steel Fabrication",
          "Rail-Road Vehicle Manufacturing",
          "Dedicated Freight Corridor",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "AA Class PWD Contractor",
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: "Public Works Department (PWD), Rajasthan",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
