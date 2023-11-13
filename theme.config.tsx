import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { HeaderLogo } from "./components/Header";
import { Footer } from "./components/Footer";

const config: DocsThemeConfig = {
  head: () => (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="Descent protocol Docs" />

      {["og:site_name", "og:title", "twitter:title"].map((property) => (
        <meta
          key={property}
          property={property}
          content={"Descent protocol Docs"}
        />
      ))}
      {["description", "og:description", "twitter:description"].map(
        (property) => (
          <meta
            key={property}
            name={property}
            content={"Decentralized protocol powering digital currencies"}
          />
        )
      )}
      <meta name="twitter:site:domain" content="www.descentdao.com" />
      <meta name="twitter:url" content="https://www.descentdao.com" />

      {"/* FONTS */"}

      <link
        rel="preload"
        href="/fonts/AcidGrotesk/AcidGrotesk-Medium.otf"
        as="font"
        crossOrigin=""
        type="font/otf"
      />
      <link
        rel="preload"
        href="/fonts/AcidGrotesk/AcidGrotesk-Regular.otf"
        as="font"
        crossOrigin=""
        type="font/otf"
      />
      <link
        rel="preload"
        href="/fonts/NBArchitektNeue/NBArchitektNeueRegular.otf"
        as="font"
        crossOrigin=""
        type="font/otf"
      />
      <link
        rel="preload"
        href="/fonts/NBArchitektNeue/NBArchitektNeueBold.otf"
        as="font"
        crossOrigin=""
        type="font/otf"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  ),
  logo: <HeaderLogo />,
  project: {
    link: "https://github.com/Descent-Collective/",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/Descent-Collective/descent-docs",
  footer: {
    component: <Footer />,
  },

  primaryHue: {
    dark: 109,
    light: 100,
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
};

export default config;
