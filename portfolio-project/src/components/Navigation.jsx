import '../App.css'

export default function Navigation () {


  return (
    <>
      <nav className="nav">
        <a href="/" className="title-name">Annelise Scolardi</a>
        <ul className='navList'>
          <li><a href="/">About Me</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resume">Resume</a></li>
        </ul>
      </nav>
    </>
  )
}