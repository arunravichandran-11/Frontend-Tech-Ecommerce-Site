import React from "react";
import Card from "../../core/Card";
import { CardAction, CardImage, CardSummary } from "../../core/Card";
import "./ArticleCard.scss";

var intlNumberFormatValues = ["de-DE", "currency", "EUR"];

export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});

const ArticleCard = ({ className, article }: any) => {
  const formattedPrice = formatter.format(article.prices.regular.value / 100);

  const actions = <section role="button">Add to cart</section>;

  return (
    <Card className={className}>
      <CardImage image={article.images[0].path} alt="product" />
      <CardSummary title={article.name}>
        <div>{formattedPrice}</div>
      </CardSummary>
      <CardAction>{actions}</CardAction>
    </Card>
  );
};

export default ArticleCard;
