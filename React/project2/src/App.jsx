
import './App.css'
import Card from './components/Card'
import { Code1 } from './components/Code1'
import HeroSection from './components/HeroSection'
import MyNavbar from './components/Navbar'

// let value = ["Aditya", "Amar", "Sonu"];


let users = [
  {
    name: "Aditya",
    course: "Frontend",
    image: "https://images.unsplash.com/photo-1749627995669-4d4dda3a9c1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ad."
  },
  {
    name: "Sonu",
    course: "JavaFullStack",
    image: "https://images.unsplash.com/photo-1763063462165-94125cccf210?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ad."
  },
  {
    name: "Amar",
    course: "mernStack",
    image: "https://plus.unsplash.com/premium_photo-1720660750856-8f7dc0643a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ad."
  },

]

function App() {


  return (
    <>

      {/* <h2>{names}</h2> */}

      {/* <div>

        {users.map((x) => (
          <h2>{x.name} :  {x.course} : {x.desc}</h2>

        ))} */}
      <div>

        {users.map((user, index) => (
          <Card key={index} name={user.name} course={user.course} image={user.image} desc={user.desc}></Card>

        ))}
        {/* <Card /> */}
      </div>
      {/* <MyNavbar logo="Ganesh Dutt" /> */}
      {/* <MyNavbar logo="Logo Name" /> */}
      {/* <MyNavbar logo="GYM" /> */}
      {/*  <HeroSection /> */}
      {/* <Code1 /> */}
      {/* <Card heading="Card1" CATEGORY="CATEGORY1" />
      <Card heading="Card2" CATEGORY="CATEGORY2" />
      <Card heading="Card3" CATEGORY="CATEGORY3" />
      <Card heading="Card4" CATEGORY="CATEGORY4" />
      <Card heading="Card5" CATEGORY="CATEGORY5" /> */}






    </>
  )
}

export default App
