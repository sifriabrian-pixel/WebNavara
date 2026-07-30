# Sitio web de Navara

Sitio Next.js + Tailwind para Navara Estética Avanzada y Bienestar Integral.

## Cómo correr el sitio en tu computadora

```bash
npm install
npm run dev
```

Después abrí [http://localhost:3000](http://localhost:3000).

## Cómo cambiar precios, promos y datos del negocio (sin tocar código)

Todo lo que cambia seguido está en dos archivos, dentro de la carpeta `content/`:

### 1. `content/site.ts`
Acá vive:
- Número de WhatsApp, dirección, horario, ciudad
- La **promoción activa del mes** (título, descripción, vigencia, mensaje de WhatsApp)
- Los pilares de marca, preguntas frecuentes y testimonios
- El Pixel ID de Meta y el Measurement ID de GA4 (dejalos vacíos hasta tenerlos)

Para cambiar la promo de un mes a otro, editá el objeto `activePromotion` en ese archivo. Para desactivarla, poné `active: false`.

### 2. `content/tratamientos.ts`
Acá está el listado completo de tratamientos. Cada tratamiento es un bloque con nombre, descripción, beneficios y el mensaje de WhatsApp pre-armado para ese servicio.

Para **agregar un tratamiento nuevo**: copiá un bloque existente, cambiale el `slug` (sin espacios ni tildes), el nombre y la descripción. La página `/tratamientos/[ese-slug]` se genera sola, y también aparece automáticamente en la grilla de servicios del home.

## Qué falta completar

Buscá el texto `[PENDIENTE-CLIENTE]` en `content/site.ts` — son los datos reales que todavía faltan (número de WhatsApp, dirección, horario, nombre del profesional, precios, mapa embebido y testimonios). El sitio funciona igual mientras tanto, pero con placeholders visibles.

## Tracking (Meta Pixel / GA4)

Apenas tengas el Pixel ID de Meta Ads o el Measurement ID de GA4, pegalos en `business.metaPixelId` / `business.ga4Id` dentro de `content/site.ts`. No hace falta tocar nada más: cada botón de WhatsApp del sitio ya dispara el evento `Contact` / `WhatsAppClick` automáticamente, con el nombre de la sección desde donde se clickeó.

## Deploy

Pensado para desplegarse en [Vercel](https://vercel.com/new). Antes de lanzar a producción, reemplazá el dominio placeholder en `app/sitemap.ts` y `app/robots.ts` por el dominio final.
