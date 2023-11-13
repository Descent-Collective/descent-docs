import React from "react";
import { useRouter } from "next/router";
import { useTheme } from "nextra-theme-docs";

import { DescentLogo } from "./Logo";
import { styled } from "../stitches.config";

export function HeaderLogo() {
  const [opacity, setOpacity] = React.useState(0);

  const { theme: colorMode } = useTheme();

  React.useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 0);
  }, []);

  return (
    <Container css={{ opacity }}>
      <DescentLogo />
      <PlainText css={{ color: colorMode === "dark" ? "white" : "black" }}>
        Developer
      </PlainText>
      <GreenText>Docs</GreenText>
    </Container>
  );
}

const Container = styled("div", {
  transition: "opacity 300ms",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  fontSize: 22,
});

const GreenText = styled("span", {
  color: "$brandGreen500",
  paddingLeft: 8,
});

const PlainText = styled("span", {
  paddingLeft: 16,
});
