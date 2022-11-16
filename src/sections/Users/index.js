import { useEffect, useState } from 'react'

function UsersSection() {
  const [user, setUser] = useState([])

  const url = 'https://randomuser.me/api/?results=10'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((userData) => console.log(userData))
  })
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <section>
          <div class="scroll-container">
            <ul class="users-list">
              <li class="bg-blue">
                <img
                  src="https://randomuser.me/api/portraits/med/men/76.jpg"
                  alt="Ritthy Ryan"
                />
                <h3>Mr Ritthy Ryan</h3>
                <p>Email: ritthy.ryan@example.com</p>
              </li>
              <li class="bg-pink">
                <img
                  src="https://randomuser.me/api/portraits/med/women/53.jpg"
                  alt="Chloe Lopez"
                />
                <h3>Ms Chloe Lopez</h3>
                <p>Email: chloe.lopez@example.com</p>
              </li>
              <li class="bg-pink">
                <img
                  src="https://randomuser.me/api/portraits/med/women/47.jpg"
                  alt="Aukje Van Giessen"
                />
                <h3>Miss Aukje Van Giessen</h3>
                <p>Email: aukje.vangiessen@example.com</p>
              </li>
              <li class="bg-pink">
                <img
                  src="https://randomuser.me/api/portraits/med/women/60.jpg"
                  alt="Esther Daniels"
                />
                <h3>Miss Esther Daniels</h3>
                <p>Email: esther.daniels@example.com</p>
              </li>
              <li class="bg-blue">
                <img
                  src="https://randomuser.me/api/portraits/med/men/23.jpg"
                  alt="Andy Hall"
                />
                <h3>Mr Andy Hall</h3>
                <p>Email: andy.hall@example.com</p>
              </li>
              <li class="bg-blue">
                <img
                  src="https://randomuser.me/api/portraits/med/men/6.jpg"
                  alt="Linus Allum"
                />
                <h3>Mr Linus Allum</h3>
                <p>Email: linus.allum@example.com</p>
              </li>
              <li class="bg-blue">
                <img
                  src="https://randomuser.me/api/portraits/med/men/74.jpg"
                  alt="Dan Meyer"
                />
                <h3>Mr Dan Meyer</h3>
                <p>Email: dan.meyer@example.com</p>
              </li>
              <li class="bg-blue">
                <img
                  src="https://randomuser.me/api/portraits/med/men/45.jpg"
                  alt="Ricardo Stone"
                />
                <h3>Mr Ricardo Stone</h3>
                <p>Email: ricardo.stone@example.com</p>
              </li>
              <li class="bg-blue">
                <img
                  src="https://randomuser.me/api/portraits/med/men/78.jpg"
                  alt="Murat Ekşioğlu"
                />
                <h3>Mr Murat Ekşioğlu</h3>
                <p>Email: murat.eksioglu@example.com</p>
              </li>
              <li class="bg-blue">
                <img
                  src="https://randomuser.me/api/portraits/med/men/71.jpg"
                  alt="Lewis Bowman"
                />
                <h3>Mr Lewis Bowman</h3>
                <p>Email: lewis.bowman@example.com</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  )
}

export default UsersSection
