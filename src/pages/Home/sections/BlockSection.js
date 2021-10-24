import React, { useState } from "react";
import { Block } from "../../../components";
import { computeHash } from "../../../utils/crypto";

export const BlockSection = () => {
  const [block, setBlock] = useState({
    blockId: 1,
    nonce: 38724,
    data: "100 RS: person001 -> person002",
    hash: computeHash({
      blockId: 1,
      nonce: 38724,
      data: "100 RS: person001 -> person002"
    })
  });

  const onChange = ({ blockId, nonce, data }) => {
    setBlock({
      blockId,
      nonce,
      data,
      hash: computeHash({ blockId, nonce, data })
    });
  };

  return (
    <Block
      blockId={block.blockId}
      nonce={block.nonce}
      data={block.data}
      hash={block.hash}
      updateBlock={onChange}
      showMineButton
    />
  );
};
