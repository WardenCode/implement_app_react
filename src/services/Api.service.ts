import { ActivityI, MovieI, MovieRequestParamsI, MovieResponseDataI } from "../interfaces/Api";
import environments from "../environments";
import { axiosInstance } from "../utils";

export function getMovies(params: MovieRequestParamsI) {
  const url = `${environments.API_URL}/titles/advancedsearch`

  return axiosInstance.get<MovieResponseDataI>(url, { params })
    .then(response => response.data)
}

export function getFavoriteMovies() {
  const url = `${environments.API_URL}/titles/favorite`;

  return axiosInstance.get<MovieI[]>(url)
    .then((response) => response.data)
}

export function addToFavoriteMovies(imdbId: string) {
  const url = `${environments.API_URL}/titles/favorite/${imdbId}`;

  return axiosInstance.post<MovieI[]>(url)
    .then((response) => response.data)
}

export function removeFromFavoritesMovies(imdbId: string) {
  const url = `${environments.API_URL}/titles/favorite/${imdbId}`;

  return axiosInstance.delete<MovieI[]>(url)
    .then((response) => response.data)
}

export function getWatchLaterMovies() {
  const url = `${environments.API_URL}/titles/watchlater`;

  return axiosInstance.get<MovieI[]>(url)
    .then((response) => response.data)
}

export function addToFromWatchLaterMovies(imdbId: string) {
  const url = `${environments.API_URL}/titles/watchlater/${imdbId}`;

  return axiosInstance.post<MovieI[]>(url)
    .then((response) => response.data)
}

export function removeFromWatchLaterMovies(imdbId: string) {
  const url = `${environments.API_URL}/titles/watchlater/${imdbId}`;

  return axiosInstance.delete<MovieI[]>(url)
    .then((response) => response.data)
}

export function getActivities() {
  return axiosInstance.get<ActivityI[]>(`${environments.API_URL}/activity`)
    .then((response) => response.data)
}