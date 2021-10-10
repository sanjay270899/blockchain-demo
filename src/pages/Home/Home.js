import React from "react";
import { Header, Block } from "../../components";
import { useBlockChain } from "../../hooks/useBlockChain";
import { HashSection, BlockSection } from "./sections";

const blockchain = [
  {
    blockId: 1,
    nonce: 9175,
    data: "Block 1",
    hash: "0000c5be95b1a26ec785e9b25cccb4cab71bf83cfdc127aa7d23b6f18660350c"
  },
  {
    blockId: 2,
    nonce: 64018,
    data: "Block 2",
    hash: "00004bfd4ae991e7cff19987da6a766bc4ac3b652de7a19cc270f8539358624a"
  },
  {
    blockId: 3,
    nonce: 59481,
    data: "Block 3",
    hash: "000031de5dadaf2bde8a832b91c7455fd39a9c837915ed5bcc432d6975e9322e"
  },
  {
    blockId: 4,
    nonce: 21601,
    data: "Block 4",
    hash: "00009a00eae4541e89fabb2b44d5d903fc48a1c5e799610f3427560f00f2bd25"
  },
  {
    blockId: 5,
    nonce: 2041,
    data: "Block 5",
    hash: "0000105943306d156b84793c73ce61e569635fd554a622e9dbce049784d6e8a3"
  }
];

const Home = () => {
  const { blockChain, updateBlock } = useBlockChain(blockchain);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center space-y-5 p-5 bg-gray-50">
        <Section title="1. Hash">
          <HashSection />
        </Section>
        <Section title="2. Block">
          <BlockSection />
        </Section>
        <Section title="3. Blockchain">
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
        </Section>
      </div>
    </>
  );
};

const Section = props => {
  const { title, children } = props;
  return (
    <div className="flex justify-center bg-gray-200 w-full p-5">
      <div className="flex flex-col max-w-full">
        <div className="mb-3 text-lg font-bold text-center">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default Home;
