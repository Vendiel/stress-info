import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import mindmap from "../images/mindmap.png"

const IndexPage = () => (
  <Layout>
    <div class="bg-first-section">
      <div class="wrapper">
        <div class="introduction">
          <h1>Stress och utmattning</h1>
          <p>Välkommen till den här sajten som fokuserar på stress och utmattning. Skälet till att denna sajt skapades var för att ha ett ställe att samla all information jag samlat på mig via podcasts, böcker, andra sajter, osv. Ett ställe att gå tillbaka till när man behöver friska upp minnet.</p>
        </div>
      </div>
    </div>

    <div class="bg-color2">
      <div class="wrapper">
        <div class="col-9">
          <h2>Mer om varför</h2>
          <p>Förutom att jag vill ha ett ställe att samla all information jag hittar så hoppas jag att det kanske kan hjälpa någon annan som hamnat i en liknande situation. För precis som en del andra jag känner som har/haft problem med långvarig stress så vill jag hjälpa - enda skillnaden är att medan de utbildar sig till stresscoacher, terapeuter etc så skapar jag en sajt.</p>
          <p>Ett annat skäl till den här sajten är att jag hittat ett hål i internet. I början av min sjukskrivning så googlade jag på utmattningssyndrom och stress och hittade massa artiklar, bloggar, osv i ämnet men hittade ingen sida som gav mig en fullständig bild. Från början försökte jag skapa den bilden med hjälp av en mindmap (bilden nedan visar en bit av den) men den bara växte och i slutändan saknade jag ändå den djupgående informationen. Så med den här sidan tänkte jag bit för bit försöka täcka så mycket jag kan och orkar.</p>
          <img src={mindmap} class="mindmap" alt="Utmattningssyndrom mindmap" />
          <p>Förutom stress och utmattning så kommer den här sajten även att komma i kontakt med närliggande områden som oro och ångest. Jag anar också att det kommer bli en hel del information också om hur vi fungerar som människor, då jag gillar beteenden.</p>
        </div>
      </div>
    </div>

    <div class="bg-color2">
      <div class="wrapper">
        <div class="col-9">
          <h2>Senaste uppdaterad</h2>
          <ul class="last-updated">
            <li>
              <p class="date">2018-11-07</p>
              <p class="description">Ett första version av sajten är framtagen. Tanken är att det ska skapas fler sidor och läggas in mer information allt eftersom.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
