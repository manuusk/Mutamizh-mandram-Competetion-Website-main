import { BsTrophy } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="h-screen w-screen ivb  " id="home">
      <div className="container mx-auto flex flex-col text-white justify-center gap-8 h-full w-full p-1">
        <p className="text-center text-lg md:text-4xl font-semibold">
          பண்ணாரி அம்மன் தொழில்நுட்பக் கல்லூரியின்
        </p>
        <p className="text-center text-lg md:text-4xl font-semibold">
          முத்தமிழ் மன்றம்
        </p>
        <p className="text-center text-md md:text-4xl font-semibold">
        வழங்கும்
        </p>
        <h1 className="font-extrabold text-4xl md:text-6xl  text-white text-center">
        அமுத சுரபி - 2024
        </h1>
        <p
          className="text-center font-low text-lg md:text-l"
          data-aos-duration="800"
        >
          &quot;செந்தமிழ் என்பார்,
தேன்தமிழ் என்பார்,  <br></br>
சிலர் தன் தமிழும் என்பாரே <br></br>
செம்மை அதன் பால் தாய்மை குணத்தால்  <br></br>
போற்றுது பார் இப்பாரே &quot;
        </p>
        <div className="container-box p-8  shadow-md rounded-md">
  <div className="flex items-center justify-center gap-9 mt-8 mb-6">
    <BsTrophy size={30} />
    <p className="text-lg font-semibold">Prize Details</p>
  </div>
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    <div className="flex items-center justify-center gap-5">
      <p className="text-2xl font-semibold">முதலாம் பரிசு :</p>
      <p className="text-2xl">₹ 25,000/-</p>
    </div>
    <div className="flex items-center justify-center gap-5">
      <p className="text-2xl font-semibold">இரண்டாம் பரிசு :</p>
      <p className="text-2xl">₹ 15,000/-</p>
    </div>
    <div className="flex items-center justify-center gap-5">
      <p className="text-2xl font-semibold">மூன்றாம் பரிசு :</p>
      <p className="text-2xl">₹ 10,000/-</p>
    </div>
  </div>

</div>
      </div>
    </section>
  );
}
