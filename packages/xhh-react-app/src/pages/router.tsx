import React from "react";
import loadable, { LoadableComponent } from "@loadable/component";

// interface AsyncPageProps {
//   page: string;
// }

// const AsyncPage = loadable(
//   (props: AsyncPageProps) => import(`./${props.page}`)
// );

type Comp = React.FC | React.Component | LoadableComponent<unknown>;

interface RouterProps {
  path: string;
  children: JSX.Element | Comp;
  desc?: string;
}

const Page1 = loadable(() => import("./Page1"));
const Page2 = loadable(() => import("./Page2"));

const Routers: RouterProps[] = [
  { path: "/page1", children: <Page1 />, desc: "Page1" },
  { path: "/page2", children: <Page2 />, desc: "Page2" },
];

export default Routers;
