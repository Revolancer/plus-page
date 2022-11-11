import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { Image } from '@chakra-ui/react'

import styles from '../../styles/gallery.module.css'

const galleryKey = process.env.NEXT_PUBLIC_LIGHTGALLERY_LICENSE

export default function PortfolioGallery ({ images }: { images: string[] }): JSX.Element {
  return (
    <>
    <LightGallery
      speed={500}
      plugins={[lgThumbnail]}
      elementClassNames={styles.galleryContainer}
      licenseKey={galleryKey}
    >
      {images.map((image, i) => {
        if (i >= 9) { return <></> }
        return (
          <>
          <a href={image} data-src={image} aria-label='Expand Image'>
            <Image src={image}
              alt=""
              style={{ objectFit: 'cover' }}
              data-src={image}
              borderRadius="16" overflow="hidden"
              data-aspect-ratio='1/1' />
          </a>
          </>
        )
      })}
    </LightGallery>
    </>
  )
}
