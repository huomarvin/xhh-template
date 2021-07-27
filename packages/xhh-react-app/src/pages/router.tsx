import React from "react";
import loadable from "@loadable/component";
import Page1 from "./Page1";

interface RouterProps {
  path: string;
  children: React.ReactNode;
  desc?: string;
}

// const Page1 = loadable(() => import(/* webpackChunkName: 'Page1' */ "./Page1"));
const Page2 = loadable(() => import(/* webpackChunkName: 'Page2' */ "./Page2"));

const Routers: RouterProps[] = [
  { path: "/page1", children: <Page1 />, desc: "Page1" },
  { path: "/page2", children: <Page2 />, desc: "Page2" },
  // { path: "/lazy-page1", children: <LazyPage1 />, desc: "Lazy Page1" },
];

export default Routers;
