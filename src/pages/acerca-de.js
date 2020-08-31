import React from 'react'

import Layout from '../components/Layout'

export default function Home({ data }) {
  return <Layout>
    <div className='text-green'>
      <h1 className='text-4xl font-bold'>Mientras juego</h1>
      <div className='font-semibold italic'>
        Videojuegos, reseñas y más
      </div>
    </div>
    <div className='mt-4'>
      <h2 className='text-green text-2xl font-bold'>Acerca de mi</h2>
      <p>
        Mi nombre es Matías, soy un niño que le gusta jugar videojuegos. En este blog les voy a contar todo lo que se acerca de los videojuegos y lo que se me vaya ocurriendo. Gracias por leerme
      </p>
    </div>
    <div className='mt-4'>
      <h2 className='text-green text-2xl font-bold'>Acerca de este sitio</h2>
      <p>
        Mi papá me hizo este sitio usando el siguiente stack:
      </p>
      <ul className='list-disc ml-8'>
        <li>
          Gatsby para SSG
        </li>
        <li>
          Tailwindcss para los estilos
        </li>
        <li>
          Netlify para el alojamiento
        </li>
      </ul>
    </div>
</Layout>
}
