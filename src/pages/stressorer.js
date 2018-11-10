import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div class="bg-first-section">
      <div class="wrapper">
        <div class="introduction">
          <h1>Stressorer</h1>
          <p>Olika saker stressar olika personer. Vi är alla olika. Det är viktigt att lära känna sig själv för att veta vad som gör en stressad. Inre och yttre faktorer.</p>
        </div>
      </div>
    </div>

    <div class="bg-color2">
      <div class="wrapper">
        <div class="col-9">
          <h2>Yttre faktorer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <h2>Inre faktorer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <p>- Stimuli</p>
          <p>- Rörelse. Skärmar. Ta beslut. Otrygg miljö. </p>
        </div>
      </div>
    </div>

    <div class="bg-color3">
      <div class="wrapper">
        <div class="col-9">
          <h2>Refenser</h2>
          <ul class="references">
            <li>Referens 1</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
