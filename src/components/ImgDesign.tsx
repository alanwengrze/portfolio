
interface ImgDesignProps {
  src: string
  alt: string
  className?: string
}

export function ImgDesign({src, alt, className}: ImgDesignProps) {
  return (
    <img src={src} alt={alt} className={`w-full xl:h-80 mx-auto object-cover filter grayscale hover:grayscale-0 focus:grayscale-0 hover:scale-105 duration-500 ${className}` } loading="lazy"/>
  )
}