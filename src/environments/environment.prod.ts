export const environment = {
  production: true,
  apiUrl: 'https://algamoney-api-deploy-production.up.railway.app/',
  tokenAllowedDomains: [ /algamoney-api-deploy-production.up.railway.app/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/],

  // apiUrl: 'http://localhost:8080',
  // tokenAllowedDomains: [/localhost:8080/],
  // tokenDisallowedRoutes: [/\/oauth\/token/],
};
