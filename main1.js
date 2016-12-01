/**
 * Created by ano on 12/1/16.
 */

Vue.component('task-list', {

    template: `
                <div>
                    <task v-for="task in tasks" v-text="task.task"></task>
                </div>
            `,

    data(){
        return{
            tasks: [
                {task: 'Go to the farm.', completed: true},
                {task: 'Go to the store.', completed: false},
                {task: 'Go to the office.', completed: false},
                {task: 'Go to the house.', completed: true},
                {task: 'Go to the playground.', completed: true}
            ]
        };
    }

});

Vue.component('task', {

    template: '<li><slot></slot></li>'

});

new Vue({

    el: '#root'

});