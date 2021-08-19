import Head from "next/head";
import Header from "../components/header";
import Select from "../components/select";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Index = () => {

  const [recordCount, setRecordCount] = useState(0)
  const fetchData = async () => {
    return await axios.get('./project-portal.json');
  };

  useEffect(() => {
    console.log("hiu");
    fetchData().then((res) => {
      let languages: string[] = ["All"];

      res.data.map((lang: any) => {
        if (lang.languages) languages.push(lang.languages)
      })
      languages = Array.from(new Set(languages));
      setRecordCount(res.data.length)
    });
  }, [])
  return (
    <>
      <Head>
        <title>Next.js 100</title>
      </Head>
      <Header projectCount={recordCount}/>
      <Select />
      <div>Next.js 100</div>
    </>
  );
};

export default Index;
