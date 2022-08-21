import { cities } from '@/assets/Mocks';
import city from "@/stores/city";

describe('City store', () => {

    // checks state changes
    test('on searchText change', () => {
        const state = {
            list: cities,
            query: ''
        };
        city.mutations.changeQuery(state, '');
        expect(city.getters.getData(state)).toHaveLength(0);

        city.mutations.changeQuery(state, 'san');
        expect(city.getters.getData(state).length).toBeGreaterThan(0);
    })
})