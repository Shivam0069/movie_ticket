import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

export default function DetailPage() {
    const containerStyle = {
        backgroundImage:"url(https://spotlightonline.co/wp-content/uploads/2017/03/cinema_projector.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '480px', 
      };
  const { id } = useParams();
  return <div className="">
    <Header />
    <div style={containerStyle} className="mt-10 w-screen">
        <div>
            
        </div>
    </div>
  </div>;
}
