import book from './book';
import city from './city';
import { createStore } from 'vuex';

export default createStore({
    modules: {
        book,
        city
    }
});