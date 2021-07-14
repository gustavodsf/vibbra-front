import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { EmailConfig } from '../components/EmailConfig';
import { SMSConfig } from '../components/SMSConfig';
import { WebPushConfig } from '../components/WebPushConfig';

import '../style/addAppConfig.scss';



export function AddAppConfig(){

  
  const [appName, setAppName] = useState('')

  const [webPushConfig, setWebPushConfig] = useState({})
  const [emailConfig, setEmailConfig] = useState({})
  const [smsConfig, setSmsConfig] = useState({})

  const [communicationChanel, setCommunicationChanel] = useState({
    isWebPush: false,
    isEmail: false,
    isSMS: false,
  });

  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommunicationChanel({ ...communicationChanel, [event.target.name]: event.target.checked });
  };

  const { isWebPush, isEmail, isSMS } = communicationChanel;
  // const error = [isWebPush, isEmail, isSMS ].filter((v) => v).length == 0;
  return(
    <div className="my-container">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <TextField 
            required
            id="standard-required"
            label="Nome Aplicativo"
            fullWidth 
            onChange={event => setAppName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl required component="fieldset">
            <FormLabel component="legend">Canal de Comunicação</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={isWebPush} onChange={handleChange} name="isWebPush" />}
                label="Web Push"
              />
              <FormControlLabel
                control={<Checkbox checked={isEmail} onChange={handleChange} name="isEmail" />}
                label="E-mail"
              />
              <FormControlLabel
                control={<Checkbox checked={isSMS} onChange={handleChange} name="isSMS" />}
                label="SMS"
              />
            </FormGroup>
            <FormHelperText>Escolha ao menos um</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <div>
        { isWebPush ? <WebPushConfig setFunction = {setWebPushConfig} /> : <></>}
        { isEmail ? <EmailConfig setFunction = {setEmailConfig} /> : <></>}
        { isSMS ? <SMSConfig setFunction = {setSmsConfig} /> : <></>}
      </div>
    </div>
  );
}
