import React from "react";

import CheckoutHeader from "../../CheckoutHeader";
import Container from "../../Container";
import { Section } from "../../Section";

const CheckoutLayout = ({ children }) => {
  return (
    <div>
      <CheckoutHeader />

      <Section>
        <Container>{children}</Container>
      </Section>
    </div>
  );
};

export default CheckoutLayout;
