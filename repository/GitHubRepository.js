import { Network } from "../network/Network";
import { NetworkAxios } from "../network/NetworkAxios";

const BASE_API = "https://api.github.com/";
const ACCESS_TOKEN = "4892b8eb6fdda0cb0664a79cc9eee94d6f1f37f9";

export const getUser = userName => NetworkAxios.httpGet(
  `${BASE_API}users/${userName}?access_token=${ACCESS_TOKEN}`
);

export const getUserRepos = userName => Network.httpGet(
  `${BASE_API}users/${userName}/repos?access_token=${ACCESS_TOKEN}`
);
