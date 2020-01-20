import * as express from 'express'
import {printPdf} from "./pdf/pdfGenerator";

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
    router.get('/generate', (req, res) => {
      printPdf().then(pdf => {
        res.set({'Content-Type': 'application/pdf', 'Content-Length': pdf.length});
        res.send(pdf);
      });
    });
    this.express.use('/', router)
  }
}

export default new App().express
