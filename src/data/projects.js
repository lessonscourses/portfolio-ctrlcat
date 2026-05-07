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
    stack: ['Nuxt3', 'MongoDB', 'REST API', 'SEO'],
    featured: true,
    content: {
      en: {
        title: 'Profiterm',
        shortDescription: 'Corporate website for an HVAC engineering company with admin panel and full project support.',
        fullDescription: 'Full-cycle development of a corporate website for a company specializing in design and installation of heating, water supply, and sewage systems. The project included frontend and backend development, MongoDB database integration, custom admin panel for content management, SEO optimization, and advertising consultation.',
        challenge: 'The client needed a professional online presence that would effectively showcase their engineering services, allow easy content management without technical expertise, and generate leads through search engines and paid advertising.',
        solution: 'Delivered a complete fullstack solution on Nuxt 3 with MongoDB backend and custom admin panel. Implemented SEO optimization for organic traffic growth and provided consultation on Yandex.Direct and Google Ads campaigns. Ongoing support includes feature development based on client requests and technical maintenance.',
        features: [
          'Fullstack development: Nuxt 3 + MongoDB',
          'Custom admin panel for content management',
          'SEO optimization and organic traffic growth',
          'Yandex.Direct & Google Ads consultation',
          'Ongoing support and feature development',
          'Technical maintenance and updates',
        ],
      },
      ru: {
        title: 'Profiterm',
        shortDescription: 'Корпоративный сайт инженерной компании с админ-панелью и полным сопровождением проекта.',
        fullDescription: 'Полный цикл разработки корпоративного сайта для компании, специализирующейся на проектировании и монтаже систем отопления, водоснабжения и канализации. Проект включал разработку frontend и backend, интеграцию с MongoDB, создание административной панели для управления контентом, SEO-оптимизацию и консультации по рекламе.',
        challenge: 'Заказчику требовалось профессиональное онлайн-присутствие для эффективной презентации инженерных услуг, удобное управление контентом без технических знаний и привлечение клиентов через поисковые системы и платную рекламу.',
        solution: 'Реализовано комплексное fullstack-решение на Nuxt 3 с backend на MongoDB и кастомной админ-панелью. Выполнена SEO-оптимизация для роста органического трафика, проведены консультации по настройке Яндекс.Директ и Google Ads. Осуществляется постоянная поддержка: доработка функционала по запросам заказчика и техническое сопровождение.',
        features: [
          'Fullstack-разработка: Nuxt 3 + MongoDB',
          'Админ-панель для управления контентом',
          'SEO-оптимизация и рост органического трафика',
          'Консультации по Яндекс.Директ и Google Ads',
          'Постоянная поддержка и развитие проекта',
          'Техническое сопровождение и обновления',
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
    stack: ['Nuxt3', 'REST API', 'Enterprise UI'],
    featured: true,
    content: {
      en: {
        title: 'Autodor',
        shortDescription: 'Enterprise search and analytics system for corporate databases and document management.',
        fullDescription: 'Development of a unified search and analytics platform for Autodor corporate databases and document management system. The project involved handling large volumes of regulatory documentation and corporate data, with focus on efficient search, filtering, and navigation interfaces.',
        challenge: 'The organization needed a centralized system to manage and search through extensive regulatory documentation and corporate databases. Users required intuitive interfaces for navigating complex data structures and quick access to relevant documents.',
        solution: 'Developed frontend interfaces and internal dashboards on Nuxt 3 with seamless backend API integration. Designed UX architecture for efficient work with corporate data, implemented advanced search and filtering systems, and created admin interfaces for data and document management.',
        features: [
          'Unified search across corporate databases',
          'Document management dashboard',
          'Advanced filtering and navigation system',
          'Backend API integration',
          'UX design for enterprise data workflows',
          'Admin panel for data management',
        ],
      },
      ru: {
        title: 'Автодор',
        shortDescription: 'Корпоративная поисково-аналитическая система по базам данных и документообороту.',
        fullDescription: 'Разработка единой поисковой и аналитической платформы по корпоративным базам данных и документообороту «Автодор». Проект включал работу с большими объёмами нормативной документации и корпоративных данных, с фокусом на эффективные интерфейсы поиска, фильтрации и навигации.',
        challenge: 'Организации требовалась централизованная система для управления и поиска по обширной нормативной документации и корпоративным базам данных. Пользователям были необходимы интуитивные интерфейсы для навигации по сложным структурам данных и быстрого доступа к документам.',
        solution: 'Разработаны frontend-интерфейсы и внутренние дашборды на Nuxt 3 с интеграцией backend API. Спроектирована UX-архитектура для эффективной работы с корпоративными данными, реализованы продвинутые системы поиска и фильтрации, созданы админ-интерфейсы для управления данными и документооборотом.',
        features: [
          'Единый поиск по корпоративным базам данных',
          'Dashboard управления документооборотом',
          'Продвинутая система фильтрации и навигации',
          'Интеграция с backend API',
          'UX-проектирование для enterprise-данных',
          'Админ-панель управления данными',
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
