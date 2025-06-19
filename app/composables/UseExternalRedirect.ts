import { sendRedirect } from 'h3';

export default function useServerRedirect(url: string, code: number = 302): Promise<void> {
  if (!/^https?:\/\//.test(url)) {
    throw new Error('Invalid URL: must start with http:// or https://');
  }

  if (process.server) {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext?.event) {
      return nuxtApp.callHook('app:redirected').then(() => {
        return sendRedirect(nuxtApp.ssrContext!.event, url, code);
      });
    } else {
      throw new Error('SSR context is not available');
    }
  }

  // Lato client: non fare nulla, oppure opzionalmente lancia errore per segnalare uso scorretto
  throw new Error('useServerRedirect can only be called on the server');
}
