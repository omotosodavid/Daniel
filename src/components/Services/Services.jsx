import HireMe from "./HireMe"
import ServicesIllustration from "./ServicesIllustration"

const Services = () => {
  return (
    <section>
        <div>
            <h2>My Quality Services</h2>
            <p>I deliver creative, high-quality design solutions that exceed expectations and drive results</p>
        </div>
        <section>
            <ServicesIllustration/>
            <HireMe/>
        </section>
    </section>
  )
}

export default Services