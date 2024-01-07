import Layout from "@/app/layout";
import HeroSection from "@/components/HeroSection";
import React from "react";

const user = () => {
  return (
    <Layout>
      <HeroSection
        title="Profissional"
        description="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
      />
    </Layout>
  );
};

export default user;
