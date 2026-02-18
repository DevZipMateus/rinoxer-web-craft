
# Correção do Google Maps bloqueado pelo CSP

## Problema
A diretiva `frame-src` no `.htaccess` permite apenas domínios do Google Tag Manager, mas o iframe do Google Maps usa `https://maps.google.com`, que está sendo bloqueado.

## Solução
Adicionar os domínios do Google Maps na Content-Security-Policy do `.htaccess`:

- **frame-src**: adicionar `https://maps.google.com https://www.google.com`
- **img-src**: adicionar `https://maps.gstatic.com https://maps.googleapis.com` (para tiles e imagens do mapa)
- **connect-src**: adicionar `https://maps.googleapis.com` (para requisições do mapa)

## Arquivo alterado
- `public/.htaccess` — atualizar as diretivas CSP na seção 5

## Após a alteração
Faça o upload do novo `.htaccess` para a `public_html/` da Hostinger e teste acessando a seção de contato no site.
