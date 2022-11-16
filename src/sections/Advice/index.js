import { useEffect, useState } from 'react'

function AdviceSection() {
  const [advice, setAdvice] = useState([])

  const url = '	https://api.adviceslip.com/advice'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((userData) => console.log(userData))
  })
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <section>
          <h2>Advice Section</h2>
          <section class="adivce-slip">
            <h3>Some Advice</h3>
            <p>Always the burrito.</p>
            <button>Get More Advice</button>
            <button>Save to Favourties</button>
          </section>
        </section>
        <section className="favourtite-slips-list">
          <section class="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
              <li>Measure twice, cut once.</li>
              <li>Don't let the bastards grind you down.</li>
              <li>Always the burrito.</li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  )
}

export default AdviceSection
