import builder from './api-common';

/* test */
export const categoryList = builder.build({
  baseUrl: builder.BASEURL_01,
  url: '/',
  method: 'GET',
  simulation: true,
  simulator: './static/api-simulation/category/parentList.json'
});
