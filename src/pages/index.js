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
    <Styled.h3
               sx={{
                color: '',
              }}
    >WELCOME TO ANONYMOUS PORTRAIT
    </Styled.h3>
    <Styled.h6
            sx={{
              marginBottom: `1.45rem`
            }}
    > 
    <p>Why disclose your identity? </p>
    One of the most successful achievements of blockchain technology is to allow trustful interactions among anonymous parties. 
    <Styled.h6
               sx={{
                color: '#04D9D9',
              }}
    >
    Stay protected, own your data, be anonymous.
    </Styled.h6>
    </Styled.h6>
    <Styled.h4
            sx={{
              marginBottom: `1.45rem`
            }}
    >
    How to get your portrait? 
    </Styled.h4>
    <Styled.h6>
    Attach to this form a well lit picture of yourself, in the angle you wish your portrait to be done. Be specific on any details that you would like included in the portrait. The more specific the better the result. Feel free to share any links!
   </Styled.h6>
    <Styled.h6>
    Whether you would like glasses, masks, blindfolds, or disguises I can provide any face covering to achieve the anonymous look. Use your portrait for social media accounts, blogs, email address, PSN accounts or any other network where you would like remain unknown. 
    </Styled.h6>
    <Styled.h6>I am available for contact through instagram, Twitter or email for any queries. </Styled.h6>
    <Form></Form>
  </Layout>
)

export default IndexPage
