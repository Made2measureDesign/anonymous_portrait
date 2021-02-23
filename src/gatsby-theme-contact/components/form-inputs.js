/** @jsx jsx */

import React from 'react'
import * as ReactDOM from 'react-dom';
import { jsx, Textarea, Input, Label, Styled } from 'theme-ui'
import { Upload } from '@progress/kendo-react-upload';
import '@progress/kendo-theme-material/dist/all.css';

const LabeledInput = ({ as = Input, label, ...props }) => {
  const name = label.toLowerCase()
  const Component = as
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Component name={name} id={name} {...props} />
    </>
  )
}

const FormInput = ({ ...props }) => {
  // const [selectedFile, setSelectedFile] = useState(null);
  return(
  <>
      <LabeledInput
      label='NFT Purchased'
      type='text'
      required
      placeholder='Introduce NFT title'
      {...props}
    />
    <LabeledInput
      label='Your ETH address'
      type='text'
      required
      placeholder='Introduce your ETH Addresss'
      {...props}
    />
     <Styled.h4
        sx={{
          gridArea: `details`,
          p: [2, 2, 2],
          borderLeft: [null, null, null],
          borderLeftColor: [null, null, 'muted'],
          mt: [3, null, 3],
          pt: [3, null, 0],
          borderTop: ['1px solid', '1px solid', '2px solid'],
          // color: '#F20775',

          borderTopColor: [null, null, null]
        }}
      >
        One way to get in touch with you
      </Styled.h4>
    <LabeledInput
      label='Your email address'
      type='email'
      optional
      placeholder='Introduce your email'
      {...props}
    />
    <LabeledInput
      label='Instagram Username'
      type='text'
      optional
      placeholder='Introduce your IG username to get instagram metion, and your portrait posted'
      {...props}
    />
    <LabeledInput
      label='Twitter Username'
      type='text'
      optional
      placeholder='Introduce your Twitter username to get instagram metion, and your portrait posted'
      {...props}
    />
     <div
        sx={{
          gridArea: `details`,
          p: [2, 2, 2],
          borderLeft: [null, null, null],
          borderLeftColor: [null, null, 'muted'],
          mt: [3, null, 3],
          pt: [3, null, 0],
          borderTop: ['1px solid', '1px solid', '2px solid'],
          // color: '#F20775',

          borderTopColor: [null, null, null]
        }}
      ></div>
    <LabeledInput
      label='Tell me about your style'
      as={Textarea}
      required
      minLength={10}
      rows={5}
      placeholder='Tell me about what you would like in your portrait, type of disguise (glasses, blindfold, mask...)'
      {...props}
    />
    <Styled.h5
                sx={{
                  marginBottom: `1rem`
                }}
                >
    Attach your portrait photo
    </Styled.h5>
    <Upload
      type="file"
      batch={false}
      restrictions={{
        allowedExtensions: [ '.jpg', '.png' ],
        maxFileSize: 3000000
      }}
      defaultFiles={[]}
      multiple={false}
      withCredentials={false}
      required
      saveUrl={'/save'}
      removeUrl={'/remove'}
    />
  </>
)
}

export default FormInput


{/* <Upload
label='Your portrait photo'
type="file"
restrictions={{
  allowedExtensions: [ '.jpg', '.png' ],
  maxFileSize: 4000000
}}
saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
value={selectedFile}
onChange={(e) => setSelectedFile(e.target.files[0])}
{...props}
/> */}