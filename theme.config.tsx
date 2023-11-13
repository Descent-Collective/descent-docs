import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { HeaderLogo } from "./components/Header";
import { Footer } from "./components/Footer";

const config: DocsThemeConfig = {
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
