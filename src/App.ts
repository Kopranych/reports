import * as express from 'express'
import {printPdf} from "./pdf/pdfGenerator";
import * as fs from "fs";

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    });
    fs.readFile(__dirname + filePath , function (err,data){
      res.contentType("application/pdf");
      res.send(data);
    });

    this.express.use('/', router)
  }
}

export default new App().express
