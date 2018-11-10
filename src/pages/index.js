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
          <p>Välkommen till den här sajten som fokuserar på stress och utmattning. Jag har skapat denna sajt då jag har gjort en resa i ämnet och ville ha ett ställe att samla all information jag samlat på mig via podcasts, böcker, andra sajter, osv - så jag inte glömmer bort den. För det är ju en del av kruxet med det här tillståndet - man har inte världens bästa minne.</p>
        </div>
      </div>
    </div>

    <div class="bg-color2">
      <div class="wrapper">
        <div class="col-9">
          <h2>Mer om varför</h2>
          <p>Förutom att jag vill ha ett ställe att samla all information jag hittar i ämnet så har jag skapat denna sajt då jag hoppas att det kanske kan hjälpa någon annan som är i en liknande situation. Jag känner ett antal personer som också har/haft problem med långvarig stress och jag har uppmärksammat en intressant tendens. De utbildar om sig. Till stresscoacher, terapeuter, osv. De är som att de tar det som har hänt dem och vill använda det till att hjälpa andra. Den här sajten är mitt sätt att ge tillbaka. Att kanske hjälpa någon där ute att hitta ett sätt att hantera sin stress.</p>
          <p>Ett annat skäl till den här sajten är att jag hittat ett hål i internet. I början av min sjukskrivning så googlade jag på utmattningssyndrom och stress och ja, det finns massor med träffar i ämnet. Jag försökte samla allt jag hittade från olika artiklar och informationssidor i en mindmap för jag upptäckte att olika sidor tog upp olika saker och jag ville få en så heltäckande bild som möjligt. Den växte och blev övermäktig (bilden nedan visar bara en bit av mindmapen) och jag kände att jag i slutändan ändå saknade den där djupgående informationen kring vad stress är, varför man blir stressad, vad man ska göra åt det osv. Så med den här sidan tänkte jag bit för bit försöka täcka så mycket jag kan och orkar.</p>
          <img src={mindmap} class="mindmap" alt="Utmattningssyndrom mindmap" />
          <p>Förutom stress och utmattning så kommer den här sajten även att komma i kontakt med närliggande områden som oro och ångest.</p>
        </div>
      </div>
    </div>

    <div class="bg-color3">
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
