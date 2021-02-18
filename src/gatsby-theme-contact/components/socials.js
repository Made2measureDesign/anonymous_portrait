/** @jsx jsx */
import React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { SocialIcon } from 'react-social-icons'
import useSiteMetadata from '../hooks/use-site-metadata'

const Socials = () => {
  const { social } = useSiteMetadata()
  const { theme } = useThemeUI()
  return social ? (
    <>
      <Styled.h3
        sx={{
        color: '#BE5FD9',
        }}
      >
      Socials
      </Styled.h3>
      <Styled.ul sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {social.map(({ url }) => (
          <Styled.li
            key={url}
            sx={{
              display: 'inline',
              mr: 0
            }}
          >
            <SocialIcon
              url={url}
              bgColor='transparent'
              fgColor={"#F20775"}
              fgColor={"#0367A6"}
            />
             <SocialIcon
              url={'https://www.instagram.com/anonymous_portrait/'}
              bgColor='transparent'
              fgColor={"#F20775"}
              fgColor={"#F20775"}
            />
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  ) : null
}

export default Socials
