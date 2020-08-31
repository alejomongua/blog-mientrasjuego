import React from 'react'

import Layout from '../components/Layout'
import logoGrande from '../../static/logoGrande.png'

export default function Home({ data }) {
  return <Layout>
    <div className='text-green'>
      <h1 className='text-4xl font-bold'>Mientras juego</h1>
      <div className='font-semibold italic'>
        Videojuegos, reseñas y más
      </div>
    </div>
    <div>
      <div className='mt-4'>
        <h2 className='text-green text-2xl font-bold'>Acerca de mi</h2>
        <p>
          Mi nombre es Matías, soy un niño que le gusta jugar videojuegos. En este blog les voy a contar todo lo que se acerca de los videojuegos y lo que se me vaya ocurriendo. Gracias por leerme
        </p>
      </div>
      <img
        src={logoGrande}
        alt='Logo grande Mientras Juego'
        className='float-left md:max-w-xs sm:w-full mr-8'
      />
      <div className='mt-4'>
        <h2 className='text-green text-2xl font-bold'>Acerca de este sitio</h2>
        <p>
          Mi papá me hizo este sitio usando el siguiente stack:
        </p>
        <ul className='list-disc ml-8'>
          <li>
            <a
              href='https://www.gatsbyjs.com/'
              className='text-blue-400 underline visited:text-gray-900 visited:no-underline'
              target='_blank'
              rel='nofollow noreferrer'
            >
              Gatsby para SSG
            </a>
          </li>
          <li>
            <a
              href='https://tailwindcss.com'
              className='text-blue-400 underline visited:text-gray-900 visited:no-underline'
              target='_blank'
              rel='nofollow noreferrer'
            >
              Tailwindcss para los estilos
            </a>
          </li>
          <li>
            <a
              href='https://www.netlify.com/'
              className='text-blue-400 underline visited:text-gray-900 visited:no-underline'
              target='_blank'
              rel='nofollow noreferrer'
            >
              Netlify para el alojamiento
            </a>
          </li>
        </ul>
      </div>
    </div>
</Layout>
}
