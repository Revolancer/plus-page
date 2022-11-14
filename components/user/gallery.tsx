import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { Image } from '@chakra-ui/react'

import styles from '../../styles/gallery.module.css'
import { updateImageUrl } from '../helpers'

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
        const imageUrl = updateImageUrl(image)
        return (
          <>
          <a href={imageUrl} data-src={imageUrl} aria-label='Expand Image'>
            <Image src={imageUrl}
              alt=""
              style={{ objectFit: 'cover' }}
              data-src={imageUrl}
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
