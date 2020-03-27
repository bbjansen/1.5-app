import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

export const state: any = {
    devices: []
};

const getters: GetterTree<any, any> = {
    devices: state => state.devices,
    excludes: state => state.devices.filter((d: any) => d.excluded)
};

const mutations: MutationTree<any> = {
    updateDevices(state, v) {
        state.devices.push(v);
    },
    updateDevice(state, device) {
        console.log(device);
        state.devices = [
            ...state.devices.filter((e: any) => e.id !== device.id),
            device
        ];
    },
    cleanDevices(state) {
        state.devices = [
            ...state.devices.filter((e: any) => e.excluded)
        ];
    }
};

const actions: ActionTree<any, any> = {};

export const deviceStore: Module<any, any> = {
    state,
    actions,
    getters,
    mutations,
    namespaced: true
};
