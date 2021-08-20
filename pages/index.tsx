import Head from "next/head";
import Header from "../components/header";
import Select from "../components/select";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Index = () => {

  const [recordCount, setRecordCount] = useState(0)
  const [languages, setLanguages] = useState(["All"])
  const fetchData = async () => {
    return await axios.get('./project-portal.json');
  };

  useEffect(() => {
    console.log("hiu");
    fetchData().then((res) => {
      res.data.map((lang: any) => {
        if (lang.languages) languages.push(lang.languages)
      })
      setLanguages(Array.from(new Set(languages)));
      setRecordCount(res.data.length)
    });
  }, [])
  return (
    <>
      <Head>
        <title>Next.js 100</title>
      </Head>
      <Header projectCount={recordCount}/>
      <Select lang={languages}/>
      <div>Next.js 100</div>
    </>
  );
};

export default Index;
