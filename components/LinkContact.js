import Image from 'next/image'

export default function LinkContact({ alt, src, href }) {
  const size = 12 * 16
  return (
    <a href={href} target="_blank" className="w-8 h-8 rounded-full mr-10" rel="noreferrer">
      <Image src={src} alt={alt} className="w-12 h-12" width={`${size}`} height={`${size}`}/>
    </a>
  );
}
