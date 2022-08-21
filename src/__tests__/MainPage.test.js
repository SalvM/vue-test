import AutocompleteInput from '@/components/AutocompleteInput.vue'
import MainPage from '@/pages/MainPage.vue';
import { shallowMount } from '@vue/test-utils';

describe('MainPage.vue', () => {
    const MainPageWrapper = shallowMount(MainPage);

    // checks basic structure
    test('component mounted', () => {
        expect(MainPageWrapper.exists()).toBe(true);
        expect(MainPageWrapper.findComponent(AutocompleteInput).exists()).toBe(true);
    });

    // checks tab switch
    test('switch tab to books', async () => {
        await MainPageWrapper.vm.selectTab('book');
        expect(MainPageWrapper.vm.tabSelected).toBe('book');
        const bookTabWrapper = MainPageWrapper.find('.tab.selected');
        expect(bookTabWrapper.exists()).toBe(true);
        expect(bookTabWrapper.text()).toContain('Books');
    })
})