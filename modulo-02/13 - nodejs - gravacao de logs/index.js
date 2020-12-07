/*
  Utilizando a biblioteca "winston" para criacao/gravacao de logs
  esta biblioteca suporta 7 niveis de gravacao de logs.

  1 - error: 0
  2 - warn: 1
  3 - info: 2
  4 - http: 3
  5 - verbose: 4
  6 - debug: 5
  7 - silly: 6
*/

import express from "express";
import winston from "winston";

const app = express();
app.use(express.json());

//## CRIANDO O LOG
/*
  Utilizamos alguns parametros que sao:

  - level : este parametro define o nivel do log como citamos existem 7 niveis
  - transports: neste parametro criamos uma array e dentro dele definimos o nome
  do log e tambem para onde esse log ira.
*/
const { combine, printf, label, timestamp } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
});

const logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "mylog.log" })
  ],
  format: combine(
    label({ label: "my-app" }),
    timestamp(),
    myFormat
  )
});

logger.error("Error log");
logger.warn("Warn log");
logger.info("Info log");
logger.verbose("Verbose log");
logger.debug("Debug log");
logger.silly("Silly log");

logger.log("info", "hello with parameter!");


app.listen(3000, () => {
  console.log("API STARTED!");
});