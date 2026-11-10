
import routes from './routes.js';

const savedTheme = localStorage.getItem('theme') || 'light';

export const store = Vue.reactive({
    theme: savedTheme,
    accent: localStorage.getItem('accent') || '',

    get dark() {
        return this.theme !== 'light';
    },

    setTheme(theme) {
        this.theme = theme;
        localStorage.setItem('theme', theme);
    },

    setAccent(color) {
        this.accent = color;
        localStorage.setItem('accent', color);
    },

    toggleDark() {
        this.setTheme(this.dark ? 'light' : 'dark');
    },
});

const app = Vue.createApp({
    data: () => ({ store }),
});

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);
app.mount('#app');
