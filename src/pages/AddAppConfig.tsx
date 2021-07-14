import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';

import { EmailConfig } from '../components/EmailConfig';
import { SMSConfig } from '../components/SMSConfig';
import { WebPushConfig } from '../components/WebPushConfig';

import { 
  createAppConfig,
  createEmailConfig,
  createSMSConfig,
  createWebPushConfig
} from '../services/api'

import '../style/addAppConfig.scss';

type CreateEmailConfigFields = {
  app_id: string,
  smtpServerName: string,
  smtpPort: string,
  smtpLogin: string,
  smtpPass: string,
  senderName: string,
  senderEmail: string
}

type CreateSMSConfigFields = {
  app_id: string,
  provedorSMS: string,
  login: string,
  senha: string,
}

type CreateWebPushConfigFields = {
  app_id: string,
  siteName: string,
  siteURL: string,
  siteIconURL: string,
  messageText: string,
  btnAllowTxt: string,
  btnDontAllowTxt: string,
  notifyTitle: string,
  notifyText: string,
  enableLinkDestiny: boolean,
  urlLinkDestiny: string,
}

export function AddAppConfig(){

  
  const [appName, setAppName] = useState('')

  const [webPushConfig, setWebPushConfig] = useState<CreateWebPushConfigFields>({ app_id: '',siteName: '',siteURL: '',siteIconURL: '',messageText: '',btnAllowTxt: '',btnDontAllowTxt: '',notifyTitle: '',notifyText: '',enableLinkDestiny: false,urlLinkDestiny: ''});
  const [emailConfig, setEmailConfig] = useState<CreateEmailConfigFields>({app_id: '', smtpServerName: '',smtpPort: '',smtpLogin: '',smtpPass: '',senderName: '',senderEmail: ''})
  const [smsConfig, setSmsConfig] = useState<CreateSMSConfigFields>({app_id: '',provedorSMS: '',login: '',senha: ''})

  const [communicationChanel, setCommunicationChanel] = useState({
    isWebPush: false,
    isEmail: false,
    isSMS: false,
  });
  const { isWebPush, isEmail, isSMS } = communicationChanel;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommunicationChanel({ ...communicationChanel, [event.target.name]: event.target.checked });
  };

  const handleSubmit = async () => {
    try {
      const data = await createAppConfig({appName, isWebPush, isEmail, isSMS})
      toast.success("O aplicativo foi salvo no banco de dados com sucesso!");
      if(isWebPush){
        await createWebPushConfig({...webPushConfig, app_id: data.id})
        toast.success("A configuração do web push  foi armazenada com sucesso!");
      }
      if(isEmail){
        await createEmailConfig({...emailConfig, app_id: data.id})
        toast.success("A configuração do email  foi armazenada com sucesso!");
      }
      if(isSMS){
        await createSMSConfig({...smsConfig, app_id: data.id})
        toast.success("A configuração do sms  foi armazenada com sucesso!");
      }
    }
    catch (e) {
      toast.error("Houve um erro ao criar o Aplicativo! Tente novamente mais tarde")
    }
  }

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
        <Grid item xs={12}>
          <Button onClick={handleSubmit}> Enviar </Button>
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
