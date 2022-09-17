const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/v1"
    : "http://www.trystepinto.com/api/v1";

interface IConfig {
  API_URL: string;
}

const Config: IConfig = {
  API_URL,
};

export default Config;
