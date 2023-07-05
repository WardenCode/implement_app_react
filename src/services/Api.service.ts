import { ActivityI, MovieI, MovieRequestParamsI } from "../interfaces/Api";
import environments from "../environments";
import { axiosInstance } from "../utils";

export function getActivities() {
  return axiosInstance.get<ActivityI[]>(`${environments.API_URL}/activity`)
    .then((response) => response.data)
}

export function getMovies(params: MovieRequestParamsI) {
  const url = `${environments.API_URL}/titles/advancedsearch`

  return axiosInstance.get<MovieI[]>(url, { params })
    .then(response => response.data)
}


export function addToSection(url: string) {
  return axiosInstance.post(url)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
    })
}

export function removeFromSection(url: string) {
  return axiosInstance.delete(url)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
    })
}

export function getFavoriteMovies() {
  const url = `${environments.API_URL}/titles/favorite`;

  return axiosInstance.get<MovieI[]>(url)
    .then((response) => response.data)
}

export function getWatchLaterMovies() {
  const url = `${environments.API_URL}/titles/watchlater`;

  return axiosInstance.get<MovieI[]>(url)
    .then((response) => response.data)
}