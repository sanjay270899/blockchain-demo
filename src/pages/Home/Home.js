import React from "react";
import { Header } from "../../components";
import { HashSection, BlockSection, BlockChainSection } from "./sections";

const Home = () => {
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
          <BlockChainSection />
        </Section>
        <Section title="4. Distributed Blockchain">
          <h3 className="mt-3 mb-1 text-center font-normal">Peer 1</h3>
          <BlockChainSection />
          <h3 className="mt-3 mb-1 text-center font-normal">Peer 2</h3>
          <BlockChainSection />
          <h3 className="mt-3 mb-1 text-center font-normal">Peer 3</h3>
          <BlockChainSection />
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
