'use client'

export function MinecraftBackground() {
  return (
    <div 
      className="fixed inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] -z-10 bg-black overflow-hidden pointer-events-none"
      style={{
        background: "url('https://i.servimg.com/u/f48/18/06/99/75/fr-min10.jpg') repeat-x center center",
        backgroundSize: "cover",
        opacity: 0.8,
        animation: "background-image-animation 165s linear infinite",
      }}
    />
  )
}
