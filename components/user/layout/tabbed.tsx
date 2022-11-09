import { UserProfileProps } from '../profile'
import Header from './tabbed/header'
import { useRef } from 'react'

export default function TabbedLayout ({ user }: UserProfileProps): JSX.Element {
  const sectionRefs = [
    useRef(null),
    useRef(null)
  ]

  return (
    <>
    <Header user={user} sectionRefs={sectionRefs} />
    <section ref={sectionRefs[0]}>
      <a id="about" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices odio tellus, eget rutrum elit aliquam ut. Maecenas vitae rutrum sapien. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In euismod nunc at aliquam mollis. Morbi sit amet sodales nisi, at tincidunt quam. Nunc consectetur auctor eros, eget posuere augue varius id.

Curabitur sapien felis, dictum id aliquet a, eleifend a dolor. Donec vulputate vehicula feugiat. Nam ante mauris, eleifend eget sapien nec, molestie interdum ipsum. Morbi nec lectus augue. Suspendisse potenti. Aenean id scelerisque felis, a pellentesque massa. Vivamus feugiat tellus quis nulla vestibulum, quis rutrum lectus faucibus. Maecenas finibus ex enim. Donec sollicitudin enim ante, aliquet placerat odio sodales id.

In turpis purus, tincidunt sit amet elementum feugiat, tempus sed ante. Duis eget leo vitae arcu consectetur fringilla quis eu erat. Duis facilisis nibh et rutrum mattis. Sed at neque vehicula, dignissim justo sit amet, egestas lectus. Integer euismod ut neque vitae aliquam. Quisque blandit auctor luctus. Nunc sagittis ex et ligula suscipit convallis. Curabitur metus lectus, mollis porttitor mi sed, varius suscipit turpis. In hac habitasse platea dictumst. Cras ornare interdum elit vel hendrerit. Donec scelerisque sem nec sollicitudin suscipit. Suspendisse augue nisl, elementum a dictum vel, faucibus at tellus. Donec aliquam velit tortor, ac maximus orci euismod eu. Curabitur sed libero nunc. Curabitur tempus felis in libero tincidunt lobortis.

In porta nulla mauris, in pretium ante luctus ut. Nunc non elementum felis, vitae ornare quam. Praesent vitae enim ac sem molestie blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed malesuada lacus. Quisque pulvinar felis quis est aliquet, quis dignissim mi interdum. Nam eu odio in justo pellentesque vulputate. Curabitur faucibus eros et orci commodo, vel placerat ex aliquam. Nam consequat congue feugiat. Cras id faucibus purus, nec luctus massa.

Sed ut magna ac lacus dignissim semper. Aenean et tempus risus. Sed cursus ultricies nunc in lacinia. Morbi sed pretium magna. Mauris a vulputate nunc, luctus pretium quam. Quisque tempor est tellus, vel iaculis sapien fringilla et. Maecenas sollicitudin tempus mi, sed viverra erat. Curabitur tempus consectetur dolor ut sollicitudin. Aliquam vestibulum augue sem, quis condimentum lectus pulvinar laoreet. Morbi consequat risus non lorem lobortis ultricies. Morbi facilisis mi nec pulvinar tempus. Mauris viverra dui tristique, fermentum urna id, varius ipsum. Nulla quis ex sodales neque egestas consectetur ultrices ac nunc.
    </section>
    <section ref={sectionRefs[1]}>
      <a id="portfolio" />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices odio tellus, eget rutrum elit aliquam ut. Maecenas vitae rutrum sapien. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In euismod nunc at aliquam mollis. Morbi sit amet sodales nisi, at tincidunt quam. Nunc consectetur auctor eros, eget posuere augue varius id.

Curabitur sapien felis, dictum id aliquet a, eleifend a dolor. Donec vulputate vehicula feugiat. Nam ante mauris, eleifend eget sapien nec, molestie interdum ipsum. Morbi nec lectus augue. Suspendisse potenti. Aenean id scelerisque felis, a pellentesque massa. Vivamus feugiat tellus quis nulla vestibulum, quis rutrum lectus faucibus. Maecenas finibus ex enim. Donec sollicitudin enim ante, aliquet placerat odio sodales id.

In turpis purus, tincidunt sit amet elementum feugiat, tempus sed ante. Duis eget leo vitae arcu consectetur fringilla quis eu erat. Duis facilisis nibh et rutrum mattis. Sed at neque vehicula, dignissim justo sit amet, egestas lectus. Integer euismod ut neque vitae aliquam. Quisque blandit auctor luctus. Nunc sagittis ex et ligula suscipit convallis. Curabitur metus lectus, mollis porttitor mi sed, varius suscipit turpis. In hac habitasse platea dictumst. Cras ornare interdum elit vel hendrerit. Donec scelerisque sem nec sollicitudin suscipit. Suspendisse augue nisl, elementum a dictum vel, faucibus at tellus. Donec aliquam velit tortor, ac maximus orci euismod eu. Curabitur sed libero nunc. Curabitur tempus felis in libero tincidunt lobortis.

In porta nulla mauris, in pretium ante luctus ut. Nunc non elementum felis, vitae ornare quam. Praesent vitae enim ac sem molestie blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed malesuada lacus. Quisque pulvinar felis quis est aliquet, quis dignissim mi interdum. Nam eu odio in justo pellentesque vulputate. Curabitur faucibus eros et orci commodo, vel placerat ex aliquam. Nam consequat congue feugiat. Cras id faucibus purus, nec luctus massa.

Sed ut magna ac lacus dignissim semper. Aenean et tempus risus. Sed cursus ultricies nunc in lacinia. Morbi sed pretium magna. Mauris a vulputate nunc, luctus pretium quam. Quisque tempor est tellus, vel iaculis sapien fringilla et. Maecenas sollicitudin tempus mi, sed viverra erat. Curabitur tempus consectetur dolor ut sollicitudin. Aliquam vestibulum augue sem, quis condimentum lectus pulvinar laoreet. Morbi consequat risus non lorem lobortis ultricies. Morbi facilisis mi nec pulvinar tempus. Mauris viverra dui tristique, fermentum urna id, varius ipsum. Nulla quis ex sodales neque egestas consectetur ultrices ac nunc.
    </section>
    </>
  )
}
