import React from "react";
import { Helmet } from "react-helmet";

// Note: If I try to break these into smaller sub-components, it triggers an error in
// Helmet. It's a known bug that hasn't been addressed yet.
function SiteHeadData() {
  return (
    <Helmet>
      <title>Robert Kelley</title>
      <meta
        name="description"
        content="A portfolio site for the work of web developer Robert Kelley."
      />

      {/* GOOGLE FONTS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Inconsolata:wght@200..900&display=swap"
        rel="stylesheet"
      />

      {/* FAVICONS */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}

export default SiteHeadData;
