import { defineStore } from 'pinia';

const ID = 'common';

type State = {
    count: number,
};
type Actions = {
  increment: () => void,
};

type Getters = {};

export const useCommonStore = defineStore<typeof ID, State, Getters, Actions>(
    ID,
    {
        state: () => ({
            count: 0,
        }),
        actions: {
            increment() {
                this.count++;
            },
        },
        getters: {},
    }
);
