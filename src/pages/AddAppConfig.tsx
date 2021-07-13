import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import {Form, Button, Col} from "react-bootstrap";

import '../style/addAppConfig.scss';

export function AddAppConfig(){
  const [ appName, setAppName] = useState('');
  const [ isWebPush, setIsWebPush] = useState('');
  const [ isEmail, setIsEmail] = useState('');
  const [ isSMS, setSMS] = useState('');


  const isInputValid = () => {
    let hasError = true;
    if(appName.trim() === ''){
      hasError=false;
      toast.error('Necessário o preenchimento do campo Nome');
    }

    if(isWebPush === '' && isEmail === '' && isSMS === ''){
      hasError=false;
      toast.error('Necessário o preenchimento do canal de comunicação');
    }
    return hasError;
  };

  const handleAppConfig = (event: FormEvent) => {
    event.preventDefault();

    if(isInputValid()){
      toast.success('Aplicação adicionada com sucesso! Agora tem de configurar os canais escolidos.')
    }
  }

  return(
    <div className="my-container">
      <Form className="input-form"  onSubmit={handleAppConfig}>
        <Form.Group as={Col} controlId="formGridNomeApp">
          <Form.Label>Nome Applicativo</Form.Label>
          <Form.Control type="text" placeholder="Nome do aplicativo" onChange={event => setAppName(event.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} id="formGridCanal">
          <Form.Label>Canais de Integração</Form.Label>
          <Form.Check type="checkbox" label="Web Push" onChange={event => setIsWebPush(event.target.value)}/>
          <Form.Check type="checkbox" label="E-mail" onChange={event => setIsEmail(event.target.value)}/>
          <Form.Check type="checkbox" label="SMS" onChange={event => setSMS(event.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}
