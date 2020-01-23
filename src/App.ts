import {printPdf} from "./pdf/pdfGenerator";
const express = require('express');
const bodyParser = require('body-parser');

class App {
  public app;

  constructor() {
    this.app = express();
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    });
    router.post('/generate', (req, res) => {
      printPdf(req.body.html).then(pdf => {
        res.setHeader('Content-Length', pdf.length);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=my_file.pdf');
        res.send(pdf);
      });
    });

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use('/', router);
  }
}

export default new App().app
