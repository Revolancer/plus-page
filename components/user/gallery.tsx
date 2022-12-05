import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import { Image } from '@chakra-ui/react'

import styles from '../../styles/gallery.module.css'
import { getThumb } from '../helpers'
import type { LightGallery as LightGalleryType } from 'lightgallery/lightgallery'

const galleryKey = process.env.NEXT_PUBLIC_LIGHTGALLERY_LICENSE

const galleryInit = ({ instance }: { instance: LightGalleryType }): void => {
  instance.$backdrop.addClass(styles.galleryPopout)
  instance.$toolbar.addClass(styles.galleryToolbar)
  instance.$container.addClass(styles.galleryPopContainer)
}

export default function PortfolioGallery ({ images, max = 9 }: { images: string[], max?: number }): JSX.Element {
  return (
    <>
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames={styles.galleryContainer}
      licenseKey={galleryKey}
      onInit={galleryInit}
    >
      {images.map((image, i) => {
        if (i >= max) { return <></> }
        return (
          <a href={image} data-src={image} aria-label='Expand Image'
              key={image}>
            <Image src={getThumb(image)}
              alt=""
              style={{ objectFit: 'cover' }}
              data-src={image}
              borderRadius="16" overflow="hidden"
              data-aspect-ratio='1/1'
              loading='lazy'/>
          </a>
        )
      })}
    </LightGallery>
    </>
  )
}
