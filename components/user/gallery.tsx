import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { Image } from '@chakra-ui/react'

import styles from '../../styles/gallery.module.css'

function onInit (): void {
  console.log('hello lightbox')
}

export default function PortfolioGallery ({ images }: { images: string[] }): JSX.Element {
  return (
    <>
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail]}
      elementClassNames={styles.galleryContainer}
    >
      {images.map((image, i) => {
        if (i >= 9) { return <></> }
        return (
            <a key={'portfolio_' + (i as unknown as string)} href={image} data-src={image} >
              <Image src={image}
                key={'portfolio_image_inner_' + (i as unknown as string)}
                alt=""
                style={{ objectFit: 'cover' }}
                data-src={image}
                borderRadius="16" overflow="hidden"
                data-aspect-ratio='1/1' />
            </a>
        )
      })}
    </LightGallery>
    </>
  )
}
