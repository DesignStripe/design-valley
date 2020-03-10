import React, { useState } from "react";
import { PageTitle } from "../components/UI/Typography";
import FaqSection from "../components/UI/FaqSection";

const DomainOwnership = ({}) => {
  return (
    <div>
      <PageTitle>Domain Ownership</PageTitle>
      <FaqSection
        title="Who runs DesignValley?"
        paragraphs={[
          "This is a custom message to confirm the ownership of DesignValley.club domain. The owner is Dimitris Raptis and you can contact him at dimitrisraptis96@gmail.com"
        ]}
      />
    </div>
  );
};

export default DomainOwnership;
