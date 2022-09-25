import React from "react";
import NextHead from "next/head";

type Props = {
  title?: string;
};

const Head: React.FC<Props> = ({ title = "Shop the highstreet" }) => (
  <NextHead>
    <title>{`Stepinto - ${title}`}</title>
    <meta name="title" content={`Stepinto - ${title}`} />
    <meta
      name="description"
      content=" A social shopping platform to shop your favourite stores from one place. Join to shop, follow and share the brands you love."
    />
  </NextHead>
);

export default Head;
