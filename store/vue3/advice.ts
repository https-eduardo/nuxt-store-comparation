import { Advice } from '..';
import { Store } from "./";

class AdviceStore extends Store<Advice> {
    protected data(): Advice {
        return {
            id: -1,
            content: ''
        };
    }

    changeAdvice(advice: Advice) {
        this.state.id = advice.id;
        this.state.content = advice.content;
    }
}

export default new AdviceStore();