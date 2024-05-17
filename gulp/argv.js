const argv = {
  cache: true,
  debug: true,
  // fix: false,
  minifyHtml: false,
  minifyCss: false,
  minifyJs: false,
  // minifySvg: null,
  // уведомления в браузере
  notify: false,
  // открыть страницу при загрузке
  open: false,
  port: 3000,
  // для одностраничного приложения
  spa: false,
  throwErrors: false,
  robots: true,
  mode: {
    modes: ["test", "prod", "development", "production"],
  },
};

export default argv;
