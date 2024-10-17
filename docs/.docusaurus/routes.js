import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tools_docs/__docusaurus/debug',
    component: ComponentCreator('/tools_docs/__docusaurus/debug', '917'),
    exact: true
  },
  {
    path: '/tools_docs/__docusaurus/debug/config',
    component: ComponentCreator('/tools_docs/__docusaurus/debug/config', '5ac'),
    exact: true
  },
  {
    path: '/tools_docs/__docusaurus/debug/content',
    component: ComponentCreator('/tools_docs/__docusaurus/debug/content', 'bf4'),
    exact: true
  },
  {
    path: '/tools_docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/tools_docs/__docusaurus/debug/globalData', '708'),
    exact: true
  },
  {
    path: '/tools_docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/tools_docs/__docusaurus/debug/metadata', 'c0a'),
    exact: true
  },
  {
    path: '/tools_docs/__docusaurus/debug/registry',
    component: ComponentCreator('/tools_docs/__docusaurus/debug/registry', '57e'),
    exact: true
  },
  {
    path: '/tools_docs/__docusaurus/debug/routes',
    component: ComponentCreator('/tools_docs/__docusaurus/debug/routes', '3be'),
    exact: true
  },
  {
    path: '/tools_docs/blog',
    component: ComponentCreator('/tools_docs/blog', 'a39'),
    exact: true
  },
  {
    path: '/tools_docs/blog/archive',
    component: ComponentCreator('/tools_docs/blog/archive', 'e17'),
    exact: true
  },
  {
    path: '/tools_docs/blog/authors',
    component: ComponentCreator('/tools_docs/blog/authors', '660'),
    exact: true
  },
  {
    path: '/tools_docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/tools_docs/blog/authors/all-sebastien-lorber-articles', '483'),
    exact: true
  },
  {
    path: '/tools_docs/blog/authors/yangshun',
    component: ComponentCreator('/tools_docs/blog/authors/yangshun', 'c92'),
    exact: true
  },
  {
    path: '/tools_docs/blog/first-blog-post',
    component: ComponentCreator('/tools_docs/blog/first-blog-post', 'a3b'),
    exact: true
  },
  {
    path: '/tools_docs/blog/long-blog-post',
    component: ComponentCreator('/tools_docs/blog/long-blog-post', '73c'),
    exact: true
  },
  {
    path: '/tools_docs/blog/mdx-blog-post',
    component: ComponentCreator('/tools_docs/blog/mdx-blog-post', 'dfb'),
    exact: true
  },
  {
    path: '/tools_docs/blog/tags',
    component: ComponentCreator('/tools_docs/blog/tags', 'b06'),
    exact: true
  },
  {
    path: '/tools_docs/blog/tags/docusaurus',
    component: ComponentCreator('/tools_docs/blog/tags/docusaurus', 'c55'),
    exact: true
  },
  {
    path: '/tools_docs/blog/tags/facebook',
    component: ComponentCreator('/tools_docs/blog/tags/facebook', 'bfe'),
    exact: true
  },
  {
    path: '/tools_docs/blog/tags/hello',
    component: ComponentCreator('/tools_docs/blog/tags/hello', 'a96'),
    exact: true
  },
  {
    path: '/tools_docs/blog/tags/hola',
    component: ComponentCreator('/tools_docs/blog/tags/hola', '261'),
    exact: true
  },
  {
    path: '/tools_docs/blog/welcome',
    component: ComponentCreator('/tools_docs/blog/welcome', '416'),
    exact: true
  },
  {
    path: '/tools_docs/markdown-page',
    component: ComponentCreator('/tools_docs/markdown-page', 'e94'),
    exact: true
  },
  {
    path: '/tools_docs/docs',
    component: ComponentCreator('/tools_docs/docs', '1c4'),
    routes: [
      {
        path: '/tools_docs/docs',
        component: ComponentCreator('/tools_docs/docs', 'd20'),
        routes: [
          {
            path: '/tools_docs/docs',
            component: ComponentCreator('/tools_docs/docs', '174'),
            routes: [
              {
                path: '/tools_docs/docs/array/',
                component: ComponentCreator('/tools_docs/docs/array/', '983'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools_docs/docs/category/常用公共方法',
                component: ComponentCreator('/tools_docs/docs/category/常用公共方法', 'dc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools_docs/docs/category/日期时间方法',
                component: ComponentCreator('/tools_docs/docs/category/日期时间方法', '5a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools_docs/docs/category/数组方法',
                component: ComponentCreator('/tools_docs/docs/category/数组方法', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools_docs/docs/date/filterTime',
                component: ComponentCreator('/tools_docs/docs/date/filterTime', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools_docs/docs/intro',
                component: ComponentCreator('/tools_docs/docs/intro', '84c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools_docs/docs/tutorial-extras/debounce',
                component: ComponentCreator('/tools_docs/docs/tutorial-extras/debounce', 'a87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools_docs/docs/tutorial-extras/deepClone',
                component: ComponentCreator('/tools_docs/docs/tutorial-extras/deepClone', 'bbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/tools_docs/',
    component: ComponentCreator('/tools_docs/', 'ccf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
