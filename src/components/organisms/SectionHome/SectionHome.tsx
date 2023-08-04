import srcLogo from './../../../assets/logo-arle-and-jose.svg'
import "./SectionHome.scss"

const SectionHome = () => {
  return (
    <section className='sectionHome'>

        <img className='sectionHome__logo' src={ srcLogo } alt="Logo Arle&Jose" />

        <p className='sectionHome__intro'> 
          Acompáñanos a celebrar la unión de nuestros universos entre familia y amigos. 
        </p>

        <div className='separator'></div>
        
        <ul className='sectionHome__details'>
          <li className='sectionHome__details__item'>
            <p> 
              <i>📆</i> <b> Domingo 13 de agosto, </b> 4:00pm 
            </p>
          </li>
          <li className='sectionHome__details__item'>
            <p> 
              <i>⛪</i> <b> Iglesia Santa Gema:</b> Av. 33 #81-40, Laureles 
            </p>
          </li>
          <li className='sectionHome__details__item'>
            <p> 
              <i>🍽️</i> <b> Recepción: Restaurante Mis Montañas:</b> Av. 80 #33A-07, Laureles (al lado de la iglesia)
            </p>
          </li>
          <li className='sectionHome__details__item'>
            <p> 
              <i>💃</i> <b> Vestuario: </b> Usa ropa cómoda 
            </p>
          </li>
        </ul>

        <p className='sectionHome__note'> *Porfa evita arrojar petalos de rosa o arroz al finalizar la eucaristia, ya que puede causar accidentes de niños o adultos mayores 🫶</p>

    </section>
  )
}

export default SectionHome