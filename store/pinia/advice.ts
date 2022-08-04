import { defineStore } from 'pinia';
import { Advice } from '..';

const useAdviceStore = defineStore('advice', {
    state: (): Advice => ({ id: -1, content: '' }),
    actions: {
        changeAdvice(advice: Advice) {
            this.id = advice.id;
            this.content = advice.content;
        },
    },
});

export default useAdviceStore;