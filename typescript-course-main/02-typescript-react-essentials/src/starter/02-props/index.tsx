import { type PropsWithChildren } from "react";

type ComponentProps = PropsWithChildren <{
  name:string, 
  id:number,
}>
/* type ComponentProps = {
  name:string, 
  id:number,
  children?: React.ReactNode
} */


function Component({ name, id, children }: ComponentProps ) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      {children}
      <h2> Person: {name}</h2>
      <h2>Name: {id}</h2>
    </div>
  );
}
export default Component;
