
## Criar sitemap.xml e atualizar robots.txt

### Páginas mapeadas do projeto

A partir do `src/App.tsx`, foram identificadas 3 rotas públicas (a rota `*` é a página 404 e não entra no sitemap):

| Página | URL | Prioridade | Frequência |
|---|---|---|---|
| Home | https://www.rinoxer.com.br/ | 1.0 | weekly |
| Cozinha Industrial | https://www.rinoxer.com.br/cozinha-industrial | 0.8 | monthly |
| Área de Saúde | https://www.rinoxer.com.br/area-saude | 0.8 | monthly |

---

### O que será feito

**1. Criar `public/sitemap.xml`**

O arquivo seguirá o padrão do protocolo Sitemaps (sitemaps.org), com as tags obrigatórias:
- `<loc>` — URL da página
- `<lastmod>` — data da última modificação (2026-02-18)
- `<changefreq>` — frequência de atualização estimada
- `<priority>` — prioridade relativa (0.0 a 1.0)

**2. Atualizar `public/robots.txt`**

Adicionar a linha `Sitemap:` apontando para o arquivo, o que é uma boa prática e ajuda os crawlers (Google, Bing etc.) a encontrarem o sitemap automaticamente:

```text
Sitemap: https://www.rinoxer.com.br/sitemap.xml
```

---

### Detalhes técnicos

- O `sitemap.xml` ficará na pasta `public/`, o que faz com que seja servido na raiz do domínio em `https://www.rinoxer.com.br/sitemap.xml` — exatamente o caminho esperado pelos buscadores.
- Nenhuma biblioteca externa é necessária, pois o sitemap é um arquivo XML estático.
- Após a publicação, o sitemap poderá ser submetido manualmente no Google Search Console e Bing Webmaster Tools para indexação mais rápida.
