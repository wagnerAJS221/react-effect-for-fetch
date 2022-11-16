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
      <div className="scroll-container">
        <section>
          <div class="scroll-container">
            <ul class="art-list">
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg" />
                </div>
                <h3>Beggar with Oysters (Philosopher)</h3>
                <p>Artist: Édouard Manet</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  <li>Century of Progress</li>
                  <li>men</li>
                  <li>portraits</li>
                  <li>world's fairs</li>
                  <li>Chicago World's Fairs</li>
                </ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/0330a6dd-774e-eff1-0073-2be5f85b81d0/full/843,/0/default.jpg" />
                </div>
                <h3>Haunted House</h3>
                <p>Artist: Morris Kantor</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  <li>architecture</li>
                  <li>Century of Progress</li>
                  <li>world's fairs</li>
                  <li>Chicago World's Fairs</li>
                </ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/cb178a5a-6c55-c423-a186-d3d467a72f2f/full/843,/0/default.jpg" />
                </div>
                <h3>The Dance</h3>
                <p>Artist: Pietro Longhi</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  <li>Century of Progress</li>
                  <li>world's fairs</li>
                  <li>Chicago World's Fairs</li>
                </ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/132b782d-54e6-70e1-18f9-211468c09099/full/843,/0/default.jpg" />
                </div>
                <h3>Woman Mending</h3>
                <p>Artist: Camille Pissarro</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  <li>portraits</li>
                  <li>work</li>
                  <li>women</li>
                  <li>everyday life (genre)</li>
                </ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/0f1cc0e0-e42e-be16-3f71-2022da38cb93/full/843,/0/default.jpg" />
                </div>
                <h3>Arrival of the Normandy Train, Gare Saint-Lazare</h3>
                <p>Artist: Claude Monet</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  <li>landscapes</li>
                  <li>urban life</li>
                  <li>transportation</li>
                  <li>Century of Progress</li>
                  <li>world's fairs</li>
                  <li>Chicago World's Fairs</li>
                </ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/8b687509-2df3-6b1e-5487-f437fa02a1b5/full/843,/0/default.jpg" />
                </div>
                <h3>Foliate Bowl with Stylized Peony Spray</h3>
                <p>Artist:</p>
                <h4>Artistic Subjects:</h4>
                <ul></ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/d388928f-3222-b48c-1cbb-7afa917de928/full/843,/0/default.jpg" />
                </div>
                <h3>Thanksgiving</h3>
                <p>Artist: Doris Lee</p>
                <h4>Artistic Subjects:</h4>
                <ul></ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/702580d8-451e-0b0c-bcc1-bac62e5f6631/full/843,/0/default.jpg" />
                </div>
                <h3>Blue and Green Music</h3>
                <p>Artist: Georgia O'Keeffe</p>
                <h4>Artistic Subjects:</h4>
                <ul></ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/38636be8-f1bc-c451-ae65-c441919bd0c3/full/843,/0/default.jpg" />
                </div>
                <h3>Bullfight</h3>
                <p>Artist: Édouard Manet</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  <li>leisure</li>
                  <li>circles</li>
                  <li>work</li>
                  <li>men</li>
                </ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/2d0d8332-670a-8b47-ce10-9501830ec778/full/843,/0/default.jpg" />
                </div>
                <h3>Casket</h3>
                <p>Artist:</p>
                <h4>Artistic Subjects:</h4>
                <ul></ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/c36398f0-0033-74d1-5787-d033ef8cf990/full/843,/0/default.jpg" />
                </div>
                <h3>Man Holding a Sheep, Flutist, and Heads</h3>
                <p>Artist: Pablo Picasso</p>
                <h4>Artistic Subjects:</h4>
                <ul></ul>
              </li>
              <li>
                <div class="frame">
                  <img src="https://www.artic.edu/iiif/2/bae16d08-d889-318f-dad9-4b2038013953/full/843,/0/default.jpg" />
                </div>
                <h3>Angel with the Red</h3>
                <p>Artist: Martta Taipale</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  <li>angels</li>
                  <li>dresses</li>
                  <li>female figures</li>
                  <li>flowers</li>
                  <li>lilies</li>
                  <li>wings</li>
                  <li>woman</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ArtsSection
