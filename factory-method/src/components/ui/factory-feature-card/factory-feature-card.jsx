import React from "react";
import { OwnerProductType } from "../../../const";
import StoreFeatureCard from "../store-feature-card/store-feature-card";
import FeatureCard from "/src/components/ui/feature-card/feature-card";

function FactoryFeatureCard(feature) {
  switch (feature.owner) {
    case OwnerProductType.FARMING:
      return <FeatureCard {...feature} />;
    case OwnerProductType.STORE:
      return <StoreFeatureCard {...feature} />;
    default:
      return <FeatureCard {...feature} />;
  }
}

export default FactoryFeatureCard;
