import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div class="bg-first-section">
      <div class="wrapper">
        <div class="introduction">
          <h1>Information</h1>
          <p>Här hittar du information kring vad stress är och vad som händer i kroppen vid både kort och långvarig stress.</p>
        </div>
      </div>
    </div>

    <div class="bg-color2">
      <div class="wrapper">
        <div class="col-9">
          <h2>Vad är stress?</h2>
          <p>Enligt wikipedia så är stress en fysiologisk-hormonella anpassningsreaktioner i kroppens organsystem som utlöses av fysiska och mentala påfrestningar <sup><a href="#references">[1]</a></sup>. Ingibjörg Jonsdottir beskriver det som biologiska och fysiologiska förberedelser i kroppen när man står inför en utmaning <sup><a href="#references">[2]</a></sup>.  </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <h2>Långvarig stress</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <h2>Det moderna samhället</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>- Vad händer i kroppen vid stress?</p>
          <p>- Tecken på stress? Hur vet man om man är stressad? Test. Var går gränsen för utmattning? Vad är ångest?</p>
        </div>
      </div>
    </div>

    <div class="bg-color3">
      <div class="wrapper">
        <div class="col-9">
          <h2>Refenser</h2>
          <ul class="references" name="references">
            <li>1. Wikipedia. <a href="https://sv.wikipedia.org/wiki/Stress">https://sv.wikipedia.org/wiki/Stress</a>. Information hämtad 2019-01-05.</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
