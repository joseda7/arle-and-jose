import './SectionGift.scss'

const SectionGift = () => {
  return (
    <section className='sectionGift'>
        <h2 className='sectionGift__title'> ¿Deseas obsequiarnos algo? </h2>
        <p className='sectionGift__intro'>
          Para nosotros ya es un regalo enorme que consideres acompañarnos en la celebración. Si aún quieres darnos algo, te damos algunas ideas. 
        </p>

        <div className='card'>
          <h3 className='card__title'> 💚 Mensajes honestos </h3>
          <p className='card__description'>
            Envíanos preguntas, dedícanos canciones, aconséjanos... ¡lo que quieras! Más adelante haremos un álbum con estas memorias.
          </p>
          <a target='_blank' className='card__link' href="https://wa.me/+573008704884">  Déjanos tu mensaje </a>
        </div>

        <div className='card'>
          <h3 className='card__title'>🚀 Granito de arena para nuestro viaje a España </h3>
          <p className='card__description'>
            Puedes hacer parte de este sueño aportando lo que desees.
          </p>
          <b>
            Cuenta de Bancolombia a la mano <br />
            03008704884
          </b>
        </div>
      </section>
  )
}

export default SectionGift