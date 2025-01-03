import {Logger} from "./logger";


export class ConsoleLogger implements Logger {


  error(message: string): void {
    const now = new Date().toLocaleDateString();
    console.error(`[${now}]: ${message}`);
  }

  info(message: string): void {
    const now = new Date().toLocaleDateString();
    console.info(`[${now}]: ${message}`);
  }

  warn(message: string): void {
    const now = new Date().toLocaleDateString();
    console.warn(`[${now}]: ${message}`);
  }

}
