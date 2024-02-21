# Storyblok Dynamic Questionnaire

This is the demo code of the [article published on **_ProudlyNerd_** Medium channel](https://proudlynerd.vidiemme.it/building-interactive-surveys-a-step-by-step-guide-to-crafting-dynamic-questionnaires-with-8063ce8f7500), about creating dynamic questionnaires with [Storyblok](https://www.storyblok.com/).

It works only with a valid **Storyblok Access Token**, that has to be stored in a `.env.local` file like so:

```bash
VITE_STORYBLOK_API_URL=https://gapi.storyblok.com/v1/api
VITE_STORYBLOK_ACCESS_TOKEN=##YOUR_STORYBLOK_API_TOKEN##
VITE_STORYBLOK_VERSION=draft
```

## Create the app

#### `npm install`

Installs the app dependencies.

#### `npm run dev`

Runs the app in development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
