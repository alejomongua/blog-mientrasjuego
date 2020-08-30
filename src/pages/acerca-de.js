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
      <h2 className='italic font-lg'>Acerca  de mi</h2>
      <p>
        Soy un niño al que le gusta jugar Videojuegos
      </p>
    </div>
</Layout>
}
