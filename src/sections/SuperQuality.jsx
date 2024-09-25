import Button from "../components/Button"
import arrowRight from "../assets/icons/arrow-right.svg"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" 
    className=" flex justify-between items-center max-lg:flex-col
     gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">
      <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg ">We Provide You
      <span className="text-coral-red"> Super</span>
      <span className="text-coral-red"> Quality</span> Shoes</h2>
      <p className="lg:max-w-lg mt-4 info-text"> 
        Ensuring premmium comfort and style, our meticulously crafted footwear is designed to 
        elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
       </p>
       <p className="lg:max-w-lg mt-6 info-text">
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
        <Button label="View details"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe08" width={570} height={522} className="object-contain" />
      </div>
      
      
    </section>
  )
}

export default SuperQuality