import { useEffect, useState } from 'react';
import zuricert from "../assets/img/zuricerts-img.png"
import verdaccert from "../assets/img/verdaccert.png"

const Imagefade = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        zuricert,
        verdaccert,
    ]

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
          console.log(currentImage);
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval);
    }, [images.length, currentImage]);


  return (
    <div className='relative w-full h-[200px] sm:h-[300px] md:h-[500px] overflow-hidden'>
        {images.map((image, index) => (
            <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            //className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
            className={`absolute inset-0 w-full object-cover transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
    </div>
  )
}

export default Imagefade;