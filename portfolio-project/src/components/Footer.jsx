import '../App.css'
// import GithubLogo from '../svg/github.svg'
// import LinkedinLogo from '../svg/linkedin.svg'

export default function Footer () {

  function sendtoGithub () {
    window.location.replace("http://www.github.com/ascolardi")
  }

  return (
    <footer>
      <h4 className='footText'><a onClick={sendtoGithub}>Github</a></h4>
      {/* <section className="logos">
        <img src={GithubLogo} alt="Github Logo"/>
        <img src={LinkedinLogo} alt="linkedin Logo" href="www.linkedin.com/in/annelise-scolardi-1aa8531b5"/>
      </section>

      <section className='links'>
        <h4><a target="_blank" href="https://icons8.com/icon/sbhfmWq4KRr1/github-squared">Github</a> icon by <a target="_blank" href="https://icons8.com">Icons8  |  </a>
        <a target="_blank" href="https://icons8.com/icon/67570/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></h4>
      </section> */}
    </footer>
  )
}