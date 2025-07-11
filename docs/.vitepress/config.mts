// Seu arquivo de configuração do VitePress (por exemplo, .vitepress/config.js)

import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/cnm-vehicle-api-documentation/",
  description: "Api REST de veículos",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn.chavesnamao.com.br/common/logos/favicon.ico",
      },
    ],
  ],
  themeConfig: {
    siteTitle: "",
    logo: {
      light:
        "https://cdn.chavesnamao.com.br/common/logos/logo-admin-login-2023.png",
      dark: "https://cdn.chavesnamao.com.br/common/logos/logo-cnm-w.png",
    },
    nav: [
      { 
        text: "Atualizações", 
        items: [
          {
            text: 'v0.0.2', 
            link: "/versoes/v0.0.2.md"
          }, 
          {
            text: 'v0.0.1', 
            link: "/versoes/v0.0.1.md"
          }
        ] 
      }
    ],
    sidebar: [
      {
        text: "Considerações Iniciais",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/01-consideracoes-iniciais/index.md",
          },
          {
            text: "Ambiente de testes",
            link: "/01-consideracoes-iniciais/test-environment.md",
          },
          {
            text: "Ambiente de produção",
            link: "/01-consideracoes-iniciais/production-environment.md",
          },
          {
            text: "Autenticação",
            link: "/01-consideracoes-iniciais/authentication.md",
          },
          {
            text: "Limite de requisições",
            link: "/01-consideracoes-iniciais/limit-requests.md",
          },
          {
            text: "Status de respostas das requisições (UPDATED)",
            link: "/01-consideracoes-iniciais/status-request.md",
          },
          {
            text: "Paginação e busca",
            link: "/01-consideracoes-iniciais/pagination-and-search.md",
          },
        ],
      },
      {
        text: "Fluxo de execução da requisição (NEW)",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/05-previsao-execucao/index.md",
          },
        ],
      },
      {
        text: "Veículos",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/02-veiculos/index.md",
          },
          { text: "Endpoints", link: "/02-veiculos/vehicle-endpoints.md" },
          {
            text: "Endpoints paginados",
            link: "/02-veiculos/vehicle-endpoints-paginated",
          },
          {
            text: "Objeto para criação e edição do veículo",
            link: "/02-veiculos/vehicle-object.md",
          },
          {
            text: "Objeto de retorno /vehicles/:reference",
            link: "/02-veiculos/vehicle-return-object.md",
          },
        ],
      },
      {
        text: "Cliente",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/03-cliente/index.md",
          },
          { text: "Endpoints", link: "/03-cliente/client-endpoints.md" },
          {
            text: "Objeto de informações do plano",
            link: "/03-cliente/plan-information-object.md",
          },
        ],
      },
      {
        text: "Publicação",
        collapsed: true,
        items: [
          {
            text: "Inicio",
            link: "/04-publicacao/index.md",
          },
          {
            text: "Endpoints",
            link: "/04-publicacao/publication-endpoints.md",
          },
          {
            text: "Objeto de informações da publicação",
            link: "/04-publicacao/publication-information-object.md",
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
