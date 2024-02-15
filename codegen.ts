/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({
  path: ".env.local",
});

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "src/generated/gql.ts": {
      documents: ["src/queries/**/*.graphql"],
      schema: {
        [import.meta.env.VITE_STORYBLOK_API_URL]: {
          headers: {
            token: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
            version: "draft",
          },
        },
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
