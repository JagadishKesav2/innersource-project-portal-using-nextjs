import Head from "next/head";
import Header from "../components/header";
import Select from "../components/select";
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Context } from "../store/store";

const Index = () => {

  const { state, dispatch } = useContext(Context);

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
      dispatch({ type: 'SET_RECORDS_COUNT', payload: res.data.length })
    });
  }, [])
  console.log(state.recordsCount);
      
  return (
    <>
      <Head>
        <title>Next.js 100</title>
      </Head>
      <Header projectCount={state.recordsCount}/>
      <Select lang={languages} />
      <div>Next.js 100</div>
    </>
  );
};

export default Index;
