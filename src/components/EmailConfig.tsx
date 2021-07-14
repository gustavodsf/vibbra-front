import { useState, SetStateAction, Dispatch } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInbox
} from '@fortawesome/free-solid-svg-icons'

import '../style/config.scss'

type EmailType = {
  app_id: string,
  smtpServerName: string,
  smtpPort: string,
  smtpLogin: string,
  smtpPass: string,
  senderName: string,
  senderEmail: string
}

type EmailConfigProps = {
  setFunction: Dispatch<SetStateAction<EmailType>>
}

export function EmailConfig(props: EmailConfigProps){
  const [smtpServerName, setSmtpServerName] = useState('')
  const [smtpPort, setSmtpPort] = useState('')
  const [smtpLogin, setSmtpLogin] = useState('')
  const [smtpPass, setSmtpPass] = useState('')
  const [senderName, setSenderName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')

  const [error, setError] = useState({
    smtpLogin: false,
    smtpPass: false,
    senderEmail: false,
  })

  const handleOnBlur = () => {
    let hasError = false;
    let newError = error;
    if(smtpLogin.trim() === ''){
      newError = { ...newError, smtpLogin: true};
      hasError = true;
    }

    if(smtpPass.trim() === ''){
      newError = { ...newError, smtpPass: true};
      hasError = true;
    }

    if(senderEmail.trim() === ''){
      newError = { ...newError, senderEmail: true};
      hasError = true;
    }

    if(!hasError){
      props.setFunction({app_id:'', smtpServerName, smtpPort, smtpLogin, smtpPass, senderName, senderEmail})
    } else {
      setError(newError);
      toast.error("A seção de e-mail, possui erro no preenchimento")
    }
  }
  
  return(<>
    <p className="titulo">
      <FontAwesomeIcon icon={faInbox} className="icon"/>
      E-mail
    </p>
    <div className="my-subfields-container">
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
              label="Nome do Servidor SMTP"
              fullWidth 
              onChange={event => setSmtpServerName(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Porta de envio"
              fullWidth 
              onChange={event => setSmtpPort(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Login"
              fullWidth 
              error={error.smtpLogin}
              onChange={event => setSmtpLogin(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              type="password"
              id="standard-required"
              label="Senha"
              fullWidth 
              error={error.smtpPass}
              onChange={event => setSmtpPass(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Nome do remetente"
              fullWidth 
              onChange={event => setSenderName(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Email do remetente"
              fullWidth 
              error={error.senderEmail}
              onChange={event => setSenderEmail(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
      </Grid>
    </div>
  </>)
}