# Reisef&uuml;hrer Irland

This project was created as a final project for the **Swiss Federal Vocational Baccalaureate** (German: *Berufsmaturität / BMS*). It provides multiple curated tour guides throughout Dublin, tailored to different traveler **interests**.

Originally developed as a **PHP Single Page Application**, the project was later fully rewritten in **React** with **Tailwind CSS** to modernize the architecture and improve performance. Each tour now has its own dedicated page, instead of being loaded as part of a single SPA.

The website integrates the **Google Maps JavaScript API** and **Google Directions API** for rendering maps, showing points of interest, and displaying walking routes.  

The travel content itself was last updated on **02.02.2018**.

## 🚀 Getting Started

1️⃣ Clone the repository  
```bash
git clone https://github.com/lemeleti/reisefuehrer-irland.git
```

2️⃣ Install dependencies  
```bash
npm install
```

3️⃣ Start the development server  
```bash
npm run dev
```

Then open **http://localhost:5173** in your browser.

> **Note:** A valid Google Maps API key is required.  
> Add your key in the configuration/environment before running the project (see: VITE_GOOGLE_MAPS_API_KEY).

## 🌐 Deployment (GitHub Pages)

To deploy the project to GitHub Pages, run:

```bash
npm run deploy
```

This uses gh-pages to publish the dist/ folder to the gh-pages branch.
