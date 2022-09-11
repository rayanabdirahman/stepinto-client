const BASE_URL = "http://localhost:8080";

interface IConfig {
  BASE_URL: string;
}

const Config: IConfig = {
  BASE_URL,
};

export default Config;
