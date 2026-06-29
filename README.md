# Florencia Gutierrez Portfolio

Portfolio tech personal bilingue para Florencia Gutierrez, construido con Next.js, TypeScript, Tailwind CSS, next-intl, Framer Motion y Lucide React.

## Instalar dependencias

```bash
npm install
```

En Windows, si PowerShell bloquea `npm.ps1`, usar:

```bash
npm.cmd install
```

## Correr en local

```bash
npm run dev
```

Luego abrir `http://localhost:3000`.

Rutas principales:

- Espanol: `/es`
- Ingles: `/en`
- Proyecto: `/es/projects/trackifly`
- Caso UX/UI: `/es/case-studies/carrefour-redesign`

## Editar textos

Los textos principales estan en:

- `messages/es.json`
- `messages/en.json`

Edita esos archivos para ajustar hero, about, labels, CTA y textos generales.

## Cambiar links

Los links de contacto estan en:

- `components/sections/Hero.tsx`
- `components/sections/ContactCTA.tsx`
- `components/layout/Footer.tsx`

Los links de proyectos y casos estan en:

- `data/projects.ts`
- `data/caseStudies.ts`

Busca los placeholders `COMPLETAR_...` y reemplazalos por URLs reales.

## Agregar imagenes

Coloca las imagenes en:

- `public/images/projects/`
- `public/images/case-studies/`

Luego reemplaza los placeholders de `screenshots` en `data/projects.ts` o `data/caseStudies.ts` por rutas publicas, por ejemplo:

```ts
screenshots: ['/images/projects/trackifly-dashboard.webp'];
```

Next.js optimiza esas imagenes con `next/image`.

## Agregar nuevos proyectos

1. Abre `data/projects.ts`.
2. Duplica un objeto dentro del array `projects`.
3. Cambia `slug`, `name`, `type`, `description`, `technologies`, `links`, `screenshots` y `details`.
4. La ruta se genera automaticamente como `/es/projects/nuevo-slug` y `/en/projects/nuevo-slug`.

Para nuevos casos UX/UI, repetir el mismo proceso en `data/caseStudies.ts`.

## Formato y lint

```bash
npm run lint
npm run format
```

## Desplegar en Vercel

1. Subir el repositorio a GitHub.
2. Importar el proyecto desde Vercel.
3. Mantener el framework detectado como Next.js.
4. Usar `npm install` como install command y `npm run build` como build command.
5. Completar `metadataBase` en `app/[locale]/layout.tsx` con el dominio final.

## Pendientes de contenido

Reemplazar todos los valores `COMPLETAR_...` con links, imagenes, videos y descripciones finales antes de publicar.
