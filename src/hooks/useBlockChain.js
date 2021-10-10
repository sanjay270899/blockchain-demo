import { useState } from "react";
import { computeHash } from "../utils";

export const useBlockChain = blockchain => {
  const [blockChain, setBlockChain] = useState(blockchain);

  const addBlock = block => {
    setBlockChain(current => [...current, block]);
  };

  const updateBlock = (newBlock, at) => {
    let baseHash =
      "0000000000000000000000000000000000000000000000000000000000000000";
    setBlockChain(current => {
      const updateBlockChain = [];
      for (let index = 0; index < current.length; index = index + 1) {
        if (index < at) {
          updateBlockChain.push(current[index]);
        }
        if (index === at) {
          updateBlockChain.push({
            ...newBlock,
            hash: computeHash({
              ...newBlock,
              previousHash:
                index > 0 ? updateBlockChain[index - 1].hash : baseHash
            })
          });
        } else if (index > at) {
          updateBlockChain.push({
            ...current[index],
            hash: computeHash({
              ...current[index],
              previousHash: updateBlockChain[index - 1].hash
            })
          });
        }
      }
      return updateBlockChain;
    });
  };

  return { blockChain, addBlock, updateBlock };
};
