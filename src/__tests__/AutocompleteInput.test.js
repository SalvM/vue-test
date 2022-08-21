import AutocompleteInput from '../components/AutocompleteInput.vue';
import AutocompleteItem from '../components/AutocompleteItem.vue';
import { mount } from '@vue/test-utils';

describe('AutocompleteItem.vue', () => {
    const autocompleteInputWrapper = mount(AutocompleteInput, { propsData: { entity: 'city' } });

    // check the input change effects on the autocomplete results
    test('component mounted', async () => {
        expect(autocompleteInputWrapper.exists()).toBe(true);
        expect(autocompleteInputWrapper.findAllComponents(AutocompleteItem)).toHaveLength(0);
    });

});