import { reactive, App } from 'vue';

export const AppState = {
    install: (app: App) => {
        const _appState = reactive<{ theme: string; darkTheme: boolean }>({
            theme: 'Aura',
            darkTheme: false,
        });

        app.config.globalProperties.$appState = _appState;
    }
};
