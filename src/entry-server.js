import Vue from "vue"
//fix
//delete Vue.$isServer;
Object.defineProperty(Vue, '$isServer', { value: true });

import { createApp } from "./main";

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp(context);

        // устанавливаем маршрут для маршрутизатора серверной части
        router.push(context.url);

        // ожидаем, пока маршрутизатор разрешит возможные асинхронные компоненты и хуки
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();

            // Promise должен разрешиться экземпляром приложения, который будет отрендерен
            if (matchedComponents[0].data && matchedComponents[0].data().ssr) matchedComponents[0].data().ssr().then(() => resolve(app));
            else resolve(app);
        }, reject);
    });
};