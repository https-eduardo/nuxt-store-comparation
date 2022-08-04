import { Store } from 'vuex';
import { Advice } from '..';

const adviceStore = new Store({
    state: {
        id: -1,
        content: ''
    } as Advice,
    mutations: {
        changeAdvice(state: Advice, advice: Advice) {
            state.id = advice.id;
            state.content = advice.content;
        }
    }
});

export default adviceStore;