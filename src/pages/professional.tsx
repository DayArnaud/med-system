import React from "react";
import Layout from "@/app/layout";
import HeroSection from "@/components/HeroSection";

const professional = () => {
  return (
    <Layout>
      <HeroSection
        title="Profissional"
        description="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
        imageSrc="./assets/rafiki-prof.svg"
      />
    </Layout>
  );
};

export default professional;
