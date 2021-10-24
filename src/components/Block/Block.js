import React from "react";
import { Input } from "..";
import cx from "classnames";
import { mineBlock } from "../../utils";

const Block = props => {
  const {
    blockId,
    nonce,
    data,
    previousHash,
    hash,
    index,
    updateBlock,
    showMineButton
  } = props;
  const difficulty = 4;

  const onChange = (key, value) => {
    const block = {
      blockId,
      nonce,
      data
    };

    updateBlock && updateBlock({ ...block, [key]: value }, index);
  };

  return (
    <div
      className={cx(
        "flex flex-col bg-white rounded p-3 shadow hover:shadow-md",
        {
          "bg-green-100": hash && hash.substring(0, difficulty) === "0000",
          "bg-red-100": hash && hash.substring(0, difficulty) !== "0000"
        }
      )}
    >
      <table className="" cellSpacing="5">
        <tbody>
          {blockId !== undefined && (
            <tr>
              <td className="">Block</td>
              <td className="">
                <Input
                  type="number"
                  leftTitle="#"
                  min={0}
                  value={blockId}
                  onChange={e => onChange("blockId", e.target.value)}
                />
              </td>
            </tr>
          )}
          {nonce !== undefined && (
            <tr>
              <td className="">Nonce</td>
              <td className="">
                <Input
                  type="number"
                  min={0}
                  value={nonce}
                  onChange={e => onChange("nonce", e.target.value)}
                />
              </td>
            </tr>
          )}
          {data !== undefined && (
            <tr>
              <td className="">Data</td>
              <td className="">
                <textarea
                  cols="30"
                  rows="10"
                  value={data}
                  onChange={e => onChange("data", e.target.value)}
                  className="resize-none rounded border-2 border-solid border-gray-300 p-1 outline-none focus:border-gray-400"
                ></textarea>
              </td>
            </tr>
          )}
          {previousHash !== undefined && (
            <tr>
              <td className="">Prev.</td>
              <td className="">
                <Input type="text" value={previousHash} disabled />
              </td>
            </tr>
          )}
          <tr>
            <td className="">Hash</td>
            <td className="" data-tip={hash}>
              <Input type="text" value={hash} disabled className="truncate" />
            </td>
          </tr>
        </tbody>
      </table>
      {showMineButton && (
        <button
          onClick={() => {
            const newNonce = mineBlock(
              {
                blockId,
                nonce,
                data,
                hash,
                previousHash
              },
              difficulty
            );
            onChange("nonce", newNonce);
          }}
          className="rounded outline-none border-none px-3 py-1 w-min mx-auto bg-gradient-to-r from-green-300 to-green-500 text-white font-bold hover:from-green-400 hover:to-green-600 mt-3 shadow cursor-pointer"
        >
          Mine
        </button>
      )}
    </div>
  );
};

export default Block;
