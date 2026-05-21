# Portfólio — Lucas Ragazzi

Portfólio pessoal em **React**, **TypeScript** e **Vite**, com conteúdo estruturado em dados tipados e deploy estático no GitHub Pages.

## Stack

- React 19 + TypeScript
- Vite 6
- CSS modular (mesmo design da versão anterior)

## Funcionalidades

- Seções: hero, sobre, experiência, skills, projetos e contato
- Filtro de projetos por tag (React, Java, HTML, etc.)
- Animações de entrada com `IntersectionObserver`
- Deploy automático via GitHub Actions

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre em [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/) (o `base` do Vite aponta para `/Portfolio/`).

## Build e preview

```bash
npm run build
npm run preview
```

## Deploy

O workflow em `.github/workflows/jekyll-gh-pages.yml` instala dependências, roda `npm run build` e publica a pasta `dist` no GitHub Pages.

Site: [https://ragazzi147.github.io/Portfolio/](https://ragazzi147.github.io/Portfolio/)

## Estrutura

```
src/
  components/   # UI por seção
  data/         # experiência, projetos, skills, links
  styles/       # CSS do portfólio
public/
  img/          # thumbnails dos projetos
  favicons/
```

## Projetos em destaque

- **Dogs** — React + REST API
- **DSmeta** — React + Java/Spring
- **Bikcraft** — HTML, CSS e JavaScript
