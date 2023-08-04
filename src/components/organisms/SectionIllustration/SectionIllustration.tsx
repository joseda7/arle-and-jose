import srcArleAndJose from './../../../assets/arle-and-jose.webp'
import './SectionIllustration.scss'

const SectionIllustration = () => {
  return (
    <section className='sectionIllustration'>
        <div className='sectionIllustration__gradient'></div>
        <img className='sectionIllustration__img' src={ srcArleAndJose } alt={"Ilustración Arle&Jose"} />
    </section>
  )
}

export default SectionIllustration