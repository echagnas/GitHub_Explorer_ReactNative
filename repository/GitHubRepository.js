import { Network } from "../network/Network";
import { NetworkAxios } from "../network/NetworkAxios";

const BASE_API = "https://api.github.com/";
const ACCESS_TOKEN = "fc82ae8b9630cf310e0e7d0d97a2b21db49a01b5";

export const getUser = userName =>
  //Network.httpGet(`${BASE_API}users/${userName}?access_token=${ACCESS_TOKEN}`);
  NetworkAxios.httpGet(
    `${BASE_API}users/${userName}?access_token=${ACCESS_TOKEN}`
  );

export const getUserRepos = userName =>
  Network.httpGet(
    `${BASE_API}users/${userName}/repos?access_token=${ACCESS_TOKEN}`
  );
