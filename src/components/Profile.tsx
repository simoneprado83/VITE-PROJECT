import foto from "../assets/foto.png"

function Profile() {
  return (
    <>
      <a href="#">
        <img 
          src={foto} 
          alt="Simone Prado"
        />
      </a>
      <h3>Simone Veiga Ribeiro Prado</h3>
      <p>Desenvolvedora Front-end</p>
    </>
  )
}

export default Profile