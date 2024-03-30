# Content Management Client for Soy Costa Rica App

This is the Content Management Client to register and update places, articles, users, etc. for the Soy Costa Rica App (SCRApp)

## Technologies Used

- Modern React
- Typescript
- Plain CSS / CSS Modules
- Material UI
- Figma Design Tool
- React Router DOM
- React Query
- React Table
- Axios HTTP Client
- Passport JWT / Axios Interceptors
- React Hook Form / Zod Schema Validation
- Uppy File Uploader
- AWS SDK / S3-Client / Cloudflare R2 Object Storage
- ExifReader
- React DnD
- D3 (Data Visualization)
- Leaflet / Leaflet React

## Git Setup

```sh
git init
git add *
git commit -m "<message>"
git branch -M main
git remote add origin https://github.com/efgarro/2024-v03-SCR-CMS.git
git push -u origin main
```

#### Other commands

```sh
git remote -v
git remote set-url origin https://github.com/efgarro/2024-v03-SCR-CMApp.git // Renaming URL
```

"origin" is the shorthand for the repo's URL "https://github.com/efgarro/..."

```sh
git config --system --list
git config --global --list
git config --local --list
git config --list --show-origin
```

## CSS Naming Convention

#### Layout Containers Classes

```sh
.layout_screen
.layout-container
.layout-wrapper
.layout.box
.layout-wrapperOne, .layout-wrapperTwo, etc
.layout-flex-row
.layout-flex-col
```

#### UI Module Classes

```sh
.header-menu, .header-logo, .header-searchBox, .header-<name>
.footer-menu, .footer-logo, .footer-searchBox, .footer-<name>
.sidebar-box, sidebar-title, sidebar-<name>
.navbar-<name>
.main-content-<name>
.caseOne-<name>, .caseTwo-<name>
.podOne-<name>, .podTwo-<name>
.restaBox-<name>
```

#### Organizing Properties

```sh
/* by Kevin Powel */
/* https://www.youtube.com/watch?v=3Y03OSNw6zo */

/* display */
/* positioning */
/* box-model */
/* typography*/
/* manipulating */
/* miscellaneous */
```

#### Breaking Points - CMApp

| Screen Type | Screen Size | Container Size |
| ----------- | ----------- | -------------- |
| Small       | >=576px     | 540px          |
| Medium      | >=768px     | 720px          |
| Large       | >=992px     | 960px          |
| X-Large     | >=1200px    | 1140px         |

## App.tsx Highlights

- Include all routes in this component

## References

- search for openstreetmap logo / icon
- govisitcostarica.com
- visitcostarica.com
- https://www.arcgis.com/apps/webappviewer/index.html?id=6379ba7935a047ca99195f5e0c3cece9#
- https://www.sinabi.go.cr/contactenos/preguntele_bibliotecaria.aspx
- https://designmodo.com/bootstrap-5-layout/
