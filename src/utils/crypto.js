import SHA256 from "crypto-js/sha256";

export const computeHash = ({ blockId, nonce, data, previousHash }) => {
  let result = "";
  result += blockId || "";
  result += nonce || "";
  result += JSON.stringify(data) || "";
  result += previousHash || "";
  return SHA256(result).toString();
};

export const mineBlock = (block, difficulty) => {
  let currentNonce = block.nonce;
  let currentHash = block.hash;

  while (
    currentHash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
  ) {
    currentNonce++;
    currentHash = computeHash({ ...block, nonce: currentNonce });
  }

  return currentNonce;
};
