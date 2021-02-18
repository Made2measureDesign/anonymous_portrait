import React from 'react'
import * as ReactDOM from 'react-dom';
import { Textarea, Input, Label, Styled } from 'theme-ui'
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
    <LabeledInput
      label='Your email address (optional)'
      type='email'
      required
      placeholder='Introduce your user name'
      {...props}
    />
    <LabeledInput
      label='Instagram Username (optional)'
      type='text'
      optional
      placeholder='Introduce your IG username to get instagram metion, and your portrait posted'
      {...props}
    />
    <LabeledInput
      label='Twitter Username (optional)'
      type='text'
      optional
      placeholder='Introduce your Twitter username'
      {...props}
    />
    <LabeledInput
      label='Tell me about your style'
      as={Textarea}
      required
      minLength={10}
      rows={5}
      placeholder='Tell me some what would you like in your portrait, type of disguise (glasses, blindfold, mask...)'
      {...props}
    />
    <Styled.h5>Attach your self portrait photo</Styled.h5>
    <Upload
      batch={false}
      restrictions={{
        allowedExtensions: [ '.jpg', '.png' ],
        maxFileSize: 5000000
      }}
      defaultFiles={[]}
      multiple={false}
      withCredentials={false}
      saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
      removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
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