import cors from "cors";
import e, { Express } from "express";
import { routes } from "./routes";

class App {
  app: Express
  port = process.env.PORT || 3000

  constructor() {
    this.app = e();
    this.middlewares()
    this.routes()
    this.start()
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(e.json());
    this.app.use(e.urlencoded({ extended: true }))
    this.app.use("/public", e.static(`${__dirname}/public`));
  }

  routes() {
    this.app.get("/", (_, res) => res.sendFile(`${__dirname}/views/index.html`));
    this.app.use("/api", routes);
  }
  start() {
    this.app.listen(this.port, () => console.log(`Server is Running on ${this.port}`));
  }
}

export default new App().app