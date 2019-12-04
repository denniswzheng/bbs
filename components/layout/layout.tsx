import React from "react";
import { ErrorBoundary } from "../error-boundary";
import { Header, Footer } from "components/layout";
import Container from "react-bootstrap/Container";

export const Layout = props => {
  return (
    <div style={{ position: "relative", minHeight: "100%" }}>
      <div style={{ paddingBottom: "60px" }}>
        <Header />
        <ErrorBoundary>
          <Container>
            <main>{props.children}</main>
          </Container>
        </ErrorBoundary>
        <Footer />
      </div>
    </div>
  )
}
