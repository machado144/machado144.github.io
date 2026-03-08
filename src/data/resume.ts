export const resumeData = {
  en: {
    name: "Lucas Machado",
    title: "DevOps Engineer",
    contact: {
      location: "Sevilla, Spain",
      phone: "+34 661 99 29 07",
      email: "lucas.dpmachado@gmail.com",
      linkedin: "lucaspmachado"
    },
    profile: "DevOps/Platform engineer (10+ yrs) building production systems on AWS/GCP & Kubernetes. Shipped GitOps on EKS/GKE with Argo CD, standardized Helm templates, and PR-based ephemeral envs with seeded/masked data, TTLs, and cost controls. Built secure CI/CD (CircleCI, GitHub Actions, self-hosted runners) with caching, parallelism, artifacts, release gates (Playwright, k6, OPA/Kyverno), and automated rollbacks. IaC with Terraform/Pulumi for clusters, IAM, and networking. Elevated observability (Datadog/Prometheus/Grafana, OpenTelemetry), defined SLIs/SLOs and health checks, improved on-call. Partner cross-functionally; hands-on Node.js/TS, Python, Istio/Kong; drive reliable, cost-aware delivery.",
    skills: [
      "Git", "Docker", "Kubernetes", "Linux", "Google Cloud Platform", "Amazon AWS",
      "Cypress", "Golang", "NodeJS", "Ruby", "Bash Scripting", "Elasticsearch",
      "NewRelic", "Prometheus", "SQL / NoSQL", "DataDog", "Jenkins", "Grafana",
      "Istio", "Kong Gateway", "GitOps", "CI/CD", "Playwright", "ArgoCD"
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "Spanish; Castilian", level: "Advanced" },
      { name: "English", level: "Fluent" }
    ],
    experience: [
      {
        role: "DevOps Engineer",
        company: "Demand.io",
        location: "Los Angeles, California",
        period: "Sep 2024 — Present",
        highlights: [
          "Built reusable deployment templates to allow rapid setup of new applications with ready-to-use dev, ephemeral, and prod environments, including automated monitoring, infrastructure provisioning, and DNS integration.",
          "Migrated multiple microservices (TypeScript, Python, and PHP applications) to continuous deployment workflows using ArgoCD on GKE clusters, enabling GitOps practices, streamlining deployment workflows, release management, rollbacks, and ephemeral environments.",
          "Implemented e2e tests from scratch with playwright (for web and apis) while maintaning its workflows in github actions and reporting artifacts acessible through internal private url with custom allure implementation.",
          "Deploy our own OpenWebUI application together with many MCPs integrations such as BigQuery, Github, Notion, Slack, ElasticSearch, GCP.",
          "Created k6 test suites for most of our microservices and created his scaling configurations with self hoster runners while exporting its results in real time to influxdb.",
          "Built secure GitHub Actions workflows and self-hosted runners for executing jobs within internal VPCs, enhancing security and process isolation and making use of internal workloadidentity pool for secure cloud authentication.",
          "Deployed and extended Helm charts for applications, creating custom app-specific charts to standardize deployments across projects, while managing conditional resources such as CronJobs, Ingress, ConfigMaps, Infrastructure resources with Crossplane and secrets using ExternalSecrets together with Spec tests to ensure secure updates on company widely used helm charts.",
          "Migrated existing infrastructure to Infrastructure as Code (IaC) using Pulumi with TypeScript, integrating GitHub Actions for streamlined validation, application, and management of infrastructure resources, including GKE clusters, IAM users, roles, groups, and assignments.",
          "Developed and maintained data pipelines using Cloud Dataflow for Change Data Capture (CDC) workflows, synchronizing CloudSQL (MySQL and PostgreSQL) databases with analyzed data from BigQuery.",
          "Implemented custom instrumentation for application telemetry, integrating Open Telemetry, Elastic Cloud and GCP Profiling for comprehensive monitoring and observability.",
          "Enhanced monitoring by adding synthetic checks and creating alert policies based on GCP metrics and logs, ensuring rapid detection of performance deviations.",
          "Created reusable GitHub Actions workflows to streamline deployment processes, manage secrets, validate infrastructure changes, apply IaC configurations, execute end-to-end tests, and enforce gated check-ins with application tests, lints, security checks with Trivy and custom tests workflows tailored for Python and NodeJS Backend, Frontend and data pipeline apps.",
          "Started migration from scratch from Frontend Apps from GKE to Cloudflare Pages, with caching strategy relying on cloudflare CDN with custom caching rules, and dynamic caching using KV.",
          "Created Cloudflare Zero Trust configuration with Cloudflare Access for internal tools and applications at demand.io",
          "Ensured policy as code with OPA to evaluate Infra resources with Pulumi, and Kyverno for Injecting and validating kubernetes resources with properly label, resources and annotations."
        ]
      },
      {
        role: "Automation Engineer",
        company: "Kea",
        location: "Mountain View, California",
        period: "Jan 2024 — Sep 2024",
        highlights: [
          "Enhanced application monitoring with Grafana, Faro, Loki, Tempo, OpenTelemetry, and APM Stack, combined with K6 performance tests, to identify memory leaks and misbehaving apps, improving the OnCall process.",
          "Implemented synthetics monitoring for microservices, setting alerts for browser interaction failures, response delays, and third-party integration unavailability.",
          "Developed E2E coverage with Playwright, creating workflows to run nightly tests, ensuring stability in our continuous deployment environment. Deployed a monitoring dashboard on EKS using helm charts to track incidents and test versions.",
          "Improved integration tests with Playwright for various services, maintaining unit test coverage with Jest and Nock.",
          "Managed on-call and release processes, ensuring safe production deployments using git flow. Deployed applications and FRP proxies for tests and internal apps, developed helm charts, and utilized Terraform with GitHub actions for infrastructure creation and tuning.",
          "Created and maintained bash scripts for deployments on GitHub Actions and local configurations, including Cloudflare tunnels and AWS setup.",
          "Created reusable pipelines for managing Node.js applications setup with NPM, NPM Caching and handling NPM registry on GitHub.",
          "Created Helm Charts Distributed charts to manage applications dynamically with multi source strategy together with ArgoCD."
        ]
      },
      {
        role: "DevOps Engineer",
        company: "Kiwify",
        location: "São Paulo",
        period: "May 2023 — Oct 2023",
        highlights: [
          "Migrated applications from GCP VM Instances, Google App Engine, and CloudFunctions V1 to Cloud Run and GKE using Helm, GitOps, and ArgoCD, reducing billing by at least 20% and streamlining deployments.",
          "Deployed DataDog monitoring stack to Kubernetes, enabling rapid response to app performance changes, and added synthetics monitoring and overall alerts based on infrastructure issues and request deviation thresholds.",
          "Developed reusable GitHub Actions workflows for static app deployments, Cloudflare Workers and Pages deployments, ArgoCD restart and rollback, integrating tests with Gated Check-In, SonarQube, Nuclei, Snyk, Semgrep, and migration analysis on pull requests. Implemented secret management with Google Secret Manager and Doppler.",
          "Migrated infrastructure to Terraform using GCS backend, creating modules for apps like CloudSQL with custom users and roles. Automated deployments with GitHub Actions and integrated Terraform workflows for infrastructure management.",
          "Create Golang scripts to replicate exactly the same versions of applications versioned secrets and dependencies to ephemeral environments for debugging application issues, and work on release management and temporary secrets injection.",
          "Initiated migration from GKE and GCS to EKS and S3, working in a multi-cloud environment, establishing government setup of accounts per environment, roles per account, and AWS SSO integration with Google Workspace.",
          "Created and maintained bash scripts for deployments on GitHub Actions and local configurations, including GCP local setup and permissions and cloudSQL proxies.",
          "Created reusable pipelines for managing Node.js applications setup with NPM, NPM Caching and handling NPM registry on GitHub."
        ]
      },
      {
        role: "DevOps Engineer",
        company: "Andela",
        location: "New York, NY, USA",
        period: "Jun 2022 — May 2023",
        highlights: [
          "Hired as internal devops engineer after working a few months for Andela Client from Holonic Consulting.",
          "Worked on recreation of whole v1 ecosystem into v2 ecosystem using Terraform, GKE, ArgoCD, GitHub Actions and Jenkins, Datadog, Kong, Istio Service Mesh migrating Cloud Functions v1, Google App Engines, VM instances applications to GKE and using External DNS and External Secrets to leverage a secure GitOps with secrets management and DNS creation with Cloudflare..",
          "Created Jenkins Shared Libraries with Groovy to streamline deployments, secret management, application restarts, jobs invocation, migrations, and infrastructure CRUD with Terraform.",
          "Configured Datadog into the cluster, introduced RUM and APM stacks to the apps, and led the training of internal teams about how to use and monitor their apps and also how to deploy/rollback/restart/manage each one of their applications, added synthetics monitoring and e2e tests with Cypress for app main behaviors checks.. Add jobs with short-living containers and cronjobs inside of Kubernetes with proxies to the database and leverage service-to-service communication with custom istio rules for background jobs and app communication, improving the security and latency of the apps.",
          "Created Kong Plugins for authorization and forward rules during application migrations from V1 to v2 using Lua and Golang.",
          "Created Helm charts to reuse in all apps already with Kong and Istio integrations, probes, and patterns for a reliable application with internal and external connections as needed and with simple usage of a template repo and go-lang cli created to manage app and replicate environments locally or in transient environments.",
          "Added alerts also in billing and saved more than 10.000 USD/monthly billing after identifying bad usage of resources from v1, solving it, and adding alerts and monitoring to avoid those situations.",
          "Worked on creating interview challenges, tech process for DevOps area, and training new team members from the devops area and dev team.",
          "Created and maintained bash scripts for deployments on GitHub Actions and local configurations, including GCP local setup and permissions and CloudSQL proxies.",
          "Created reusable pipelines for managing Node.js applications setup with NPM, NPM caching, and handling NPM registry on GitHub.",
          "Configured NPM for secure and efficient package management, including setting up private NPM registries, managing authentication tokens, and optimizing caching strategies.",
          "Developed Jenkins shared libraries with Groovy for deployments, secret management, jobs triggering, ArgoCD sync, rollbacks, and temporary permission creation.",
          "Created Jenkins Shared Libraries with Groovy to streamline deployments, secret management, application restarts, jobs invocation, migrations, and infrastructure CRUD with Terraform."
        ]
      },
      {
        role: "DevOps Engineer",
        company: "Holonic",
        location: "Silicon Valley, CA, EUA",
        period: "Oct 2021 — Jun 2022",
        highlights: [
          "Work on Silicon Valley startup accelerator for Client Andela, creating POC for their new application version and leveraging GCP deployment with Kubernetes and Microservices with GitHub Actions.",
          "Work on planning solutions and technologies and designing the new proposal for a version of the new talent application using mostly GCP, Kubernetes, and Terraform for Infrastructure as Code.",
          "Responsible for the whole setup of GCP projects, environments, user management groups, roles, and permissions with custom IAM roles and deployment using least privilege principles.",
          "Work actively doing demos for the client, presenting each new delivery and POC of the app with Kubernetes, kong, and nginx as ingress gateways, and managing Elastic Stack for ML's first version of the app."
        ]
      },
      {
        role: "Devops",
        company: "Webjump (Nestle / Ambev)",
        location: "São Paulo",
        period: "Feb 2019 — Oct 2021",
        highlights: [
          "Responsible for maintaining automated pipelines, development flows, and monitoring strategies between applications at Webjump.",
          "Increased test coverage for frontend, backend, and performance scripts, integrating them into automated pipelines.",
          "Created and maintained an ELK (ElasticSearch, Logstash, Kibana) Stack for effective monitoring of applications and system failures.",
          "Developed and maintained Infrastructure as Code Stacks using CloudFormation, Terraform, and Packer.",
          "Managed multiple server environments and scripts using Ansible.",
          "Implemented Continuous Integration processes with Azure Pipelines and developed a solution to scale up tests using AWS ECS.",
          "Created and managed Docker containers for test environments, Docker Registry, and Fargate Tasks from ECR.",
          "Scaled up Service testing solutions using Node.js with Lambda Triggers based on Pipeline Custom parameters.",
          "Executed, maintained, and gathered reports from Load Tests based on outputs from Application and Infrastructure.",
          "Created and updated new tests and development pipelines from scratch.",
          "Developed and implemented the Jenkins ecosystem with Spot Slaves Strategy for multiple projects.",
          "Implemented Continuous Performance Benchmarking Tests with Jenkins, K2, and Grafana/NewRelic to track performance issues between platform improvements.",
          "Managed Azure DevOps Pipelines, handled secrets, and worked on auditing Azure resources, including customized solutions using Azure SDK and Azure CLI.",
          "Experience in the development and maintenance of applications and monitoring tools across AWS, GCP, and Azure.",
          "Worked on the development and maintenance of applications in Platform.SH.",
          "Participated in Scrum meetings and technical interviews, contributing expertise to the team's growth and development."
        ]
      },
      {
        role: "Software Development Engineer In Tests",
        company: "Rockstar Coders",
        location: "Chicago, IL, Estados Unidos",
        period: "Sep 2018 — Feb 2019",
        highlights: [
          "Responsible for implementing automation with Ruby and NodeJS in various projects at RockStarCoders.",
          "Created Web and Service tests for both local and integration environments.",
          "Built and scaled all tests using CircleCI and AWS resources, utilizing container-based structures.",
          "Developed and maintained testing and process automation solutions using NodeJS, Ruby, Bash Scripts, and Webdriver.io.",
          "Utilized Cypress for Web Automation in specific projects.",
          "Delivered quality work while adhering to project timelines and specifications."
        ]
      },
      {
        role: "Software Development Engineer In Tests",
        company: "Webjump (Ambev / InBev)",
        location: "São Paulo",
        period: "Feb 2018 — Sep 2018",
        highlights: [
          "Implemented automation with Ruby in a PHP environment (Magento framework) for frontend and backend tests in ParceiroAmbev and LAS Project (InBev) at Webjump.",
          "Increased test coverage for frontend, backend, and performance scripts.",
          "Implemented a Continuous Integration process using CircleCI with parallel instances of customized containers for test environments.",
          "Created and managed Docker containers for test environments, ensuring a smooth workflow.",
          "Participated in Scrum meetings and technical interviews, contributing expertise to the team's growth and development."
        ]
      },
      {
        role: "Software Development Engineer in Tests",
        company: "Vilas Boas IT",
        location: "São Paulo",
        period: "Jun 2016 — Jan 2018",
        highlights: [
          "Led each QA squad at VilasBoasIT, studying and implementing new technologies to develop solutions based on squad necessities.",
          "Defined the style guide for all squads and conducted code reviews for new implementations on the main Automated Test Framework.",
          "Created custom reports for all Automation segmentations (API/Web/Mobile), providing data for KPI from each squad environment.",
          "Initiated the implementation of test frameworks for customers from scratch using Cucumber and Capybara (Selenium-Webdriver wrapper) with RSpec for Web cases.",
          "Used Cucumber with rest-client and RSpec for API cases, and Cucumber with Calabash-iOS/Calabash-Android for Mobile cases.",
          "Created and managed Docker containers for executing Performance/Web/Mobile/API tests on Jenkins.",
          "Managed AWS Machines (EC2) to configure Jenkins and system dependencies for each test case.",
          "Collaborated with the team to ensure projects were delivered within timeline and budget while meeting required specifications."
        ]
      },
      {
        role: "QA Lead",
        company: "Anheuser-Busch InBev",
        location: "Campinas",
        period: "Oct 2016 — Apr 2017",
        highlights: [
          "Studied and implemented new technologies as QA Lead, developing solutions based on squad necessities.",
          "Defined the style guide for all squads and conducted code reviews for new implementations on the main Automated Test Framework.",
          "Created custom reports for all Automation segmentations (API/Web/Mobile), providing KPI data from each squad environment.",
          "Initiated the implementation of test frameworks for customers from scratch using Cucumber, Capybara (Selenium-Webdriver wrapper), and RSpec for Web cases.",
          "Utilized Cucumber with rest-client and RSpec for API cases, and Cucumber with Calabash-iOS/Calabash-Android for Mobile cases; managed Xamarin Test Cloud for executing mobile tests.",
          "Created Performance Scripts using Scala Language and Gatling tools to ensure application balance and scalability, focusing on load/response times.",
          "Collaborated with the team to ensure projects were delivered within the timeline, budget, and required specifications."
        ]
      },
      {
        role: "Sr. Quality Assurance Analyst",
        company: "Geru",
        location: "São Paulo",
        period: "Mar 2016 — Jul 2016",
        highlights: [
          "Analyzed and wrote scenarios using Gherkin, following BDD practices as a Quality Assurance professional.",
          "Created automated test plans and tracked bugs using GitHub issues sessions.",
          "Utilized GitHub for effective versioning of tests and scripts.",
          "Executed manual tests, automated tests, regression tests, and smoke tests on the Frontend.",
          "Developed Frontend testing solutions using Ruby, JRuby, JavaScript, and Selenium-Webdriver with Capybara and RSpec, ensuring application quality and scalability.",
          "Experienced in Agile methodologies such as Kanban and Scrum, contributing expertise to the team's growth and development."
        ]
      },
      {
        role: "Quality Assurance Analyst",
        company: "Dafiti",
        location: "São Paulo",
        period: "Jul 2015 — Feb 2016",
        highlights: [
          "Analyzed and wrote scenarios using Gherkin, following BDD practices as a Quality Assurance professional.",
          "Utilized Jira for bug tracking and reporting.",
          "Created automated test plans and participated in meetings to gather requirements and suggest product improvements.",
          "Involved in requirements and system functional specification analysis.",
          "Utilized GitHub and BitBucket for effective versioning of tests and scripts.",
          "Executed manual tests, automated tests, regression tests, and smoke tests on the Frontend, ensuring application quality.",
          "Developed Frontend testing solutions using Ruby, JavaScript, and Selenium-Webdriver with Capybara and RSpec.",
          "Conducted performance tests using JMeter, ensuring optimal application performance.",
          "Experienced in Agile methodologies such as Kanban and Scrum, contributing expertise to the team's growth and development."
        ]
      },
      {
        role: "Quality Assurance Analyst - Freelancer",
        company: "Dafiti",
        location: "São Paulo",
        period: "Jun 2015 — Oct 2015",
        highlights: [
          "Analyzed and developed Automated Tests for mobile applications (iOS) as a Quality Assurance professional.",
          "Wrote scenarios in Gherkin using BDD practices and developed solutions using Ruby with Calabash, RSpec, and Cucumber.",
          "Ensured the quality and scalability of mobile applications through expertise in automation testing.",
          "Committed to delivering quality work while adhering to project timelines and specifications.",
          "Contributed expertise to the team's growth and development, working collaboratively to achieve the best results."
        ]
      }
    ],
    courses: [
      "Ruby on Rails Bootcamp, Campus Code",
      "ITIL V3 foundations, Impacta"
    ],
    achievements: [
      {
        title: "Cost Optimization & Cloud Efficiency",
        description: "Reduced GCP billing by 20% by migrating to Cloud Run/GKE and saved over $10,000/month by identifying and resolving resource misallocations."
      },
      {
        title: "GitOps & CI/CD Mastery",
        description: "Streamlined deployments using ArgoCD, GitHub Actions, and Jenkins, enabling ephemeral environments, automated rollbacks, and secure release gates."
      },
      {
        title: "Advanced Observability",
        description: "Elevated system monitoring with Datadog, OpenTelemetry, Prometheus, and Grafana, defining SLIs/SLOs and significantly improving on-call response times."
      },
      {
        title: "Infrastructure as Code (IaC)",
        description: "Managed complex cloud infrastructures across AWS and GCP using Terraform, Pulumi, and Crossplane with strict policy-as-code (OPA/Kyverno) enforcement."
      },
      {
        title: "Quality Assurance & Automation",
        description: "Built robust E2E and performance testing frameworks from scratch using Playwright, Cypress, and K6, ensuring high reliability for critical microservices."
      }
    ],
    projects: [
      {
        name: "ReviewForge",
        url: "https://github.com/AxeForging/reviewforge",
        description: "AI-powered code reviewer with personality — GitHub Action & CLI. ReviewForge reviews GitHub pull requests using AI (OpenAI, Anthropic, or Gemini), posting line-level comments with severity levels and review verdicts. It supports reviewer personas that add personality to reviews, multilingual output, and learning reports for developer growth.",
        tags: ["AI", "GitHub Actions", "CLI"]
      },
      {
        name: "aigate",
        url: "https://github.com/AxeForging/aigate",
        description: "OS-level sandbox for AI coding agents. Kernel-enforced file, command, and network isolation for Claude Code, Cursor, Copilot, Aider, and any AI tool. Like a Python venv but for AI permissions.",
        tags: ["Security", "Sandbox", "AI"]
      },
      {
        name: "pb",
        url: "https://github.com/AxeForging/pb",
        description: "Cross-platform clipboard CLI for pipes. Works like macOS pbcopy/pbpaste on any OS.",
        tags: ["CLI", "Tooling", "Cross-platform"]
      }
    ]
  },
  pt: {
    name: "Lucas Machado",
    title: "Engenheiro DevOps",
    contact: {
      location: "Sevilha, Espanha",
      phone: "+34 661 99 29 07",
      email: "lucas.dpmachado@gmail.com",
      linkedin: "lucaspmachado"
    },
    profile: "Engenheiro DevOps/Plataforma (10+ anos) construindo sistemas de produção na AWS/GCP e Kubernetes. Implementou GitOps no EKS/GKE com Argo CD, padronizou templates Helm e ambientes efêmeros baseados em PR com dados mascarados/semeados, TTLs e controle de custos. Construiu CI/CD seguro (CircleCI, GitHub Actions, self-hosted runners) com cache, paralelismo, artefatos, portões de release (Playwright, k6, OPA/Kyverno) e rollbacks automatizados. IaC com Terraform/Pulumi para clusters, IAM e redes. Elevou a observabilidade (Datadog/Prometheus/Grafana, OpenTelemetry), definiu SLIs/SLOs e health checks, melhorou o on-call. Parceria multifuncional; experiência prática com Node.js/TS, Python, Istio/Kong; impulsiona entregas confiáveis e com controle de custos.",
    skills: [
      "Git", "Docker", "Kubernetes", "Linux", "Google Cloud Platform", "Amazon AWS",
      "Cypress", "Golang", "NodeJS", "Ruby", "Bash Scripting", "Elasticsearch",
      "NewRelic", "Prometheus", "SQL / NoSQL", "DataDog", "Jenkins", "Grafana",
      "Istio", "Kong Gateway", "GitOps", "CI/CD", "Playwright", "ArgoCD"
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Espanhol; Castelhano", level: "Avançado" },
      { name: "Inglês", level: "Fluente" }
    ],
    experience: [
      {
        role: "Engenheiro DevOps",
        company: "Demand.io",
        location: "Los Angeles, Califórnia",
        period: "Set 2024 — Presente",
        highlights: [
          "Construiu templates de implantação reutilizáveis para permitir a configuração rápida de novas aplicações com ambientes de dev, efêmeros e prod prontos para uso, incluindo monitoramento automatizado, provisionamento de infraestrutura e integração de DNS.",
          "Migrou múltiplos microsserviços (aplicações TypeScript, Python e PHP) para fluxos de implantação contínua usando ArgoCD em clusters GKE, habilitando práticas GitOps, simplificando fluxos de implantação, gerenciamento de releases, rollbacks e ambientes efêmeros.",
          "Implementou testes e2e do zero com playwright (para web e apis) mantendo seus fluxos no github actions e relatando artefatos acessíveis através de url privada interna com implementação customizada do allure.",
          "Implantou nossa própria aplicação OpenWebUI junto com muitas integrações MCPs como BigQuery, Github, Notion, Slack, ElasticSearch, GCP.",
          "Criou suítes de teste k6 para a maioria dos nossos microsserviços e criou suas configurações de escalonamento com self-hosted runners enquanto exporta seus resultados em tempo real para o influxdb.",
          "Construiu fluxos de trabalho seguros no GitHub Actions e self-hosted runners para executar jobs dentro de VPCs internas, melhorando a segurança e o isolamento de processos e fazendo uso do pool de workloadidentity interno para autenticação segura na nuvem.",
          "Implantou e estendeu charts Helm para aplicações, criando charts customizados específicos para padronizar implantações entre projetos, gerenciando recursos condicionais como CronJobs, Ingress, ConfigMaps, recursos de Infraestrutura com Crossplane e segredos usando ExternalSecrets junto com testes Spec para garantir atualizações seguras em charts helm amplamente utilizados na empresa.",
          "Migrou a infraestrutura existente para Infraestrutura como Código (IaC) usando Pulumi com TypeScript, integrando GitHub Actions para validação, aplicação e gerenciamento simplificados de recursos de infraestrutura, incluindo clusters GKE, usuários IAM, roles, grupos e atribuições.",
          "Desenvolveu e manteve pipelines de dados usando Cloud Dataflow para fluxos de Change Data Capture (CDC), sincronizando bancos de dados CloudSQL (MySQL e PostgreSQL) com dados analisados do BigQuery.",
          "Implementou instrumentação customizada para telemetria de aplicações, integrando Open Telemetry, Elastic Cloud e GCP Profiling para monitoramento e observabilidade abrangentes.",
          "Melhorou o monitoramento adicionando verificações sintéticas e criando políticas de alerta baseadas em métricas e logs do GCP, garantindo a detecção rápida de desvios de desempenho.",
          "Criou fluxos de trabalho reutilizáveis no GitHub Actions para simplificar processos de implantação, gerenciar segredos, validar mudanças de infraestrutura, aplicar configurações IaC, executar testes ponta a ponta e impor check-ins com portões de testes de aplicação, lints, verificações de segurança com Trivy e fluxos de testes customizados para aplicações Backend Python e NodeJS, Frontend e pipeline de dados.",
          "Iniciou a migração do zero de aplicações Frontend do GKE para Cloudflare Pages, com estratégia de cache baseada na CDN da cloudflare com regras de cache customizadas e cache dinâmico usando KV.",
          "Criou configuração Cloudflare Zero Trust com Cloudflare Access para ferramentas e aplicações internas na demand.io",
          "Garantiu política como código com OPA para avaliar recursos de Infra com Pulumi, e Kyverno para injetar e validar recursos kubernetes com labels, recursos e anotações adequadas."
        ]
      },
      {
        role: "Engenheiro de Automação",
        company: "Kea",
        location: "Mountain View, Califórnia",
        period: "Jan 2024 — Set 2024",
        highlights: [
          "Melhorou o monitoramento de aplicações com Grafana, Faro, Loki, Tempo, OpenTelemetry e APM Stack, combinado com testes de desempenho K6, para identificar vazamentos de memória e aplicações com mau comportamento, melhorando o processo de OnCall.",
          "Implementou monitoramento sintético para microsserviços, configurando alertas para falhas de interação do navegador, atrasos de resposta e indisponibilidade de integração de terceiros.",
          "Desenvolveu cobertura E2E com Playwright, criando fluxos de trabalho para executar testes noturnos, garantindo estabilidade em nosso ambiente de implantação contínua. Implantou um dashboard de monitoramento no EKS usando charts helm para rastrear incidentes e versões de teste.",
          "Melhorou os testes de integração com Playwright para vários serviços, mantendo a cobertura de testes unitários com Jest e Nock.",
          "Gerenciou processos de on-call e release, garantindo implantações seguras em produção usando git flow. Implantou aplicações e proxies FRP para testes e aplicações internas, desenvolveu charts helm e utilizou Terraform com GitHub actions para criação e ajuste de infraestrutura.",
          "Criou e manteve scripts bash para implantações no GitHub Actions e configurações locais, incluindo túneis Cloudflare e configuração AWS.",
          "Criou pipelines reutilizáveis para gerenciar a configuração de aplicações Node.js com NPM, cache NPM e tratamento do registro NPM no GitHub.",
          "Criou charts distribuídos Helm para gerenciar aplicações dinamicamente com estratégia multi-source junto com ArgoCD."
        ]
      },
      {
        role: "Engenheiro DevOps",
        company: "Kiwify",
        location: "São Paulo",
        period: "Mai 2023 — Out 2023",
        highlights: [
          "Migrou aplicações de Instâncias VM GCP, Google App Engine e CloudFunctions V1 para Cloud Run e GKE usando Helm, GitOps e ArgoCD, reduzindo o faturamento em pelo menos 20% e simplificando as implantações.",
          "Implantou a stack de monitoramento DataDog no Kubernetes, permitindo resposta rápida a mudanças de desempenho da aplicação, e adicionou monitoramento sintético e alertas gerais baseados em problemas de infraestrutura e limites de desvio de requisições.",
          "Desenvolveu fluxos de trabalho reutilizáveis no GitHub Actions para implantações de aplicações estáticas, implantações Cloudflare Workers e Pages, reinício e rollback do ArgoCD, integrando testes com Gated Check-In, SonarQube, Nuclei, Snyk, Semgrep e análise de migração em pull requests. Implementou gerenciamento de segredos com Google Secret Manager e Doppler.",
          "Migrou a infraestrutura para Terraform usando backend GCS, criando módulos para aplicações como CloudSQL com usuários e roles customizados. Automatizou implantações com GitHub Actions e integrou fluxos de trabalho Terraform para gerenciamento de infraestrutura.",
          "Criou scripts Golang para replicar exatamente as mesmas versões de segredos versionados de aplicações e dependências para ambientes efêmeros para depuração de problemas de aplicação, e trabalhou no gerenciamento de releases e injeção temporária de segredos.",
          "Iniciou a migração do GKE e GCS para EKS e S3, trabalhando em um ambiente multi-cloud, estabelecendo configuração governamental de contas por ambiente, roles por conta e integração AWS SSO com Google Workspace.",
          "Criou e manteve scripts bash para implantações no GitHub Actions e configurações locais, incluindo configuração local e permissões GCP e proxies cloudSQL.",
          "Criou pipelines reutilizáveis para gerenciar a configuração de aplicações Node.js com NPM, cache NPM e tratamento do registro NPM no GitHub."
        ]
      },
      {
        role: "Engenheiro DevOps",
        company: "Andela",
        location: "Nova York, NY, EUA",
        period: "Jun 2022 — Mai 2023",
        highlights: [
          "Contratado como engenheiro interno de devops após trabalhar alguns meses para o Cliente Andela pela Holonic Consulting.",
          "Trabalhou na recriação de todo o ecossistema v1 para o ecossistema v2 usando Terraform, GKE, ArgoCD, GitHub Actions e Jenkins, Datadog, Kong, Istio Service Mesh migrando aplicações Cloud Functions v1, Google App Engines, instâncias VM para GKE e usando External DNS e External Secrets para alavancar um GitOps seguro com gerenciamento de segredos e criação de DNS com Cloudflare.",
          "Criou Bibliotecas Compartilhadas Jenkins com Groovy para simplificar implantações, gerenciamento de segredos, reinícios de aplicações, invocação de jobs, migrações e CRUD de infraestrutura com Terraform.",
          "Configurou o Datadog no cluster, introduziu stacks RUM e APM nas aplicações, e liderou o treinamento de equipes internas sobre como usar e monitorar suas aplicações e também como implantar/reverter/reiniciar/gerenciar cada uma de suas aplicações, adicionou monitoramento sintético e testes e2e com Cypress para verificações dos principais comportamentos da aplicação. Adicionou jobs com contêineres de vida curta e cronjobs dentro do Kubernetes com proxies para o banco de dados e aproveitou a comunicação serviço-a-serviço com regras istio customizadas para jobs em segundo plano e comunicação de aplicações, melhorando a segurança e latência das aplicações.",
          "Criou Plugins Kong para autorização e regras de encaminhamento durante migrações de aplicações de V1 para v2 usando Lua e Golang.",
          "Criou charts Helm para reutilizar em todas as aplicações já com integrações Kong e Istio, probes e padrões para uma aplicação confiável com conexões internas e externas conforme necessário e com uso simples de um repositório template e cli go-lang criado para gerenciar a aplicação e replicar ambientes localmente ou em ambientes transitórios.",
          "Adicionou alertas também em faturamento e economizou mais de 10.000 USD/mensais em faturamento após identificar o mau uso de recursos da v1, resolvendo isso e adicionando alertas e monitoramento para evitar essas situações.",
          "Trabalhou na criação de desafios de entrevista, processo técnico para a área de DevOps e treinamento de novos membros da equipe da área de devops e equipe de dev.",
          "Criou e manteve scripts bash para implantações no GitHub Actions e configurações locais, incluindo configuração local e permissões GCP e proxies CloudSQL.",
          "Criou pipelines reutilizáveis para gerenciar a configuração de aplicações Node.js com NPM, cache NPM e tratamento do registro NPM no GitHub.",
          "Configurou o NPM para gerenciamento seguro e eficiente de pacotes, incluindo a configuração de registros NPM privados, gerenciamento de tokens de autenticação e otimização de estratégias de cache.",
          "Desenvolveu bibliotecas compartilhadas Jenkins com Groovy para implantações, gerenciamento de segredos, acionamento de jobs, sincronização ArgoCD, rollbacks e criação de permissões temporárias."
        ]
      },
      {
        role: "Engenheiro DevOps",
        company: "Holonic",
        location: "Vale do Silício, CA, EUA",
        period: "Out 2021 — Jun 2022",
        highlights: [
          "Trabalhou em aceleradora de startups do Vale do Silício para o Cliente Andela, criando POC para a nova versão da aplicação e alavancando a implantação GCP com Kubernetes e Microsserviços com GitHub Actions.",
          "Trabalhou no planejamento de soluções e tecnologias e no design da nova proposta para uma versão da nova aplicação de talentos usando principalmente GCP, Kubernetes e Terraform para Infraestrutura como Código.",
          "Responsável por toda a configuração de projetos GCP, ambientes, grupos de gerenciamento de usuários, roles e permissões com roles IAM customizadas e implantação usando princípios de menor privilégio.",
          "Trabalhou ativamente fazendo demonstrações para o cliente, apresentando cada nova entrega e POC da aplicação com Kubernetes, kong e nginx como gateways de entrada, e gerenciando Elastic Stack para a primeira versão de ML da aplicação."
        ]
      },
      {
        role: "Devops",
        company: "Webjump (Nestle / Ambev)",
        location: "São Paulo",
        period: "Fev 2019 — Out 2021",
        highlights: [
          "Responsável por manter pipelines automatizados, fluxos de desenvolvimento e estratégias de monitoramento entre aplicações na Webjump.",
          "Aumentou a cobertura de testes para frontend, backend e scripts de desempenho, integrando-os em pipelines automatizados.",
          "Criou e manteve uma Stack ELK (ElasticSearch, Logstash, Kibana) para monitoramento eficaz de aplicações e falhas de sistema.",
          "Desenvolveu e manteve Stacks de Infraestrutura como Código usando CloudFormation, Terraform e Packer.",
          "Gerenciou múltiplos ambientes de servidores e scripts usando Ansible.",
          "Implementou processos de Integração Contínua com Azure Pipelines e desenvolveu uma solução para escalar testes usando AWS ECS.",
          "Criou e gerenciou contêineres Docker para ambientes de teste, Docker Registry e Fargate Tasks do ECR.",
          "Escalou soluções de teste de Serviços usando Node.js com Lambda Triggers baseados em parâmetros Customizados de Pipeline.",
          "Executou, manteve e reuniu relatórios de Testes de Carga baseados em saídas da Aplicação e Infraestrutura.",
          "Criou e atualizou novos testes e pipelines de desenvolvimento do zero.",
          "Desenvolveu e implementou o ecossistema Jenkins com Estratégia de Spot Slaves para múltiplos projetos.",
          "Implementou Testes de Benchmarking de Desempenho Contínuo com Jenkins, K2 e Grafana/NewRelic para rastrear problemas de desempenho entre melhorias da plataforma.",
          "Gerenciou Pipelines Azure DevOps, lidou com segredos e trabalhou na auditoria de recursos Azure, incluindo soluções customizadas usando Azure SDK e Azure CLI.",
          "Experiência no desenvolvimento e manutenção de aplicações e ferramentas de monitoramento em AWS, GCP e Azure.",
          "Trabalhou no desenvolvimento e manutenção de aplicações na Platform.SH.",
          "Participou de reuniões Scrum e entrevistas técnicas, contribuindo com experiência para o crescimento e desenvolvimento da equipe."
        ]
      },
      {
        role: "Engenheiro de Desenvolvimento de Software em Testes",
        company: "Rockstar Coders",
        location: "Chicago, IL, Estados Unidos",
        period: "Set 2018 — Fev 2019",
        highlights: [
          "Responsável por implementar automação com Ruby e NodeJS em vários projetos na RockStarCoders.",
          "Criou testes Web e de Serviço para ambientes locais e de integração.",
          "Construiu e escalou todos os testes usando CircleCI e recursos AWS, utilizando estruturas baseadas em contêineres.",
          "Desenvolveu e manteve soluções de automação de testes e processos usando NodeJS, Ruby, Bash Scripts e Webdriver.io.",
          "Utilizou Cypress para Automação Web em projetos específicos.",
          "Entregou trabalho de qualidade aderindo aos cronogramas e especificações do projeto."
        ]
      },
      {
        role: "Engenheiro de Desenvolvimento de Software em Testes",
        company: "Webjump (Ambev / InBev)",
        location: "São Paulo",
        period: "Fev 2018 — Set 2018",
        highlights: [
          "Implementou automação com Ruby em um ambiente PHP (framework Magento) para testes frontend e backend no ParceiroAmbev e Projeto LAS (InBev) na Webjump.",
          "Aumentou a cobertura de testes para frontend, backend e scripts de desempenho.",
          "Implementou um processo de Integração Contínua usando CircleCI com instâncias paralelas de contêineres customizados para ambientes de teste.",
          "Criou e gerenciou contêineres Docker para ambientes de teste, garantindo um fluxo de trabalho suave.",
          "Participou de reuniões Scrum e entrevistas técnicas, contribuindo com experiência para o crescimento e desenvolvimento da equipe."
        ]
      },
      {
        role: "Engenheiro de Desenvolvimento de Software em Testes",
        company: "Vilas Boas IT",
        location: "São Paulo",
        period: "Jun 2016 — Jan 2018",
        highlights: [
          "Liderou cada squad de QA na VilasBoasIT, estudando e implementando novas tecnologias para desenvolver soluções baseadas nas necessidades do squad.",
          "Definiu o guia de estilo para todos os squads e conduziu revisões de código para novas implementações no Framework de Teste Automatizado principal.",
          "Criou relatórios customizados para todas as segmentações de Automação (API/Web/Mobile), fornecendo dados para KPI de cada ambiente de squad.",
          "Iniciou a implementação de frameworks de teste para clientes do zero usando Cucumber e Capybara (wrapper Selenium-Webdriver) com RSpec para casos Web.",
          "Usou Cucumber com rest-client e RSpec para casos API, e Cucumber com Calabash-iOS/Calabash-Android para casos Mobile.",
          "Criou e gerenciou contêineres Docker para executar testes de Desempenho/Web/Mobile/API no Jenkins.",
          "Gerenciou Máquinas AWS (EC2) para configurar Jenkins e dependências de sistema para cada caso de teste.",
          "Colaborou com a equipe para garantir que os projetos fossem entregues dentro do cronograma e orçamento, atendendo às especificações exigidas."
        ]
      },
      {
        role: "Líder de QA",
        company: "Anheuser-Busch InBev",
        location: "Campinas",
        period: "Out 2016 — Abr 2017",
        highlights: [
          "Estudou e implementou novas tecnologias como Líder de QA, desenvolvendo soluções baseadas nas necessidades do squad.",
          "Definiu o guia de estilo para todos os squads e conduziu revisões de código para novas implementações no Framework de Teste Automatizado principal.",
          "Criou relatórios customizados para todas as segmentações de Automação (API/Web/Mobile), fornecendo dados de KPI de cada ambiente de squad.",
          "Iniciou a implementação de frameworks de teste para clientes do zero usando Cucumber, Capybara (wrapper Selenium-Webdriver) e RSpec para casos Web.",
          "Utilizou Cucumber com rest-client e RSpec para casos API, e Cucumber com Calabash-iOS/Calabash-Android para casos Mobile; gerenciou Xamarin Test Cloud para executar testes mobile.",
          "Criou Scripts de Desempenho usando Linguagem Scala e ferramentas Gatling para garantir o equilíbrio e escalabilidade da aplicação, focando em tempos de carga/resposta.",
          "Colaborou com a equipe para garantir que os projetos fossem entregues dentro do cronograma, orçamento e especificações exigidas."
        ]
      },
      {
        role: "Analista Sênior de Garantia de Qualidade",
        company: "Geru",
        location: "São Paulo",
        period: "Mar 2016 — Jul 2016",
        highlights: [
          "Analisou e escreveu cenários usando Gherkin, seguindo práticas BDD como profissional de Garantia de Qualidade.",
          "Criou planos de teste automatizados e rastreou bugs usando sessões de issues do GitHub.",
          "Utilizou o GitHub para versionamento eficaz de testes e scripts.",
          "Executou testes manuais, testes automatizados, testes de regressão e testes de fumaça no Frontend.",
          "Desenvolveu soluções de teste Frontend usando Ruby, JRuby, JavaScript e Selenium-Webdriver com Capybara e RSpec, garantindo a qualidade e escalabilidade da aplicação.",
          "Experiência em metodologias Ágeis como Kanban e Scrum, contribuindo com experiência para o crescimento e desenvolvimento da equipe."
        ]
      },
      {
        role: "Analista de Garantia de Qualidade",
        company: "Dafiti",
        location: "São Paulo",
        period: "Jul 2015 — Fev 2016",
        highlights: [
          "Analisou e escreveu cenários usando Gherkin, seguindo práticas BDD como profissional de Garantia de Qualidade.",
          "Utilizou o Jira para rastreamento e relatório de bugs.",
          "Criou planos de teste automatizados e participou de reuniões para reunir requisitos e sugerir melhorias no produto.",
          "Envolvido na análise de requisitos e especificação funcional do sistema.",
          "Utilizou GitHub e BitBucket para versionamento eficaz de testes e scripts.",
          "Executou testes manuais, testes automatizados, testes de regressão e testes de fumaça no Frontend, garantindo a qualidade da aplicação.",
          "Desenvolveu soluções de teste Frontend usando Ruby, JavaScript e Selenium-Webdriver com Capybara e RSpec.",
          "Conduziu testes de desempenho usando JMeter, garantindo o desempenho ideal da aplicação.",
          "Experiência em metodologias Ágeis como Kanban e Scrum, contribuindo com experiência para o crescimento e desenvolvimento da equipe."
        ]
      },
      {
        role: "Analista de Garantia de Qualidade - Freelancer",
        company: "Dafiti",
        location: "São Paulo",
        period: "Jun 2015 — Out 2015",
        highlights: [
          "Analisou e desenvolveu Testes Automatizados para aplicações móveis (iOS) como profissional de Garantia de Qualidade.",
          "Escreveu cenários em Gherkin usando práticas BDD e desenvolveu soluções usando Ruby com Calabash, RSpec e Cucumber.",
          "Garantiu a qualidade e escalabilidade de aplicações móveis através de experiência em testes de automação.",
          "Comprometido em entregar trabalho de qualidade aderindo aos cronogramas e especificações do projeto.",
          "Contribuiu com experiência para o crescimento e desenvolvimento da equipe, trabalhando colaborativamente para alcançar os melhores resultados."
        ]
      }
    ],
    courses: [
      "Bootcamp Ruby on Rails, Campus Code",
      "Fundamentos ITIL V3, Impacta"
    ],
    achievements: [
      {
        title: "Otimização de Custos e Eficiência em Nuvem",
        description: "Reduziu o faturamento do GCP em 20% ao migrar para Cloud Run/GKE e economizou mais de US$ 10.000/mês identificando e resolvendo má alocação de recursos."
      },
      {
        title: "Domínio em GitOps e CI/CD",
        description: "Simplificou implantações usando ArgoCD, GitHub Actions e Jenkins, habilitando ambientes efêmeros, rollbacks automatizados e portões de liberação seguros."
      },
      {
        title: "Observabilidade Avançada",
        description: "Elevou o monitoramento de sistemas com Datadog, OpenTelemetry, Prometheus e Grafana, definindo SLIs/SLOs e melhorando significativamente os tempos de resposta de on-call."
      },
      {
        title: "Infraestrutura como Código (IaC)",
        description: "Gerenciou infraestruturas de nuvem complexas na AWS e GCP usando Terraform, Pulumi e Crossplane com rigorosa aplicação de política como código (OPA/Kyverno)."
      },
      {
        title: "Garantia de Qualidade e Automação",
        description: "Construiu frameworks robustos de testes E2E e de desempenho do zero usando Playwright, Cypress e K6, garantindo alta confiabilidade para microsserviços críticos."
      }
    ],
    projects: [
      {
        name: "ReviewForge",
        url: "https://github.com/AxeForging/reviewforge",
        description: "Revisor de código com IA e personalidade — GitHub Action & CLI. O ReviewForge revisa pull requests do GitHub usando IA (OpenAI, Anthropic ou Gemini), postando comentários linha a linha com níveis de severidade e vereditos de revisão. Suporta personas de revisor que adicionam personalidade às revisões, saída multilíngue e relatórios de aprendizado para o crescimento do desenvolvedor.",
        tags: ["IA", "GitHub Actions", "CLI"]
      },
      {
        name: "aigate",
        url: "https://github.com/AxeForging/aigate",
        description: "Sandbox de nível de SO para agentes de codificação de IA. Isolamento de arquivo, comando e rede imposto pelo kernel para Claude Code, Cursor, Copilot, Aider e qualquer ferramenta de IA. Como um venv Python, mas para permissões de IA.",
        tags: ["Segurança", "Sandbox", "IA"]
      },
      {
        name: "pb",
        url: "https://github.com/AxeForging/pb",
        description: "CLI de área de transferência multiplataforma para pipes. Funciona como pbcopy/pbpaste do macOS em qualquer SO.",
        tags: ["CLI", "Ferramentas", "Multiplataforma"]
      }
    ]
  },
  es: {
    name: "Lucas Machado",
    title: "Ingeniero DevOps",
    contact: {
      location: "Sevilla, España",
      phone: "+34 661 99 29 07",
      email: "lucas.dpmachado@gmail.com",
      linkedin: "lucaspmachado"
    },
    profile: "Ingeniero DevOps/Plataforma (10+ años) construyendo sistemas de producción en AWS/GCP y Kubernetes. Implementó GitOps en EKS/GKE con Argo CD, estandarizó templates Helm y entornos efímeros basados en PR con datos enmascarados, TTLs y control de costes. Construyó CI/CD seguro (CircleCI, GitHub Actions, self-hosted runners) con caché, paralelismo, artefactos, puertas de release (Playwright, k6, OPA/Kyverno) y rollbacks automáticos. IaC con Terraform/Pulumi para clusters, IAM y redes. Elevó la observabilidad (Datadog/Prometheus/Grafana, OpenTelemetry), definió SLIs/SLOs y health checks, mejoró el on-call. Colaboración multidisciplinar; experiencia práctica con Node.js/TS, Python, Istio/Kong; impulsa entregas fiables y eficientes en costes.",
    skills: [
      "Git", "Docker", "Kubernetes", "Linux", "Google Cloud Platform", "Amazon AWS",
      "Cypress", "Golang", "NodeJS", "Ruby", "Bash Scripting", "Elasticsearch",
      "NewRelic", "Prometheus", "SQL / NoSQL", "DataDog", "Jenkins", "Grafana",
      "Istio", "Kong Gateway", "GitOps", "CI/CD", "Playwright", "ArgoCD"
    ],
    languages: [
      { name: "Portugués", level: "Nativo" },
      { name: "Español; Castellano", level: "Avanzado" },
      { name: "Inglés", level: "Fluido" }
    ],
    experience: [
      {
        role: "Ingeniero DevOps",
        company: "Demand.io",
        location: "Los Ángeles, California",
        period: "Sep 2024 — Presente",
        highlights: [
          "Creó templates de despliegue reutilizables para configurar rápidamente nuevas aplicaciones con entornos de dev, efímeros y prod listos para usar, incluyendo monitoreo automatizado, aprovisionamiento de infraestructura e integración de DNS.",
          "Migró múltiples microservicios (TypeScript, Python y PHP) a flujos de despliegue continuo usando ArgoCD en clusters GKE, habilitando prácticas GitOps, simplificando despliegues, gestión de releases, rollbacks y entornos efímeros.",
          "Implementó tests e2e desde cero con Playwright (web y APIs) manteniendo sus flujos en GitHub Actions con informes accesibles a través de URL interna privada con implementación personalizada de Allure.",
          "Desplegó aplicación OpenWebUI propia con múltiples integraciones MCP como BigQuery, GitHub, Notion, Slack, ElasticSearch y GCP.",
          "Creó suites de test k6 para la mayoría de microservicios con configuraciones de escalado usando self-hosted runners, exportando resultados en tiempo real a InfluxDB.",
          "Construyó flujos GitHub Actions seguros y self-hosted runners para ejecutar jobs dentro de VPCs internas, mejorando la seguridad y el aislamiento usando workload identity pools para autenticación en la nube.",
          "Desplegó y extendió charts Helm para aplicaciones, creando charts específicos para estandarizar despliegues, gestionando CronJobs, Ingress, ConfigMaps, recursos de infraestructura con Crossplane y secretos con ExternalSecrets.",
          "Migró la infraestructura existente a IaC usando Pulumi con TypeScript, integrando GitHub Actions para validación y gestión de recursos GKE, IAM, usuarios, roles y grupos.",
          "Desarrolló y mantuvo pipelines de datos con Cloud Dataflow para flujos CDC, sincronizando CloudSQL (MySQL y PostgreSQL) con BigQuery.",
          "Implementó instrumentación personalizada de telemetría integrando OpenTelemetry, Elastic Cloud y GCP Profiling para observabilidad completa.",
          "Mejoró el monitoreo añadiendo checks sintéticos y políticas de alerta basadas en métricas y logs de GCP.",
          "Creó flujos GitHub Actions reutilizables para despliegues, gestión de secretos, validación de IaC, tests E2E y check-ins con puertas de seguridad para apps Python, NodeJS y Frontend.",
          "Inició migración de Frontend de GKE a Cloudflare Pages con estrategia de caché en CDN y caché dinámico con KV.",
          "Configuró Cloudflare Zero Trust con Cloudflare Access para herramientas e aplicaciones internas en demand.io.",
          "Implementó política como código con OPA para recursos Pulumi y Kyverno para validar recursos Kubernetes con etiquetas, recursos y anotaciones adecuadas."
        ]
      },
      {
        role: "Ingeniero de Automatización",
        company: "Kea",
        location: "Mountain View, California",
        period: "Ene 2024 — Sep 2024",
        highlights: [
          "Mejoró el monitoreo de aplicaciones con Grafana, Faro, Loki, Tempo, OpenTelemetry y APM Stack, combinado con tests de rendimiento K6, para identificar memory leaks y apps con mal comportamiento.",
          "Implementó monitoreo sintético para microservicios, configurando alertas para fallos de interacción, retrasos de respuesta e indisponibilidad de integraciones de terceros.",
          "Desarrolló cobertura E2E con Playwright, creando flujos para tests nocturnos. Desplegó dashboard de monitoreo en EKS con charts Helm.",
          "Mejoró los tests de integración con Playwright para varios servicios, manteniendo cobertura unitaria con Jest y Nock.",
          "Gestionó procesos de on-call y release, asegurando despliegues seguros en producción con git flow. Desarrolló charts Helm y utilizó Terraform con GitHub Actions.",
          "Creó y mantuvo scripts bash para despliegues en GitHub Actions y configuraciones locales, incluyendo túneles Cloudflare y configuración AWS.",
          "Creó pipelines reutilizables para gestionar aplicaciones Node.js con NPM y caché NPM.",
          "Creó charts distribuidos Helm para gestión dinámica de aplicaciones con estrategia multi-source junto con ArgoCD."
        ]
      },
      {
        role: "Ingeniero DevOps",
        company: "Kiwify",
        location: "São Paulo",
        period: "May 2023 — Oct 2023",
        highlights: [
          "Migró aplicaciones de GCP VM Instances, Google App Engine y CloudFunctions V1 a Cloud Run y GKE con Helm, GitOps y ArgoCD, reduciendo la facturación al menos un 20%.",
          "Desplegó la stack de monitoreo DataDog en Kubernetes y añadió monitoreo sintético y alertas basadas en problemas de infraestructura.",
          "Desarrolló flujos GitHub Actions reutilizables para despliegues estáticos, Cloudflare Workers y Pages, reinicio y rollback de ArgoCD, integrando SonarQube, Nuclei, Snyk y Semgrep.",
          "Migró la infraestructura a Terraform con backend GCS, creando módulos para CloudSQL. Automatizó despliegues con GitHub Actions.",
          "Creó scripts Golang para replicar versiones exactas de secretos y dependencias en entornos efímeros para depuración.",
          "Inició la migración de GKE/GCS a EKS/S3, trabajando en entorno multi-cloud con AWS SSO integrado con Google Workspace.",
          "Creó y mantuvo scripts bash para despliegues y configuraciones locales de GCP y proxies CloudSQL.",
          "Creó pipelines reutilizables para gestionar aplicaciones Node.js con NPM y caché NPM."
        ]
      },
      {
        role: "Ingeniero DevOps",
        company: "Andela",
        location: "Nueva York, NY, EE.UU.",
        period: "Jun 2022 — May 2023",
        highlights: [
          "Contratado como ingeniero interno de DevOps tras trabajar meses para el cliente Andela desde Holonic Consulting.",
          "Trabajó en la recreación del ecosistema v1 a v2 usando Terraform, GKE, ArgoCD, GitHub Actions, Jenkins, Datadog, Kong e Istio Service Mesh, migrando Cloud Functions v1, App Engines y VM instances a GKE.",
          "Creó Shared Libraries de Jenkins con Groovy para despliegues, gestión de secretos, migraciones e infraestructura CRUD con Terraform.",
          "Configuró Datadog en el cluster, introdujo stacks RUM y APM, lideró formación de equipos internos. Añadió monitoreo sintético y tests e2e con Cypress.",
          "Creó Plugins de Kong para autorización y reglas de reenvío durante migraciones de V1 a v2 usando Lua y Golang.",
          "Creó charts Helm reutilizables con integraciones Kong e Istio, probes y patrones para aplicaciones fiables.",
          "Añadió alertas de facturación y ahorró más de 10.000 USD/mes identificando y corrigiendo el mal uso de recursos de v1.",
          "Trabajó en desafíos de entrevista, proceso técnico para el área DevOps y formación de nuevos miembros del equipo."
        ]
      },
      {
        role: "Ingeniero DevOps",
        company: "Holonic",
        location: "Silicon Valley, CA, EE.UU.",
        period: "Oct 2021 — Jun 2022",
        highlights: [
          "Trabajó en aceleradora de startups de Silicon Valley para el cliente Andela, creando POC para su nueva versión de aplicación con GCP, Kubernetes y Microservicios con GitHub Actions.",
          "Responsable de toda la configuración de proyectos GCP, entornos, grupos de usuarios, roles y permisos con roles IAM personalizados usando principios de mínimo privilegio.",
          "Realizó demos para el cliente, presentando cada entrega y POC con Kubernetes, Kong y Nginx como gateways, gestionando Elastic Stack para la primera versión ML de la app."
        ]
      },
      {
        role: "DevOps",
        company: "Webjump (Nestle / Ambev)",
        location: "São Paulo",
        period: "Feb 2019 — Oct 2021",
        highlights: [
          "Responsable de mantener pipelines automatizados, flujos de desarrollo y estrategias de monitoreo entre aplicaciones en Webjump.",
          "Aumentó la cobertura de tests para frontend, backend y scripts de rendimiento, integrándolos en pipelines automatizados.",
          "Creó y mantuvo una Stack ELK para monitoreo efectivo de aplicaciones y fallos del sistema.",
          "Desarrolló y mantuvo Stacks IaC usando CloudFormation, Terraform y Packer.",
          "Implementó Integración Continua con Azure Pipelines y desarrolló una solución para escalar tests usando AWS ECS.",
          "Implementó Benchmarking de Rendimiento Continuo con Jenkins, K6 y Grafana/NewRelic.",
          "Gestionó Azure DevOps Pipelines y auditó recursos Azure con Azure SDK y Azure CLI."
        ]
      },
      {
        role: "Ingeniero de Desarrollo de Software en Tests",
        company: "Rockstar Coders",
        location: "Chicago, IL, EE.UU.",
        period: "Sep 2018 — Feb 2019",
        highlights: [
          "Responsable de implementar automatización con Ruby y NodeJS en varios proyectos en RockStarCoders.",
          "Construyó y escaló todos los tests usando CircleCI y recursos AWS con estructuras basadas en contenedores.",
          "Desarrolló y mantuvo soluciones de automatización usando NodeJS, Ruby, Bash Scripts y Webdriver.io."
        ]
      },
      {
        role: "Ingeniero de Desarrollo de Software en Tests",
        company: "Webjump (Ambev / InBev)",
        location: "São Paulo",
        period: "Feb 2018 — Sep 2018",
        highlights: [
          "Implementó automatización con Ruby en entorno PHP (Magento) para tests frontend y backend en ParceiroAmbev y Proyecto LAS (InBev).",
          "Implementó Integración Continua usando CircleCI con instancias paralelas de contenedores personalizados."
        ]
      },
      {
        role: "Ingeniero de Desarrollo de Software en Tests",
        company: "Vilas Boas IT",
        location: "São Paulo",
        period: "Jun 2016 — Ene 2018",
        highlights: [
          "Lideró cada squad de QA en VilasBoasIT, implementando nuevas tecnologías y definiendo la guía de estilo para todos los squads.",
          "Creó reportes personalizados para todas las segmentaciones de Automatización (API/Web/Mobile).",
          "Inició la implementación de frameworks de test desde cero usando Cucumber, Capybara y RSpec."
        ]
      },
      {
        role: "Líder de QA",
        company: "Anheuser-Busch InBev",
        location: "Campinas",
        period: "Oct 2016 — Abr 2017",
        highlights: [
          "Implementó nuevas tecnologías como Líder de QA y definió la guía de estilo para todos los squads.",
          "Creó Scripts de Rendimiento usando Scala y Gatling para garantizar el equilibrio y escalabilidad de la aplicación."
        ]
      },
      {
        role: "Analista Sénior de QA",
        company: "Geru",
        location: "São Paulo",
        period: "Mar 2016 — Jul 2016",
        highlights: [
          "Analizó y escribió escenarios usando Gherkin siguiendo prácticas BDD.",
          "Desarrolló soluciones de test Frontend usando Ruby, JRuby, JavaScript y Selenium-Webdriver con Capybara y RSpec."
        ]
      },
      {
        role: "Analista de QA",
        company: "Dafiti",
        location: "São Paulo",
        period: "Jul 2015 — Feb 2016",
        highlights: [
          "Analizó y escribió escenarios usando Gherkin siguiendo prácticas BDD.",
          "Desarrolló soluciones de test Frontend usando Ruby, JavaScript y Selenium-Webdriver.",
          "Realizó tests de rendimiento usando JMeter."
        ]
      },
      {
        role: "Analista de QA - Freelancer",
        company: "Dafiti",
        location: "São Paulo",
        period: "Jun 2015 — Oct 2015",
        highlights: [
          "Analizó y desarrolló Tests Automatizados para aplicaciones móviles (iOS).",
          "Escribió escenarios en Gherkin usando BDD y desarrolló soluciones usando Ruby con Calabash, RSpec y Cucumber."
        ]
      }
    ],
    courses: [
      "Bootcamp Ruby on Rails, Campus Code",
      "Fundamentos ITIL V3, Impacta"
    ],
    achievements: [
      {
        title: "Optimización de Costes y Eficiencia en la Nube",
        description: "Redujo la facturación de GCP un 20% migrando a Cloud Run/GKE y ahorró más de 10.000 USD/mes identificando y resolviendo la mala asignación de recursos."
      },
      {
        title: "Dominio de GitOps y CI/CD",
        description: "Simplificó despliegues usando ArgoCD, GitHub Actions y Jenkins, habilitando entornos efímeros, rollbacks automáticos y puertas de release seguras."
      },
      {
        title: "Observabilidad Avanzada",
        description: "Elevó el monitoreo del sistema con Datadog, OpenTelemetry, Prometheus y Grafana, definiendo SLIs/SLOs y mejorando significativamente los tiempos de respuesta de on-call."
      },
      {
        title: "Infraestructura como Código (IaC)",
        description: "Gestionó infraestructuras cloud complejas en AWS y GCP usando Terraform, Pulumi y Crossplane con aplicación estricta de política como código (OPA/Kyverno)."
      },
      {
        title: "Aseguramiento de Calidad y Automatización",
        description: "Construyó frameworks robustos de tests E2E y de rendimiento desde cero usando Playwright, Cypress y K6, garantizando alta fiabilidad para microservicios críticos."
      }
    ],
    projects: [
      {
        name: "ReviewForge",
        url: "https://github.com/AxeForging/reviewforge",
        description: "Revisor de código con IA y personalidad — GitHub Action & CLI. ReviewForge revisa pull requests de GitHub usando IA (OpenAI, Anthropic o Gemini), publicando comentarios línea a línea con niveles de severidad y veredictos. Soporta personas de revisor, salida multilingüe e informes de aprendizaje.",
        tags: ["IA", "GitHub Actions", "CLI"]
      },
      {
        name: "aigate",
        url: "https://github.com/AxeForging/aigate",
        description: "Sandbox a nivel de SO para agentes de codificación con IA. Aislamiento de archivos, comandos y red aplicado por el kernel para Claude Code, Cursor, Copilot, Aider y cualquier herramienta de IA. Como un venv de Python pero para permisos de IA.",
        tags: ["Seguridad", "Sandbox", "IA"]
      },
      {
        name: "pb",
        url: "https://github.com/AxeForging/pb",
        description: "CLI de portapapeles multiplataforma para pipes. Funciona como pbcopy/pbpaste de macOS en cualquier SO.",
        tags: ["CLI", "Herramientas", "Multiplataforma"]
      }
    ]
  }
};
