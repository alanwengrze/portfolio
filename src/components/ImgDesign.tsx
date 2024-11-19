
interface ImgDesignProps {
  src: string
  alt: string
  className?: string
}

export function ImgDesign({src, alt, className}: ImgDesignProps) {
  return (
    <img src={src} alt={alt} className={`w-full mx-auto object-cover bg-center filter grayscale hover:grayscale-0 focus:grayscale-0 hover:scale-105 duration-500 lg:h-80 ${className}` } loading="lazy"/>
  )
}