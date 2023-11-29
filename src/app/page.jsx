"use client";
import React from "react";
import Divider from "../components/Divider.jsx"
import Header from "../components/Header.jsx";
import Bluebox from "../components/Bluebox.jsx";
import Mirror from "../components/Mirror.jsx";
import Counter from "../components/Counter.jsx";
import Race from "../components/Race.jsx";

export default function Home() {
  return (
    <main>
      <Header value="Day 10" />
      <Divider />
      <Header value="Toggle the Box" />
      <Bluebox />
      <Divider />
      <Header value="Mirror" />
      <Mirror />
      <Divider />
      <Header value="Counter" />
      <Counter />
      <Divider />
      <Header value="Race" />
      <Race />
    </main>
  );
}
