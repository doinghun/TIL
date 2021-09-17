const CATEGORY_SLUGS = {
  internet: 'Internet',
  cs: 'Computer Science',
  frontend: 'FrontEnd',
  backend: 'BackEnd',
  devops: 'DevOps',
  data: 'Data',
};

// backend: 'Backend',

const SUB_CATEGORY_SLUGS = {
  general: 'General',
  css: 'CSS',
  html: 'HTML',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  'react-native': 'React Native',
  angular: 'Angular',
  'data-structure': 'Data Structure',
  algorithms: 'Algorithms',
  python: 'Python',
  java: 'Java',
  infra: 'Infra',
  cloud: 'Cloud'
};

// database: 'Database',
// network: 'Network',
// browser: 'Browser',
// 'machine-learning': 'Machine Learning',

const DATE_PREFIX_LENGTH = 11;

module.exports = { CATEGORY_SLUGS, SUB_CATEGORY_SLUGS, DATE_PREFIX_LENGTH };
