import { useState } from 'react'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())
  return (
    <footer className="bg-blue-500 p-2 text-white p">
      <p>{year} Hi, hotel app</p>
    </footer>
  )
}

export default Footer
