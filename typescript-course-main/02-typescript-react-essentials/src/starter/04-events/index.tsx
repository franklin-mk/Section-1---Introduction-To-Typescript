import { useState } from "react";

type Person = {
  name: string,
}

function Component() {
  const [text, setText]=useState('')
  const [email, setEmail]=useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    //const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    console.log(data)
    const text = formData.get('text') as string
    const person: Person = {name: data.text as string}
  }

  return (
    <section>
      <h2>Events Example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input 
          type="text" 
          className="form-input mb-1" 
          value={text} 
          onChange={(e)=>{setText(e.target.value)}} 
        />

        <input 
          type="email" 
          className="form-input mb-1" 
          value={email} 
          onChange={handleChange}
          /* onChange={(e)=>{setEmail(e.target.value)}} */ 
        />

          <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </section>
  );
}
export default Component;
