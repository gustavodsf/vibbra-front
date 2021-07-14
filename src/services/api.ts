import axios from 'axios';

const api = axios.create({baseURL: 'https://vibbra-app-back.herokuapp.com:3000/'})

type CreateAppConfigFields =  {
  appName: string,
  isWebPush: boolean,
  isEmail: boolean,
  isSMS: boolean 
}

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

type ReturnType = {
  id: string,
}

export async function createAppConfig({appName, isWebPush, isEmail, isSMS }: CreateAppConfigFields): Promise<ReturnType>{
  const { data } = await api.post('config/app', {appName, isWebPush, isEmail, isSMS})
  return data;
}

export async function createEmailConfig({app_id, smtpServerName, smtpPort, smtpLogin, 
                                         smtpPass, senderName, senderEmail}: CreateEmailConfigFields): Promise<ReturnType>{
  const { data } = await api.post('config/email', {app_id, smtpServerName, smtpPort, smtpLogin, smtpPass, senderName, senderEmail})
  return data;
}

export async function createSMSConfig({app_id, provedorSMS, login, senha }: CreateSMSConfigFields): Promise<ReturnType>{
  const { data } = await api.post('config/sms', {app_id, provedorSMS, login, senha})
  return data;
}

export async function createWebPushConfig({app_id, siteName, siteURL, siteIconURL, messageText, 
                                           btnAllowTxt, btnDontAllowTxt, notifyTitle, notifyText,
                                           enableLinkDestiny, urlLinkDestiny}: CreateWebPushConfigFields) : Promise<ReturnType>{
  const { data } = await api.post('config/webpush', {app_id, siteName, siteURL, siteIconURL, messageText,btnAllowTxt, btnDontAllowTxt, notifyTitle, notifyText, enableLinkDestiny, urlLinkDestiny})
  return data;
}