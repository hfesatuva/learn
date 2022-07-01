import React from "react";
import Layout from "@theme/Layout";

export default function Internships() {
  const sx = {
    flex: "1 0 auto",
    margin: "2em",
    border: "2px solid black",
  };
  return (
    <Layout sx={{ display: "flex" }}>
      <iframe
        style={sx}
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQMk4-MLojAZShXPMc6sAtJQ_p6H_Nz-r8bF6a8n2Wyk8C_n1BOAy5kMk3FPVWyEkP3GG8ItVeMsNFW/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
      ></iframe>
    </Layout>
  );
}
