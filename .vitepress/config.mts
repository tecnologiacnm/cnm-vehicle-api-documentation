// Seu arquivo de configuração do VitePress (por exemplo, .vitepress/config.js)

import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Teste",
  description: "A VitePress Site",
  themeConfig: {
    logo: "https://cdn.chavesnamao.com.br/common/logos/logo-admin-login-2023.png",
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Considerações Iniciais",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/docs/01-consideracoes-iniciais/index.md",
          },
          {
            text: "Ambiente de testes",
            link: "/docs/01-consideracoes-iniciais/test-environment.md",
          },
          {
            text: "Ambiente de produção",
            link: "/docs/01-consideracoes-iniciais/production-environment.md",
          },
          {
            text: "Autenticação",
            link: "/docs/01-consideracoes-iniciais/authentication.md",
          },
          {
            text: "Limite de requisições",
            link: "/docs/01-consideracoes-iniciais/limit-requests.md",
          },
          {
            text: "Status de respostas das requisições",
            link: "/docs/01-consideracoes-iniciais/status-request.md",
          },
          {
            text: "Paginação e busca",
            link: "/docs/01-consideracoes-iniciais/pagination-and-search.md",
          },
        ],
      },
      {
        text: "Veículos",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/docs/02-veiculos/index.md",
          },
          { text: "Endpoints", link: "/docs/02-veiculos/vehicle-endpoints.md" },
          {
            text: "Endpoints paginados",
            link: "/docs/02-veiculos/vehicle-endpoints-paginated",
          },
          {
            text: "Objeto para criação e edição do veículo",
            link: "/docs/02-veiculos/vehicle-object.md",
          },
          {
            text: "Objeto de retorno /vehicles/{reference}",
            link: "/docs/02-veiculos/vehicle-return-object.md",
          },
        ],
      },
      {
        text: "Cliente",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/docs/03-cliente/index.md",
          },
          { text: "Endpoints", link: "/docs/03-cliente/client-endpoints.md" },
          {
            text: "Objeto de informações do plano",
            link: "/docs/03-cliente/plan-information-object.md",
          },
        ],
      },
      {
        text: "Publicação",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/docs/04-publicacao/index.md",
          },
          {
            text: "Endpoints",
            link: "/docs/04-publicacao/publication-endpoints.md",
          },
          {
            text: "Objeto de informações da publicação",
            link: "/docs/04-publicacao/publication-information-object.md",
          },
        ],
      },
      {
        text: "Previsão de execução da requisição",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/docs/05-previsao-execucao/index.md",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/ChavesNaMao" },
      { icon: "instagram", link: "https://www.instagram.com/chavesnamao/" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/chavesnamao/",
      },
      { icon: "youtube", link: "https://www.youtube.com/ChavesNaMao" },
    ],
  },
});
