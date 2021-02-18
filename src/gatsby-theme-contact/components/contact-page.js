/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import Layout from './layout'
import Header from './header'
import Intro from './intro'
import Form from './form'
import Details from './details'
import Socials from './socials'


const ContactPage = () => (
  <Layout>
    <section
      sx={{
        p: 0,
        mb: 3,
        display: 'block',
        justifyContent: "center",
        justifyItems: "center",
        gridTemplateColumns: [`auto`, null, `2fr 1fr`],
        gridTemplateRows: [`auto`],
        gridTemplateAreas: [
          `
        "header"
        "form"
        "details"
        `,
          null,
          `
        "header header"
        "form details"
        `
        ]
      }}
    >
      <div sx={{ 
        gridArea: `header`, mb: [1, null, 2] }}>
        <Header />
      </div>
      <div sx={{ gridArea: `form`, p: [2, 2, 2] }}>
        <Intro />
        <Form />
      </div>
      <div
        sx={{
          gridArea: `details`,
          p: [2, 2, 2],
          borderLeft: [null, null, null],
          borderLeftColor: [null, null, 'muted'],
          mt: [3, null, 3],
          pt: [3, null, 0],
          borderTop: ['1px solid', null, '2px solid'],

          borderTopColor: ['muted', null, null]
        }}
      >
        {/* <Details /> */}
        <Socials />
      </div>
    </section>
  </Layout>
)

export default ContactPage
