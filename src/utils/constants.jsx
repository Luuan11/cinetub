export const API_BASE_URL = 'https://my-json-server.typicode.com/luuan11/cinetub-api';

export const API_ENDPOINTS = {
  VIDEOS: `${API_BASE_URL}/videos`,
  VIDEO_BY_ID: (id) => `${API_BASE_URL}/videos?id=${id}`,
};

export const STORAGE_KEYS = {
  FAVORITES: '@cinetub:favorites',
};

export const ROUTES = {
  HOME: '/',
  FAVORITES: '/favorites',
  PLAYER: (id) => `/${id}`,
  NOT_FOUND: '*',
};
