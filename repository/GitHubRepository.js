import { Network } from "../network/Network";
import { NetworkAxios } from "../network/NetworkAxios";

const BASE_API = "https://api.github.com/";
const ACCESS_TOKEN = "8b491320ec49c70e31f7c6b4375a74a902de0561";

export const getUser = userName => NetworkAxios.httpGet(
  `${BASE_API}users/${userName}?access_token=${ACCESS_TOKEN}`
);

export const getUserRepos = userName => Network.httpGet(
  `${BASE_API}users/${userName}/repos?access_token=${ACCESS_TOKEN}`
);
