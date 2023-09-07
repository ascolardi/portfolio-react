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
        <p className='aboutText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eum sapiente illum blanditiis deserunt cupiditate veritatis? Maxime eos illum itaque quis officiis eaque praesentium quidem pariatur earum, explicabo assumenda ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta dolore et voluptatum impedit, sint quidem, vitae cumque officia quod veritatis, pariatur qui unde perspiciatis eos cupiditate voluptates dolor dolorem.</p>
      </aside>

    </div>
  )
}

