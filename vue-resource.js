
Vue.component('tasks', {

    template: '#tasks-template',

    data: function(){
        return {
            list: []
        };
    },

    created: function(){
        this.fetchTaskList();
    },

    methods: {
        fetchTaskList: function(){
            var resource = this.$resource('api/tasks/:id');

            resource.get(function(tasks){
               this.list = tasks;
            }.bind(this));
        },

        deleteTask: function(task){
            this.list.$remove(task);
        }
    }

});