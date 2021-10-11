import React from "react";
import { useBlockChain } from "../../../hooks/useBlockChain";
import { Block } from "../../../components";
import blockchainData from "../data/blockchain.json";

export const BlockChainSection = () => {
  const blockchain = blockchainData.data;

  const { blockChain, updateBlock } = useBlockChain(blockchain);

  return (
    <div className="flex space-x-3 overflow-x-auto pb-3">
      {blockChain.map((block, index) => (
        <Block
          key={index}
          blockId={block.blockId}
          nonce={block.nonce}
          data={block.data}
          previousHash={
            index === 0
              ? "0000000000000000000000000000000000000000000000000000000000000000"
              : blockChain[index - 1].hash
          }
          hash={block.hash}
          index={index}
          updateBlock={updateBlock}
          showMineButton
        />
      ))}
    </div>
  );
};
