import React from "react";
import Layout from "../app/layout";
import HeroSection from "@/components/HeroSection";
import InformationBlock from "@/components/InformationBlock";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection
        title="Boas vindas a Lacrei Saúde"
        description="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
      />
    </Layout>
  );
};

export default HomePage;
