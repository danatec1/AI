// Vue 3 Application
const app = Vue.createApp({
    data() {
        return {
            message: 'Welcome to My Webpage with Vue 3'
        };
    },
    methods: {
        showAlert() {
            alert('Hello! You clicked the button.');
        }
    }
});

// Mount the Vue app to the DOM
app.mount('#app');