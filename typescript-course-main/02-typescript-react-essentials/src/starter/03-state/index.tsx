import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string
}

const navLinks: Link[] = [
  {
    id: 1,
    url: 'https://youtu.be/JHEB7RhJG1Y',
    text: 'YouTube'
  },
  {
    id: 2,
    url: 'https://www.instagram.com/',
    text: 'Instagram'
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/',
    text: 'LinkedIn'
  }
]

function Component() {
  const [text, setText] = useState("Miracle Baby!")
  const [number, setNumber] = useState(33)
  const [list, setList] = useState<string[]>([])
  const [links, setlinks] = useState<Link[]>(navLinks)

  return (
    <div>
      <h2 className="mb-1">React & Typescript-State</h2>
      <button 
        onClick={()=>{
          setText("New Miracle Baby!")
          setNumber(number + 1)
          setList([...list, "New Item", "New Book"])
          setlinks([...links, {id: 4, url: 'https://www.github.com/', text: 'GitHub'}])
        }}
        className="btn btn-center">
        Click Here!
      </button>
    </div>
  );
}
export default Component;
