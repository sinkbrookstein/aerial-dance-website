import '../styles/AboutPage.css';
import aboutImage from '../assets/meg-sling-popup.jpg';
import cocoImage from '../assets/coco-promo.jpg';
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-us">
        <img src={aboutImage} alt="About Us" className="about-image" />
        <div className="about-content">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4 text-gray-700">
            Highly Classified LLC is the beloved brainchild of Coco Day and was founded in 2023. Her mission: create
            aerial artistry that is accessible within our diverse community. Highly Classified is Denver's
            only equitable aerial troup. In each show we celebrate aerialists of any background and
            require each cast member to audition every time.
          </p>
          <p className="mb-4 text-gray-700">
            Coco's unique vision and sense of humor merge to tell one-of-a-kind stories through jaw-dropping performance.
            Our multi-talented cast specialize across disciplines from trapeze to contortion to ballet - all acts
            are welcome. This incredible crew is always up to putting on a hell of a show!
          </p>
        </div>
      </div>
      <div className="about-coco">
        <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
        <img src={cocoImage} alt="Coco Day" className="coco-image" />
        <p className="mb-4 text-gray-700">
          Coco is a full-time circus person, instructing all levels of students at Circus Collective, Gravity Aerial Arts, and Fly Mile High.
          In addition to performing, she is the proud producer, creative director, chief marketing officer, and founder of Highly Classified.
        </p>
        <p className="mb-4 text-gray-700">
          Coco happened upon an aerial yoga class in Phoenix, AZ in 2014, and attended classes religiously. It helped that the aerial school was in an old church! Aerial class was the best part of her week, so she soon took a deep dive into the world of trapeze, hammock, lyra, and silks. She has trained several aerial disciplines but is primarily interested in vertical apparatus. Coco has recently fallen head over heels with rope as it poses new challenges and allows for momentum and dynamic movements. Coco has trained under Holly Dison and Rebekah Leach which ignited her passion for aerial theory.
        </p>
        <p className="mb-4 text-gray-700">
          She moved to Denver in the summer of 2016 to spread her wings and feels extremely lucky to be surrounded by all the aerial opportunities in Colorado. She specializes in curating looks for costuming, teaching private parties and event planning.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
