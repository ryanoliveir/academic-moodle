import { COOKIE_DOMAIN, NODE_ENV } from '@configs/environment';

export { CookieKey } from './types';

export const isVercel = () => {
  return document.location.hostname.includes(`vercel`);
};

export const readCookie = (name: string, cookies: string): string | null => {
  const cookie = cookies.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || null;

  return cookie;
};

export const setCookie = (name: string, value: string) => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 5);
  document.cookie = `${name}=${value}; domain=${COOKIE_DOMAIN}; expires=${expires.toUTCString()}; path=/;`;

  // TODO: Remove it later, when we have the application on same domain (preview/production/staging)
  if (isVercel() || NODE_ENV === `development`) {
    document.cookie = `${name}=${value}; domain=${
      document.location.hostname
    }; expires=${expires.toUTCString()}; path=/;`;
  }
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; domain=${COOKIE_DOMAIN}; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;

  // TODO: Remove it later, when we have the application on same domain (preview/production/staging)
  if (isVercel() || NODE_ENV === `development`) {
    document.cookie = `${name}=; domain=${document.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
  }
};
