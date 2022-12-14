<h1 align="center">Angular Boilerplate</h1>

<p align="center">
  <img src="https://img.icons8.com/ios-filled/150/000000/angularjs.png" alt="angular-logo" width="120px" height="120px"/>
  <br>
  <i>Lightweight & minimalistic Angular starter</i>
  <br>
</p>

<p align="center">
  <a href="https://angularboilerplate.vercel.app"><strong>https://angularboilerplate.vercel.app</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  Β·
  <a href="https://github.com/juanmesa2097/ui-coursuch/issues">Submit an Issue</a>
  <br>
  <br>
</p>
<hr>

## βοΈ Features

- Lazy loading
- Standalone components
- OS/Light/Dark modes
- Strongly-typed storage
- TailwindCSS

## π οΈ Tweaks

- TailwindCSS configuration:

  You can find the `tailwind.config.js` file in the project root, then you can refer to https://tailwindcss.com/docs/configuration to learn how to make your own adjustments.

- Set default theme (first time load)

  Go to `src\app\lib\constants.ts` and choose the default theme.

  OS preference

  ```ts
  export const DEFAULT_BASE_THEME: AppTheme = 'system' as const;
  ```

  Light mode

  ```ts
  export const DEFAULT_BASE_THEME: AppTheme = 'light' as const;
  ```

  Dark mode

  ```ts
  export const DEFAULT_BASE_THEME: AppTheme = 'dark' as const;
  ```

- Enable a new local/session storage item

  Go to `src\app\lib\utils\storage\storage.types.ts` and add a new item name in the `StorageObjectType` type and a new key value pair in the `StorageObjectMap` type.

  ![image](https://user-images.githubusercontent.com/64181348/173276010-a4b95a63-2fe0-4104-9b09-34eeea5f0025.png)

  After that, you can use the new item.
  ![image](https://user-images.githubusercontent.com/64181348/173276575-09322722-387d-4c20-95af-fa9915079e3a.png)

## β©οΈ Project structure

```console
ββββapp
β   ββββlib
β   β   ββββcomponents
β   β   β   ββββheader
β   β   β   ββββlayouts
β   β   β   β   ββββlayout-horizontal
β   β   β   ββββlogo
β   β   β   ββββnavbar
β   β   ββββguards
β   β   ββββinterceptors
β   β   ββββservices
β   β   β   ββββauth
β   β   β   ββββtheme
β   β   ββββutils
β   β       ββββstorage
β   ββββpages
β       ββββauth
β       β   ββββlogin
β       β   ββββregister
β       ββββhome
β       ββββprofile
β       ββββscreens
β       β   ββββnot-found
β       ββββsettings
β           ββββaccessibility
β           ββββaccount
β           ββββappearance
ββββassets
ββββenvironments
ββββtheme
    ββββ01-base
    ββββ02-components
    ββββ03-utilities
    ββββtailwindcss
```

## π§ββοΈ Commands

| Command  | Description                                                 | NPM              | Yarn          | PNPM          | Background command                              |
| -------- | ----------------------------------------------------------- | ---------------- | ------------- | ------------- | ----------------------------------------------- |
| ng       | See available commands                                      | npm run ng       | yarn ng       | pnpm ng       | ng                                              |
| start    | Run app in development mode                                 | npm start        | yarn start    | pnpm start    | ng serve                                        |
| build    | Build app for production                                    | npm run build    | yarn build    | pnpm build    | ng build                                        |
| watch    | Run build when files change                                 | npm run watch    | yarn watch    | pnpm watch    | ng build --watch --configuration development    |
| test     | Run unit tests                                              | npm run test     | yarn test     | pnpm test     | ng test                                         |
| test:run | Run unit tests with headless browser and without watch mode | npm run test:run | yarn test:run | pnpm test:run | ng test --watch=false --browsers ChromeHeadless |
| lint     | Lint code                                                   | npm run lint     | yarn lint     | pnpm lint     | ng lint                                         |
