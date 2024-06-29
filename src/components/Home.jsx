import React from 'react'
import "./Home.scss"

const Card=({img})=><img className='card' src={img} alt="cover" />;


const Row = ({ title , arr = [{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3Zc8nSze5S8vtzX49maUGoedcdli-2aj-Q&s"
}]}) =>(
    <div className='row'>
        <h2>{title}</h2>
      
        <div>

          {arr.map((item) => (
            <Card  img={item.img}/>
          ))}


      </div>


    </div>
  )



const Home = () => {
  return (
   <section className='home'>
    <div className="banner">banner</div>
    <Row  title={"Popular on Netflix"}/>
    <Row  title={"Movies"}/>
    <Row  title={"Tv Shows"}/>
    <Row  title={"Recently viewed"}/>
    



    
   </section>

  )
}

export default Home
