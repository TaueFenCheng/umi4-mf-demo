import { defineConfig } from '@umijs/max';

const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  'react-dom': {
    singleton: true,
    eager: true,
  },
};

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  mf: {
    // remoteHash:false,
    remotes: [
      {
        // 可选，未配置则使用当前 remotes[].name 字段
        // aliasName: 'mfNameAlias',
        name: 'remoteApp',
        // entry:'remoteApp@http://localhost:8010/mf-va_remoteEntry.js'
        entry: 'http://localhost:8010/remoteEntry.js',
        // entry: 'https://to.the.remote.com/remote.js',
        // remoteApp: 'remoteApp@http://localhost:8010/mf-va_remoteEntry.js',
      },
    ],
    // 配置 MF 共享的模块
    shared,
    // shared: { react: { eager: true }, "react-dom": { eager: true } },
  },
  npmClient: 'pnpm',
  // chainWebpack: (config) => {
  //   config.plugin('module-federation').use(require('webpack').container.ModuleFederationPlugin, [{
  //     name: 'remoteApp',
  //     // filename: 'remoteEntry.js',
  //     remotes: {
  //       remoteApp: 'remoteApp@http://localhost:8010/remoteEntry.js',
  //     },
  //     shared: { react: { eager: true, requiredVersion: '^18.0.0', }, "react-dom": { eager: true, requiredVersion: '^18.0.0', } },
  //     // shared: {
  //     // react: { eager: true },
  //     // 'react-dom': { eager: true },
  //     // react: { singleton: true, eager: true },
  //     // 'react-dom': { singleton: true, eager: true },
  //     // },
  //   }]);
  // }
});
