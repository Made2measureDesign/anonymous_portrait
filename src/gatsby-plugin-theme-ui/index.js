import "../../static/fonts/fonts.css"

export const breakpoints = ['36em', '48em', '60em', '72em']

export const sizes = {
  container: ['70em']
}

export const fonts = {
  body:
    'Brandon Grotesque, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  heading: 'inherit',
  monospace: 'inherit'
}

export const fontSizes = [
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3.5rem'
]

export const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700
}

export const colors = {
  text: 'rgba(255,255,255,.8)',
  background: 'black',
  primary: '#fff',
  secondary: '#fff',
  highlight: 'rgba(255,255,255,.05)',
  accent: 'rgba(255,255,255,.8)',
  muted: 'rgba(255,255,255,.15)'
}

export const lineHeights = {
  body: 1.75,
  heading: 1.5
}

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  color: 'primary',
  mt: 3,
  m: 1
}

export const letterSpacings = {
  wide: '.1em'
}

export const radii = {
  default: '.5rem',
  pill: '50rem'
}

const input = {
  mt: 3,
  mb: 3,
  p: '0.75em',
  fontFamily: 'body',
  color: 'text',
  border: (t) => `2px solid ${t.colors.muted}`,
  borderRadius: 'default',
  backgroundColor: 'highlight',
  '&:focus': {
    borderColor: 'accent',
    outline: 'none'
  },
  '::placeholder': {
    color: 'text'
  }
}

export const forms = {
  label: {
    mb: 2,
    fontSize: [2, null, 3],
    fontWeight: 'bold',
    color: 'primary'
  },
  input: input,
  textarea: { ...input, resize: 'none' }
}

const button = {
  position: 'relative',
  mt: 2,
  px: [4, null, 5],
  py: [2, null, 3],
  color: 'inherit',
  background: 'transparent',
  border: (t) => `2px solid ${t.colors.muted}`,
  borderRadius: 'pill',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: 'wide',
  outline: 'none',
  transition: 'all 100ms ease-in',
  '&:hover': {
    cursor: 'pointer'
  },
  '&:active, &:hover, &:focus': {
    borderColor: 'accent',
    backgroundColor: 'highlight',
    color: 'primary'
  },
  '&:active': {
    top: '2px'
  }
}

export const buttons = {
  primary: {
    ...button
  },
  secondary: {
    ...button
  }
}

export const myapp = {
  display: "block",
  width: "100%",
  height: "100%",
  overflow: "auto",
  minHeight: "80px",
  boxSizing: "border-box",
  padding: "30px",
}

export const styles = {
  root: {
    textAlign: "center",
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
    color: 'text'
  },
  a: {
    color: 'text',
    textDecoration: 'none',
    borderBottom: (t) => `1px dotted ${t.colors.text}`,
    ':hover': {
      textDecoration: 'none',
      border: 'none'
    }
  },
  p: {
    mb: 3,
    lineHeight: 'body',
  },
  h1: {
    ...heading,
    fontSize: 7
  },
  h2: {
    ...heading,
    fontSize: 6
  },
  h3: {
    ...heading,
    fontSize: [4, null, 5]
  },
  h4: {
    ...heading,
    fontSize: 4
  },
  h5: {
    ...heading,
    fontSize: 3
  },
  h6: {
    ...heading,
    fontSize: 2,
    p: 2,
    width: '80%',
    justify: 'center',
    display: 'inline-block'
  }
}

export const theme = {
  breakpoints,
  letterSpacings,
  radii,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  colors,
  lineHeights,
  forms,
  buttons,
  styles
}

export default theme
