/* eslint-disable react/no-unknown-property */

import splashscreen from "../assets/img/easypilot/splashscreen.png";
import settingup from "../assets/img/easypilot/setting-up.png";
import dashboardftu from "../assets/img/easypilot/dashboard-first-time-user.png";
import vehicleauth from "../assets/img/easypilot/vehicle-auth.png";
import regvehicle from "../assets/img/easypilot/reg-vehicle.png";
import vehicledashboard from "../assets/img/easypilot/vehicle-dashboard.png";
import dohw from "../assets/img/easypilot/dohw.png";
import test from "../assets/img/easypilot/test.png";
import ratedriver from "../assets/img/easypilot/rate-driver.png";
import ftu from "../assets/img/easypilot/ftu.png";

const images = [
  { id: 1, src: splashscreen, alt: "splashscreen" },
  { id: 2, src: settingup, alt: "setting-up" },
  { id: 3, src: dashboardftu, alt: "dashboardftu" },
  { id: 4, src: vehicleauth, alt: "vehicleauth" },
  { id: 5, src: regvehicle, alt: "reg-vehicle" },
  { id: 6, src: vehicledashboard, alt: "vehicle-dashboard" },
  { id: 7, src: dohw, alt: "dohw" },
  { id: 8, src: test, alt: "test" },
  { id: 9, src: ratedriver, alt: "rate-driver" },
  { id: 10, src: ftu, alt: "ftu" },
];

const FeedYourEyes = () => {
  // Duplicate the images array for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <section className="max-w-[1300px] w-full mx-auto pt-[50px] px-5 font-dmsans">
      <div className="text-[40px] sm:text-[70px] pb-5">
        <h1 className="pb-1 sm:pb-5">Feed Your Eyes</h1>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex space-x-5 gap-4 lg:gap-x-4 animate-scroll"
          style={{
            animation: "scroll 40s linear infinite",
            width: `calc(${images.length * 100}% + ${images.length * 16}px)`,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="w-full max-w-[400px] flex-shrink-0 overflow-hidden "
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <style jsx="true">
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default FeedYourEyes;
