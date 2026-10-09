# Portfólio

Vue 3 + TypeScript + Vite, tema Catppuccin (Latte/Mocha), português e inglês.

## Rodando localmente

```
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # checa os tipos e gera a pasta dist/
npm run preview  # abre o build local
```

## Onde mexer

- `src/content/pt.ts` e `src/content/en.ts`: todos os textos. O tipo `Content` obriga os dois idiomas a terem os mesmos campos.
- `src/styles/theme.css`: cores dos dois temas.
- `public/`: foto (troque `face.svg`), `curriculo.pdf`.

