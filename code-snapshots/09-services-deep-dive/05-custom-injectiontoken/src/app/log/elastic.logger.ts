import {Logger} from "./logger";
import {HttpClient} from "@angular/common/http";
import {inject} from "@angular/core";


export class ElasticLogger implements Logger {

  private http: HttpClient = inject(HttpClient);

  error(message: string): void {
    const now = new Date().toLocaleDateString();
    console.error(`[${now}]: ${message}`);
    // this.http.post("http://www.elastic-log.com/api/error",{message:message,createdAt:new Date().toLocaleDateString()});

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
