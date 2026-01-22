# 🚀 Guia de Deploy - Tapera Burguer V2 no Easypanel

Este projeto foi otimizado para rodar em VPS usando o **Easypanel** (ou qualquer ambiente Docker). Como estamos usando Vite + React, o deploy é simples e performático.

## 📋 Pré-requisitos
- Uma VPS com **Easypanel** instalado.
- Acesso ao seu repositório no GitHub.

---

## 🛠️ Passo a Passo no Easypanel

1.  **Criar Novo Projeto:**
    - No painel do Easypanel, clique em **+ New Project** e dê o nome de `tapera-burguer`.

2.  **Adicionar Serviço:**
    - Clique em **+ Service** e escolha a opção **App**.

3.  **Configurar Source (GitHub):**
    - Escolha **GitHub** como fonte.
    - Conecte sua conta (se ainda não estiver).
    - Selecione o repositório: `HicaroDev/taperasitev2`.
    - Branch: `main`.

4.  **Configurações de Build (Nixpacks):**
    - O Easypanel detecta automaticamente que é um projeto **Vite**.
    - Ele usará o **Nixpacks** por padrão (recomendado).
    - **Environment Variables (Opcional):** Se você tiver alguma API Key, adicione na aba *Env*.

5.  **Configurar Domínio:**
    - Vá na aba **Domains**.
    - Adicione o seu domínio ou subdomínio (ex: `site.taperaburguer.com.br`).
    - O SSL (HTTPS) será gerado automaticamente pelo Easypanel.

6.  **Deploy:**
    - Clique em **Deploy** no topo da página.
    - O Easypanel vai baixar o código, instalar as dependências e subir o servidor.

---

## ⚙️ Dockerfile (Caso prefira Build Manual)
Se por algum motivo o Nixpacks não detectar, o Easypanel permite usar um Dockerfile. Este projeto já está pronto para isso. Caso precise criar um, use esta configuração:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🔄 Atualizações
Sempre que você fizer um `git push` para a branch `main`, o Easypanel detectará a mudança e fará o redeploy automático com as novas alterações.

---
*Desenvolvido com Antigravity AI* 🍔🔥
