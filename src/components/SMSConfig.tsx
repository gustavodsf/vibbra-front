import { useState, SetStateAction, Dispatch } from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import TextField from '@material-ui/core/TextField';

import '../style/config.scss'

type BlurType = {
  provedorSMS: string,
  login: string,
  senha: string,
}

type SMSConfigProps = {
  setFunction: Dispatch<SetStateAction<BlurType>>
}

export function SMSConfig(props: SMSConfigProps){
  const [provedorSMS, setProvedorSMS] = useState('')
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  const [error, setError] = useState({
    provedorSMS: false,
    login: false,
    senha: false,
  })

  const handleBlur = () => {
    let hasError = false;
    let newError = error;
    if(provedorSMS.trim() === ''){
      newError = { ...newError, provedorSMS: true};
      hasError = true;
    }

    if(login.trim() === ''){
      newError = { ...newError, login: true};
      hasError = true;
    }

    if(senha.trim() === ''){
      newError = { ...newError, senha: true};
      hasError = true;
    }

    if(!hasError){
      props.setFunction({provedorSMS, login, senha});
    } else {
      setError(newError);
      toast.error("A seção de SMS, possui erro no preenchimento")
    }
  }



  return(<>
    <p className="titulo">
      <FontAwesomeIcon icon={faEnvelope} className="icon"/>
      SMS
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
              label="Provedor de SMS integrado"
              fullWidth 
              error={error.provedorSMS}
              onChange={event => setProvedorSMS(event.target.value)}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Login"
              fullWidth 
              error={error.login}
              onChange={event => setLogin(event.target.value)}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id="standard-required"
              label="Senha"
              fullWidth 
              type="password"
              error={error.senha}
              onChange={event => setSenha(event.target.value)}
              onBlur={handleBlur}
            />
          </Grid>
      </Grid>
    </div>
  </>)
}