import book from "@/stores/book";
import {books} from '@/assets/Mocks';

describe('Book store', () => {

    // checks state changes
    test('on searchText change', () => {
        const state = {
            list: books,
            query: ''
        };
        book.mutations.changeQuery(state, '');
        expect(book.getters.getData(state)).toHaveLength(0);

        book.mutations.changeQuery(state, 'don');
        expect(book.getters.getData(state).length).toBeGreaterThan(0);
    })
})