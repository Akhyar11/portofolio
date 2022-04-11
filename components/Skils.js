import CardSkils from "./CardSkils"

function Skils() {
  return (
    <div className="text-center flex flex-wrap max-w-full md:px-32 md:py-24 p-8" id="skils">
      <h1 className="text-2xl w-full block text-pink-500 md:-mt-10 tracking-wider mb-10">Skils</h1>
      <div className="w-full h-[1px] bg-pink-500 md:-mt-10 -mt-8"/>
      <CardSkils 
        classNameAdd="md:-ml-6" 
        level="Lanjutan" 
        title="Node js"
        srcAdd="/nodejs.svg"
      />
      <CardSkils 
        classNameAdd="md:mx-6" 
        level="Lanjutan" 
        title="Tailwind css"
        srcAdd="/tailwind.svg"  
      />
      <CardSkils 
        classNameAdd="md:-mr-6" 
        level="Lanjutan" 
        title="React and Next js"
        srcAdd="/react.svg"
      />
    </div>
  )
}

export default Skils