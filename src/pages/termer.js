import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const VitaminerPage = () => (
  <Layout>
    <div class="bg-first-section">
      <div class="wrapper">
        <div class="introduction">
          <h1>Termer</h1>
          <p>Jag har skapat denna sajt av två skäl. Det första är att jag har gjort min egen resa i ämnet och läst och lyssnat på information om det men insett att då man varit ut för något som skadat ens hjärna och dess förmåga att komma ihåg saker så kan det vara bra att summera och skriva ner saker så man kan gå tillbaka, för det är inte alltid man kommer ihåg alla de där bra sakerna.</p>
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

export default VitaminerPage
