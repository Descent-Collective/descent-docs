import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { HeaderLogo } from "./components/Header";

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
    text: "Nextra Docs Template",
  },

  primaryHue: {
    dark: 109,
    light: 100,
  },
};

export default config;
