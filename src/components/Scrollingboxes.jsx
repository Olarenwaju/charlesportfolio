/* eslint-disable react/no-unknown-property */


const Scrollingboxes = () => {
  return (
    <div className="overflow-hidden w-full">
        <div className="flex animate-marquee space-x-4">

            {/* Original set of boxes */}
            {[...Array(4)].map((_, index) => (
            <div
                key={index}
                className="max-w-[300px] w-[300px] h-[150px] bg-[#101010] pt-5 pb-12 px-5 rounded border-b-[#8338EA] border-b-[3px] flex-shrink-0"
            ></div>
            ))}

            {/* Duplicate the same set of boxes for smooth looping */}

            {[...Array(4)].map((_, index) => (
            <div
                key={`dup-${index}`}
                className="max-w-[300px] w-[300px] h-[150px] bg-[#101010] pt-5 pb-12 px-5 rounded border-b-[#8338EA] border-b-[3px] flex-shrink-0"
            ></div>
            ))}

            {/* Keyframes and animation styling */}
            <style jsx="true">{`
                .animate-marquee {
                animation: marquee 10s linear infinite;
                display: flex;
                }
                @keyframes marquee {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
                }
            `}</style>


        </div>

    </div>
  )
}

export default Scrollingboxes