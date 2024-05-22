const argv = {
  cache: true,
  debug: false,
  // fix: false,
  minifyHtml: false,
  minifyCss: false,
  minifyJs: false,
  minifySvg: true,
  // уведомления в браузере
  notify: false,
  // открыть страницу при загрузке
  open: false,
  port: 3000,
  // для одностраничного приложения
  spa: false,
  throwErrors: true,
  robots: true,
  mode: {
    modes: ["test", "prod", "development", "production"],
  },
};

export default argv;
