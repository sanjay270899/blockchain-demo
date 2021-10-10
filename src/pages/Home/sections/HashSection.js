import React, { useState } from "react";
import { Block } from "../../../components";
import { computeHash } from "../../../utils/crypto";

export const HashSection = () => {
  const [block, setBlock] = useState({
    data: "",
    hash: computeHash({ data: "" })
  });

  const onChange = ({ data }) => {
    setBlock({
      data,
      hash: computeHash({ data })
    });
  };

  return <Block data={block.data} hash={block.hash} updateBlock={onChange} />;
};
