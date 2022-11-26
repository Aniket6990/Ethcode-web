import React from "react";
import Image from "next/image";
import ethcode_large from "../assets/home/ethcode_large.svg";
import RectangleCard from "./RectangleCard";
import gettingStarted from "../assets/home/getting_started.svg";
import development from "../assets/home/advance_development.svg";
import configuration from "../assets/home/configuration.svg";
import CircleCard from "./CircleCard";
import compile from "../assets/home/compile_deploy.svg";
import debug from "../assets/home/debug.svg";
import unitTest from "../assets/home/unit_test.svg";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <div id="Home">
        <div id="home-banner-container">
          <div id="home-banner">
            <Image src={ethcode_large} alt="ethcode logo" id="home-image" />
            <span id="line"></span>
            <span id="banner-text">
              A VS code plugin for <span className="blue-text">Ethereum</span>{" "}
              Blockchain
            </span>
          </div>
        </div>
        <div id="Rectangle-cards-holder">
          <RectangleCard
            image={gettingStarted}
            alt="getting started"
            headText="Getting Started"
            desc="Everything from the installation of Ethcode to deploying smart contract"
          />
          <RectangleCard
            image={configuration}
            alt="Configuration"
            headText="Configuration"
            desc="Configure Ethcode according to your requirement"
          />
          <RectangleCard
            image={development}
            alt="Development"
            headText="Development"
            desc="Know more about complex smart contact development"
          />
        </div>
        <div id="home-demonstration">
          <h1 id="demostration-text">
            See what our plugin can do for your{" "}
            <span className="blue-text">dApp</span> development
          </h1>
        </div>
        <div id="Circle-cards-holder">
          <CircleCard
            image={compile}
            alt="Compile & Deploy"
            title="Compile & Deploy"
            desc="Ethcode makes smart contracts compilation and deployment much more convenient"
          />
          <CircleCard
            image={debug}
            alt="Debug"
            title="Debug"
            desc="Ethcode makes smart contracts compilation and deployment much more convenient"
          />
          <CircleCard
            image={unitTest}
            alt="Unit Tests"
            title="Unit Tests"
            desc="Ethcode makes smart contracts compilation and deployment much more convenient"
          />
        </div>
        <div id="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
