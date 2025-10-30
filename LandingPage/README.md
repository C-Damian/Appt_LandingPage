# Marta Makeup — Landing Page (React + Vite)

This project is a landing page for a makeup artist built with Vite + React and styled with Tailwind CSS. The original template content was replaced with components and a pastel pink palette.

Main features added
- Sticky header with responsive hamburger menu
- Hero section with social actions and navigation buttons
- Portfolio with category dropdown and simple carousel
- Catalogo de servicios (detailed menu with prices)
- Certificacion (mentorship program details)
- Consulta (contact form — intended to send via EmailJS)
- Sticky Consulta button for quick access

Quick start
1. Install dependencies:

```bash
npm install
```

2. Tailwind CSS setup (if not already installed):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Note: This project already includes `tailwind.config.cjs` and `postcss.config.cjs`. If you run the commands above, make sure the generated files align with the ones in this repo.

3. Run the dev server:

```bash
npm run dev
```

EmailJS integration (sending consultas)
1. Create an EmailJS account and configure a service and template. Copy the Service ID, Template ID, and Public Key.
2. Install the EmailJS SDK:

```bash
npm install emailjs-com
```

3. Replace the placeholder submit logic in `src/components/Consulta.jsx` with an actual EmailJS call, for example:

```js
import emailjs from 'emailjs-com'

function send(e) {
	e.preventDefault()
	emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
		.then(() => alert('Enviado'))
}
```

Next steps & notes
- Replace placeholder images in `src/assets` with real photos.
- Hook up WhatsApp/TikTok buttons to actual profiles/links.
- Improve the carousel to use a library (e.g., Embla Carousel or Swiper) for touch-friendly behavior.

If you want, I can wire EmailJS into the form, add real icons (Hero buttons), and improve the carousel to a more robust implementation.
