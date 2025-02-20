import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

const Backbutton = () => {
   

  return (
    <Link to="/">
        <button className="z-50 text-white bg-[#161616] text-[16px] py-2 px-8 rounded-full mb-10 flex items-center border border-[#f5f5f54e] shadow-lg shadow-[#50dfb448]">    
            <ArrowLeft className="text-white" size={20}/>
            <p className="pl-2">Go Back</p>
        </button>
    </Link>
    
  )
}

export default Backbutton;