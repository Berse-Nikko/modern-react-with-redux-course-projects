import { data } from "../assets/data/data"

const PersonalAssistanceCard = () => {
  const values = data
  return (
    <>
      <h1>Personal Digital Assistance</h1>
      <div className="container">
        <div className="card-container">
          {values.map((value, index) => {
            const { name, twitter, quote, image } = value
            return (
              <div className="card" key={index}>
                <div className="img-container">
                  <img src={image} alt={name} />
                </div>
                <div className="text-container">
                  <h1>{name}</h1>
                  <h5>{twitter}</h5>
                  <p>{quote}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default PersonalAssistanceCard
