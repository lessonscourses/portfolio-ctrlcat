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
    stack: ['Nuxt3', 'MongoDB', 'REST API'],
    featured: true,
    content: {
      en: {
        title: 'Profiterm',
        shortDescription: 'Digital platform for a construction company with service catalog, applications and admin logic.',
        fullDescription: 'A digital platform for a construction company with a service catalog, application system, and admin logic. Built with a focus on scalability and future integration with API and CRM systems.',
        challenge: 'The client needed a modern, scalable platform that could handle service catalog management, customer applications, and be ready for future CRM integration.',
        solution: 'Built a Nuxt3-based platform with MongoDB backend, featuring a dynamic service catalog, application management system, and extensible admin panel ready for API/CRM integration.',
        features: [
          'Dynamic service catalog',
          'Application management system',
          'Admin panel with business logic',
          'Scalable architecture',
          'API/CRM integration ready',
        ],
      },
      ru: {
        title: 'Profiterm',
        shortDescription: 'Цифровая платформа для строительной компании с каталогом услуг, заявками и админ-логикой.',
        fullDescription: 'Цифровая платформа для строительной компании с каталогом услуг, заявками и админ-логикой. Создана с акцентом на масштабируемость и будущую интеграцию с API и CRM-системами.',
        challenge: 'Клиенту требовалась современная масштабируемая платформа для управления каталогом услуг, заявками клиентов и готовая к интеграции с CRM.',
        solution: 'Создана платформа на Nuxt3 с MongoDB, включающая динамический каталог услуг, систему управления заявками и расширяемую админ-панель.',
        features: [
          'Динамический каталог услуг',
          'Система управления заявками',
          'Админ-панель с бизнес-логикой',
          'Масштабируемая архитектура',
          'Готовность к интеграции API/CRM',
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
    stack: ['React', 'API integration'],
    featured: true,
    content: {
      en: {
        title: 'AI4Car',
        shortDescription: 'AI system concept for vehicle diagnostics and predictive maintenance.',
        fullDescription: 'A concept AI system for vehicle diagnostics and predictive maintenance. The interface is focused on data visualization and analytics interaction.',
        challenge: 'Creating an intuitive interface for complex diagnostic data and predictive analytics that would be accessible to both car owners and service professionals.',
        solution: 'Developed a React-based interface with clear data visualization, interactive analytics dashboards, and seamless API integration for diagnostic services.',
        features: [
          'Data visualization dashboard',
          'Predictive maintenance interface',
          'Analytics interaction',
          'API integration',
          'User-friendly diagnostics display',
        ],
      },
      ru: {
        title: 'AI4Car',
        shortDescription: 'Концепт AI-системы для диагностики автомобилей и предиктивного обслуживания.',
        fullDescription: 'Концепт AI-системы для диагностики автомобилей и предиктивного обслуживания. Интерфейс ориентирован на визуализацию данных и взаимодействие с аналитикой.',
        challenge: 'Создание интуитивного интерфейса для сложных диагностических данных и предиктивной аналитики, доступного как владельцам авто, так и профессионалам.',
        solution: 'Разработан React-интерфейс с понятной визуализацией данных, интерактивными дашбордами и интеграцией с диагностическими API.',
        features: [
          'Дашборд визуализации данных',
          'Интерфейс предиктивного ТО',
          'Взаимодействие с аналитикой',
          'Интеграция с API',
          'Понятное отображение диагностики',
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
    stack: ['Nuxt3'],
    featured: true,
    content: {
      en: {
        title: 'Autodor',
        shortDescription: 'Corporate website with project portfolio and equipment catalog.',
        fullDescription: 'A corporate website with a portfolio of completed projects and equipment catalog. Focus on company presentation and convenient project navigation.',
        challenge: 'The company needed an effective way to present their completed infrastructure projects and equipment fleet to potential clients and partners.',
        solution: 'Created a clean Nuxt3 website focused on visual presentation of projects, intuitive navigation through the portfolio, and detailed equipment specifications.',
        features: [
          'Project portfolio with galleries',
          'Equipment catalog',
          'Company presentation',
          'Convenient project navigation',
          'Mobile-optimized experience',
        ],
      },
      ru: {
        title: 'Автодор',
        shortDescription: 'Корпоративный сайт с портфолио реализованных объектов и каталогом техники.',
        fullDescription: 'Корпоративный сайт с портфолио реализованных объектов и каталогом техники. Фокус на презентации компании и удобной навигации по проектам.',
        challenge: 'Компании требовался эффективный способ представить реализованные инфраструктурные проекты и парк техники потенциальным клиентам.',
        solution: 'Создан чистый сайт на Nuxt3 с фокусом на визуальную презентацию проектов, интуитивную навигацию и подробные характеристики техники.',
        features: [
          'Портфолио с галереями',
          'Каталог техники',
          'Презентация компании',
          'Удобная навигация по проектам',
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
    stack: ['Nuxt3'],
    featured: true,
    content: {
      en: {
        title: 'CRM Dashboard',
        shortDescription: 'Client management panel with analytics and sales funnel.',
        fullDescription: 'A client management panel with analytics and sales funnel. The project is focused on working with data and business metrics in real-time.',
        challenge: 'The sales team needed a centralized dashboard for client management with real-time analytics and clear sales funnel visualization.',
        solution: 'Developed a Nuxt3 dashboard with real-time data updates, intuitive sales funnel visualization, and comprehensive business metrics tracking.',
        features: [
          'Client management',
          'Sales funnel visualization',
          'Real-time analytics',
          'Business metrics dashboard',
          'Data-driven insights',
        ],
      },
      ru: {
        title: 'CRM Dashboard',
        shortDescription: 'Панель управления клиентами с аналитикой и воронкой продаж.',
        fullDescription: 'Панель управления клиентами с аналитикой и воронкой продаж. Проект ориентирован на работу с данными и бизнес-метриками в реальном времени.',
        challenge: 'Отделу продаж требовалась централизованная панель для управления клиентами с аналитикой в реальном времени и визуализацией воронки.',
        solution: 'Разработан дашборд на Nuxt3 с обновлениями в реальном времени, интуитивной визуализацией воронки и отслеживанием бизнес-метрик.',
        features: [
          'Управление клиентами',
          'Визуализация воронки продаж',
          'Аналитика в реальном времени',
          'Дашборд бизнес-метрик',
          'Инсайты на основе данных',
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
