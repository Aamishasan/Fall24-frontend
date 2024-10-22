import imgMain from '../../assets/react-core-concepts.png'
import imgMain2 from '../../assets/components.png'

const reactDes = ['Fundamental', 'Core', 'Crucial']
    function genRandomInt(max){
        return Math.floor(Math.random() * (max+1))
    }
function Header() {
    return (
      <header>
      <img src={imgMain} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
       {reactDes[genRandomInt(2)]}  React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    )
  }

  export default Header