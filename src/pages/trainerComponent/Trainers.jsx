import React from 'react'

const Trainers = () => {
  let trainersDetails = [
    {
      id: 1,
      trainerName: "Prajwal",
      experience: "3 Years",
      subject: "MERN Stack",
      image: "https://avatars.githubusercontent.com/u/160094074?v=4"
    },
    {
      id: 2,
      trainerName: "Jeevith",
      experience: "3 Years",
      subject: "Java Full Stack",
      image: "https://avatars.githubusercontent.com/u/102320065?v=4"
    },
    {
      id: 3,
      trainerName: "Mohith",
      experience: "3 Years",
      subject: "Python",
      image: "https://avatars.githubusercontent.com/u/160094074?v=4"
    },
    {
      id: 4,
      trainerName: "Balaji",
      experience: "3 Years",
      subject: "Java Full Stack",
      image: "https://avatars.githubusercontent.com/u/102320065?v=4"
    },
    {
      id: 5,
      trainerName: "Likith",
      experience: "3 Years",
      subject: "Testing",
      image: "https://avatars.githubusercontent.com/u/160094074?v=4"
    },
    {
      id: 6,
      trainerName: "Ashish Kumar",
      experience: "3 Years",
      subject: "DevOps",
      image: "https://avatars.githubusercontent.com/u/102320065?v=4"
    },


  ]
  return (
    <section className="tariner-mainContainer">
      <h1>Trainer Details</h1>
      <aside className="trainer-container">
        {
          trainersDetails.map((trainer)=>{
            console.log(trainer);
            return(
              <article className="trainer-card">
                <img src={trainer.image} height={150} width={150} alt="" />
                <h2>{trainer.trainerName}</h2>
                <p>Experience: {trainer.experience}</p>
                <p>Subject :{trainer.subject}</p>
              </article>
            )
          })
        }
      </aside>
    </section>
  )
}

export default Trainers