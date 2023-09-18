import Portrait from '../images/myimage.jpg'
import '../App.css'

export default function About () {

  return (
    <div className="aboutDiv">

      <section className="image">
        <img className="portrait" src={Portrait}/>
      </section>

      <aside>
        <h1 className='aboutTitle'>About Me</h1>
        <p className='aboutText'>Hello! My name is Annelise Scolardi, welcome to my portfolio! I graduated from the University of Minnesota's Full-Stack Web Development bootcamp, and I have completed some college at Arizona State University. I consider myself to be a creative individual and have grown up creating art in all mediums. I am utilizing my aptitude for design in my journey as a front-end developer.</p>
      </aside>

    </div>
  )
}

