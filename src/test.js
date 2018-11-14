var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: true,
        todos: [
            {id: 0, text: 'Learn Vue'},
            {id: 1, text: 'Learn Vuex'},
            {id: 2, text: 'Learn Vuetify'}
        ]
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});
