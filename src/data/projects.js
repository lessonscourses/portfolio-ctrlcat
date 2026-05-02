// API-ready project data structure
// In production, this would come from GET /api/projects

export const projects = [
  {
    id: 'profiterm',
    slug: 'profiterm',
    url: 'https://profiterm.by/',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    featured: true,
    content: {
      en: {
        title: 'Profiterm',
        shortDescription: 'Corporate website for a construction materials company with product catalog and quote system.',
        fullDescription: 'A comprehensive corporate website for Profiterm, a leading construction materials supplier. The site features a dynamic product catalog, quote request system, and content management capabilities.',
        challenge: 'The client needed a modern web presence that could showcase their extensive product range while providing an easy way for customers to request quotes and information.',
        solution: 'Built a React-based website with a Node.js backend, featuring a searchable product catalog, quote request forms, and an admin panel for content management.',
        features: [
          'Dynamic product catalog with filtering',
          'Quote request system',
          'Responsive design for all devices',
          'SEO optimized structure',
          'Admin panel for content updates',
        ],
      },
      ru: {
        title: 'Profiterm',
        shortDescription: 'Корпоративный сайт компании строительных материалов с каталогом и системой заявок.',
        fullDescription: 'Комплексный корпоративный сайт для Profiterm — ведущего поставщика строительных материалов. Сайт включает динамический каталог продукции, систему запроса коммерческих предложений и возможности управления контентом.',
        challenge: 'Клиенту требовалось современное веб-присутствие для демонстрации широкого ассортимента продукции с удобной системой запроса информации.',
        solution: 'Создан сайт на React с бэкендом на Node.js, включающий каталог с поиском, формы заявок и админ-панель для управления контентом.',
        features: [
          'Динамический каталог с фильтрацией',
          'Система запроса КП',
          'Адаптивный дизайн',
          'SEO-оптимизированная структура',
          'Админ-панель для обновления контента',
        ],
      },
    },
  },
  {
    id: 'ai4car',
    slug: 'ai4car',
    url: 'https://ai4car.app/',
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    ],
    stack: ['React', 'Python', 'TensorFlow', 'REST API', 'AWS'],
    featured: true,
    content: {
      en: {
        title: 'AI4Car',
        shortDescription: 'AI-powered vehicle diagnostics and maintenance prediction platform.',
        fullDescription: 'An innovative application that uses artificial intelligence to analyze vehicle data and predict maintenance needs. The platform helps car owners and service centers make data-driven decisions.',
        challenge: 'Car owners often face unexpected breakdowns and costly repairs. There was a need for a predictive system that could analyze vehicle behavior and warn about potential issues.',
        solution: 'Developed a React frontend with a Python/TensorFlow backend that processes vehicle telemetry data and uses machine learning models to predict maintenance requirements.',
        features: [
          'AI-powered diagnostics',
          'Predictive maintenance alerts',
          'Vehicle health dashboard',
          'Service history tracking',
          'Integration with OBD-II devices',
        ],
      },
      ru: {
        title: 'AI4Car',
        shortDescription: 'Платформа AI-диагностики автомобилей и предсказания технического обслуживания.',
        fullDescription: 'Инновационное приложение, использующее искусственный интеллект для анализа данных автомобиля и прогнозирования потребностей в обслуживании. Платформа помогает владельцам и сервисам принимать решения на основе данных.',
        challenge: 'Владельцы авто часто сталкиваются с неожиданными поломками. Требовалась система предиктивной аналитики поведения автомобиля.',
        solution: 'Разработан React-фронтенд с Python/TensorFlow бэкендом, обрабатывающий телеметрию и использующий ML-модели для прогнозирования ТО.',
        features: [
          'AI-диагностика',
          'Предиктивные уведомления о ТО',
          'Дашборд здоровья автомобиля',
          'История обслуживания',
          'Интеграция с OBD-II устройствами',
        ],
      },
    },
  },
  {
    id: 'autodor',
    slug: 'autodor',
    url: 'https://autodor-new.organicmw.com/',
    images: [
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    featured: true,
    content: {
      en: {
        title: 'Autodor',
        shortDescription: 'Road construction company website with project portfolio and equipment catalog.',
        fullDescription: 'A professional website for a road construction company featuring their project portfolio, equipment fleet, and service offerings. The site effectively communicates the company\'s capabilities and expertise.',
        challenge: 'The company needed to showcase their large-scale infrastructure projects and diverse equipment fleet to potential clients and partners.',
        solution: 'Created a visually impactful React website with smooth animations, project galleries, and detailed equipment specifications integrated with a Node.js backend.',
        features: [
          'Project portfolio with galleries',
          'Equipment catalog',
          'Service descriptions',
          'Contact and quote forms',
          'Mobile-optimized experience',
        ],
      },
      ru: {
        title: 'Автодор',
        shortDescription: 'Сайт дорожно-строительной компании с портфолио проектов и каталогом техники.',
        fullDescription: 'Профессиональный сайт для дорожно-строительной компании с портфолио проектов, парком техники и описанием услуг. Сайт эффективно демонстрирует возможности и экспертизу компании.',
        challenge: 'Компании требовалось представить масштабные инфраструктурные проекты и разнообразный парк техники потенциальным клиентам.',
        solution: 'Создан визуально впечатляющий React-сайт с анимациями, галереями проектов и подробными характеристиками техники.',
        features: [
          'Портфолио с галереями',
          'Каталог техники',
          'Описание услуг',
          'Формы связи и заявок',
          'Мобильная оптимизация',
        ],
      },
    },
  },
  {
    id: 'crm-dashboard',
    slug: 'crm-dashboard',
    url: null,
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    featured: true,
    content: {
      en: {
        title: 'CRM Dashboard',
        shortDescription: 'Custom CRM system with analytics, client management, and sales pipeline.',
        fullDescription: 'A comprehensive CRM dashboard built for a sales team to manage leads, track deals, and analyze performance. Features real-time updates and customizable reporting.',
        challenge: 'The sales team was using spreadsheets and disconnected tools, leading to lost leads and poor visibility into the sales pipeline.',
        solution: 'Developed a custom CRM with React and TypeScript frontend, Node.js API, PostgreSQL database, and Redis for real-time features.',
        features: [
          'Lead and contact management',
          'Sales pipeline visualization',
          'Real-time notifications',
          'Custom reporting and analytics',
          'Team collaboration tools',
        ],
      },
      ru: {
        title: 'CRM Dashboard',
        shortDescription: 'Кастомная CRM-система с аналитикой, управлением клиентами и воронкой продаж.',
        fullDescription: 'Комплексная CRM-панель для отдела продаж: управление лидами, отслеживание сделок и анализ эффективности. Обновления в реальном времени и настраиваемые отчёты.',
        challenge: 'Отдел продаж использовал таблицы и разрозненные инструменты, что приводило к потере лидов и плохой видимости воронки.',
        solution: 'Разработана кастомная CRM на React с TypeScript, Node.js API, PostgreSQL и Redis для real-time функций.',
        features: [
          'Управление лидами и контактами',
          'Визуализация воронки продаж',
          'Уведомления в реальном времени',
          'Кастомные отчёты и аналитика',
          'Инструменты командной работы',
        ],
      },
    },
  },
  {
    id: 'api-service',
    slug: 'api-service',
    url: null,
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'AWS'],
    featured: false,
    content: {
      en: {
        title: 'API Service Platform',
        shortDescription: 'Scalable REST API service with authentication, rate limiting, and documentation.',
        fullDescription: 'A production-ready API service platform that provides a foundation for building secure, scalable web services. Includes authentication, rate limiting, logging, and auto-generated documentation.',
        challenge: 'Multiple projects needed a reliable API foundation with consistent security, monitoring, and documentation patterns.',
        solution: 'Created a reusable API service template with Node.js/Express, featuring JWT authentication, Redis rate limiting, and Swagger documentation.',
        features: [
          'JWT authentication system',
          'Rate limiting with Redis',
          'Auto-generated API docs',
          'Request logging and monitoring',
          'Docker deployment ready',
        ],
      },
      ru: {
        title: 'API Service Platform',
        shortDescription: 'Масштабируемый REST API сервис с аутентификацией, rate limiting и документацией.',
        fullDescription: 'Production-ready API платформа — основа для создания безопасных, масштабируемых веб-сервисов. Включает аутентификацию, rate limiting, логирование и автодокументацию.',
        challenge: 'Несколько проектов требовали надёжную API-основу с единообразной безопасностью, мониторингом и документацией.',
        solution: 'Создан переиспользуемый шаблон API на Node.js/Express с JWT-аутентификацией, Redis rate limiting и Swagger-документацией.',
        features: [
          'JWT аутентификация',
          'Rate limiting на Redis',
          'Автогенерация документации API',
          'Логирование и мониторинг',
          'Готовность к Docker-деплою',
        ],
      },
    },
  },
]

// API-like functions for fetching projects
export async function getProjects() {
  // Simulates API call: GET /api/projects
  return new Promise((resolve) => {
    setTimeout(() => resolve(projects), 100)
  })
}

export async function getProjectById(id) {
  // Simulates API call: GET /api/projects/:id
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const project = projects.find(p => p.id === id || p.slug === id)
      if (project) {
        resolve(project)
      } else {
        reject(new Error('Project not found'))
      }
    }, 100)
  })
}

export async function getFeaturedProjects() {
  // Simulates API call: GET /api/projects?featured=true
  return new Promise((resolve) => {
    setTimeout(() => resolve(projects.filter(p => p.featured)), 100)
  })
}
