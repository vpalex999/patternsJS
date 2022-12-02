import FarmCardItem from "./feature-card/farm-card-item";
import StoreCardItem from "./feature-card/store-card-item";
import FeatureCard from "./feature-card/feature-card";

export const AbstractFactoryCard = {
  title: null,
  factoryTitle(props) {
    switch (props.owner) {
      case "Фермерские продукты":
        this.title = `${props.title} с фермы`;
        return this;
      case "Магазинные продукты":
        this.title = `${props.title} из магазина`;
        return this;
      default:
        this.title = `${props.title}`;
    }
  },
  factoryCard(props) {
    switch (props.owner) {
      case "Фермерские продукты":
        return <FarmCardItem {...props} title={this.title} />;
      case "Магазинные продукты":
        return <StoreCardItem {...props} title={this.title} />;
      default:
        return <FeatureCard {...props} title={this.title} />;
    }
  },
  create(type, props) {
    switch (type) {
      case "title":
        return this.factoryTitle(props);
      case "card":
        return this.factoryCard(props);
      default:
        return this;
    }
  }
};

export default AbstractFactoryCard;
