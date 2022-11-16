import { useEffect, useState } from 'react'

function ArtsSection() {
  const [art, setArt] = useState([])

  const url = 'https://api.artic.edu/api/v1/artworks/'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((artData) => console.log(artData))
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container"></div>
    </section>
  )
}

export default ArtsSection
