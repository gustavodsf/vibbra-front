import { useState, SetStateAction, Dispatch } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe
} from '@fortawesome/free-solid-svg-icons'

import '../style/config.scss'

type WebPushConfigType = {
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

type WebPushConfigProps = {
  setFunction: Dispatch<SetStateAction<WebPushConfigType>>
}

export function WebPushConfig(props: WebPushConfigProps){
  const [siteName, setSiteName] = useState('')
  const [siteURL, setSiteURL] = useState('')
  const [siteIconURL, setSiteIconURL] = useState('')

  const [messageText, setMessageText] = useState('')
  const [btnAllowTxt, setBtnAllowTxt] = useState('')
  const [btnDontAllowTxt, setBtnDontAllowTxt] = useState('')

  const [notifyTitle, setNotifyTitle] = useState('')
  const [notifyText, setNotifyText] = useState('')
  const [enableLinkDestiny, setEnableLinkDestiny] = useState(false)
  const [urlLinkDestiny, setUrlLinkDestiny] = useState('')

  const [error, setError] = useState({
    siteName: false,
    siteURL: false,
    messageText: false,
    notifyTitle: false,
    notifyText: false,
  })
  
  const handleOnBlur = () => {
    let hasError = false;
    let newError = error;
    if(siteName.trim() === ''){
      newError = { ...newError, siteName: true};
      hasError = true;
    }

    if(siteURL.trim() === ''){
      newError = { ...newError, siteURL: true};
      hasError = true;
    }

    if(messageText.trim() === ''){
      newError = { ...newError, messageText: true};
      hasError = true;
    }

    if(notifyTitle.trim() === ''){
      newError = { ...newError, notifyTitle: true};
      hasError = true;
    }

    if(notifyText.trim() === ''){
      newError = { ...newError, notifyText: true};
      hasError = true;
    }

    if(!hasError){
      props.setFunction(
        {
          siteName, siteURL, siteIconURL, messageText, 
          btnAllowTxt, btnDontAllowTxt, notifyTitle, 
          notifyText, enableLinkDestiny, urlLinkDestiny
        });
    } else {
      setError(newError)
      console.log(newError)
      toast.error("A seção de Web Push, possui erro no preenchimento")
    } 
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnableLinkDestiny(event.target.checked);
  };

  return(<>
    <p className="titulo">
      <FontAwesomeIcon icon={faGlobe} className="icon"/>
      Web Push
    </p>
    <div className="my-subfields-container">
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Nome Site"
              fullWidth
              error={error.siteName}
              onChange={event => setSiteName(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Site URL"
              fullWidth 
              onChange={event => setSiteURL(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="URL do Ícone do Site"
              fullWidth 
              onChange={event => setSiteIconURL(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Texto da mensagem"
              fullWidth 
              error={error.messageText}
              onChange={event => setMessageText(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Texto do botão Permitir"
              fullWidth 
              onChange={event => setBtnAllowTxt(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Texto do botão Negar"
              fullWidth 
              onChange={event => setBtnDontAllowTxt(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Título da notificação"
              fullWidth
              error={error.notifyTitle}
              onChange={event => setNotifyTitle(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Texto da notificação"
              fullWidth
              error={error.notifyTitle}
              onChange={event => setNotifyText(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="  Endereço do link de destino"
              fullWidth 
              onChange={event => setUrlLinkDestiny(event.target.value)}
              onBlur={handleOnBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={<Switch checked={enableLinkDestiny} onChange={handleChange} />}
                  label="Habilitar / Desabilitar link de destino, ao clicar na notificação"
                  onBlur={handleOnBlur}
                />
              </FormGroup>
            </FormControl>
          </Grid>

      </Grid>
    </div>
  </>)
}