import * as axios from "axios";

export default class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = 'http://localhost:3000';
  }

  init = () => {
    let headers = {
      Accept: "application/json"
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getAllProjects = () => {
    return this.init().get("/projects");
  };
}