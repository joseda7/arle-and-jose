import srcPhoto from './../../../assets/photo-arle-and-jose.png'
import srcFirm from './../../../assets/logo-arle-and-jose.svg'
import './SectionLetter.scss'

const SectionLetter = () => {
  return (
    <section className='sectionLetter'>
      <img className='sectionLetter__photo' src={ srcPhoto } alt="Fotografía Arle&Jose" />
      <div className='sectionLetter__letter'>
        <p className='sectionLetter__letter__goal'> 
          <b>Día a día buscamos guiarnos mutuamente hacia el cielo.</b>
        </p>
        <div className='separator'></div>
        <br />
        <p>
          Gracias por ser parte de nosotros para siempre. Nos vemos por la vida, esperando que sea pronto.
        </p>
        <br />
        <p>
          Att: 
        </p>
        <img src={ srcFirm } alt="Firma Arle&Jose" />
      </div> 
    </section>
  )
}

export default SectionLetter