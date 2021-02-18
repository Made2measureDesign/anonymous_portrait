/** @jsx jsx */

import React from "react"
import { jsx, Styled } from 'theme-ui'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo" 
import Form from "../gatsby-theme-contact/components/contact-page"

const IndexPage = () => (
  <Layout
  sx={{
    p: 0,
    mb: 1,
    display: 'blocks',
  }}
  >
    <SEO title="Home" />
      {/* <Image
        sx={{
          marginBottom: `1.45rem`
        }}
         /> */}
    <Styled.h2>WELCOME TO ANONYMOUS PORTRAIT</Styled.h2>
    <Styled.h6
            sx={{
              marginBottom: `1.45rem`
            }}
    > 
    <p>Why disclose your identity? </p>
    One of the most successful achievements of blockchain technology is to allow trustful interactions among anonymous parties. 
    <p>Stay protected, own your data, be anonymous.</p>
    </Styled.h6>
    <Styled.h4
            sx={{
              marginBottom: `1.45rem`
            }}
    >
    How to get your portrait? 
    </Styled.h4>
    <Styled.h6>
    Attach to this form a picture of yourself, well lite, in the angle you wish your portrait to be done (ideally you would be facing the camera for a symetric point, but up to you). Let me know what kind of style you wish to have in your portrait, in terms of disguise. 
    </Styled.h6>
    <Styled.h6>
    Your portrait is ideal for social media accounts, blogs, email address, PSN accounts or any other network where you would like to keep your anonimosity.
    </Styled.h6>
    <Styled.h6>Contact me via instagram, Twitter or email for any queries. </Styled.h6>
    <Form></Form>
    {/* <Styled.h5
      sx={{
        p: 0,
        mr: 100,
        ml: 100,
        justifyItems: "center",
        justifyContent: "center",
        position: 'center',
      }}
      >Your anonymous portraits will be your personalized profile picture that does not reveal your identity. Ideal for social media accounts, blogs, email address, PSN accounts or any other network where you would like to keep you anonimosity. 
How to get your portrait?
Send a picture of yourself, well lite, in the angle you wish your portrait to be done (ideally you would be facing the camera for a symetric point, but up to you). To the following email address: **anonymousportraitcrypto@gmail.com**
</Styled.h5> */}
  </Layout>
)

export default IndexPage
