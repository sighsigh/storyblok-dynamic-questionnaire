interface ImportMetaEnv {
  readonly VITE_STORYBLOK_API_URL: string;
  readonly VITE_STORYBLOK_ACCESS_TOKEN: string;
  readonly VITE_STORYBLOK_VERSION: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
