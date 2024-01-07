import React from "react";
import Layout from "../app/layout";
import HeroSection from "@/components/HeroSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection
        title="Boas vindas a Lacrei Saúde"
        description="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        imageSrc="./assets/rafiki-index.svg"
      />
    </Layout>
  );
};

export default HomePage;
