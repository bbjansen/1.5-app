<template>
    <div id="app">
        <UiIntro
            v-if="!hasIntro"
            :distance="distance"
            @distanceUpdate="changeDistance"
            @close="closeIntro"
        />
        <div v-else>
            <figure v-if="$route.name === 'home'">
                <img
                    v-if="!hasAlert"
                    src="./assets/thanks-for-keeping-distance.svg"
                    alt="Thanks!"
                >
                <img
                    v-else
                    src="./assets/keep-your-distance.svg"
                    alt="Thanks!"
                >
            </figure>
            <router-view
                :distance="distance"
                @distanceUpdate="changeDistance"
            />
            <nav>
                <router-link to="/">
                    Home
                </router-link>
                <router-link to="/settings">
                    Settings
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { namespace } from 'vuex-class';
    import UiIntro from '@/components/UiIntro.vue';
    import Home from '@/views/Home.vue';
    import Settings from '@/views/Settings.vue';

    declare global {
        interface Window {
            ble: any;
            cordova: any;
            plugins: any;
            StatusBar: any;
        }
    }

    const deviceStore = namespace('deviceStore');

    @Component({
        components: { Settings, Home, UiIntro }
    })
    export default class App extends Vue {
        excludedDevices: Array<any> = [];
        distance = 0;
        hasLocalIntro = false;
        hasAlert = false;

        @deviceStore.Getter('excludes') excludes!: any;
        @deviceStore.Getter('devices') devices!: any;

        created() {
            this.getStoredDistance();
            document.addEventListener('deviceready', this.onDeviceReady, false);
        }

        onDeviceReady() {
            // window.cordova.plugins.backgroundMode.enable();
            // this.startBackgroundNotifications();

            // Search for nearby devices
            setInterval(() => {
                this.collectDevices();
            }, 1000);

            // Check if there are devices nearby and trigger the alert
            setInterval(() => {
                this.setAlert();
            }, 2000);

            // Clear out of range devices
            setInterval(() => {
                this.cleanDevices();
            }, 60000);
        }

        get hasIntro() {
            return localStorage.getItem('INTRO') || this.hasLocalIntro;
        }

        closeIntro() {
            this.hasLocalIntro = true;
            localStorage.setItem('INTRO', JSON.stringify(true));
        }

        getStoredDistance() {
            const distance = localStorage.getItem('DISTANCE') || '0';
            this.distance = JSON.parse(distance);
        }

        // startBackgroundNotifications() {
        //     window.cordova.plugins.backgroundMode.on('activate', () => {
        //         this.isBackground = true;
        //     });
        //     window.cordova.plugins.backgroundMode.on('deactivate', () => {
        //         this.isBackground = false;
        //         window.cordova.plugins.notification.badge.clear();
        //     });
        // }

        sendPushNotification() {
            window.cordova.plugins.notification.local.schedule({
                title: 'ALERT',
                text: 'Someone is too close'
            });
        }

        cleanDevices() {
            this.$store.commit('deviceStore/cleanDevices');
        }

        setAlert() {
            this.hasAlert = false;
            this.devices.some((d: any) => {
                if (d.isDanger && !d.excluded) {
                    this.hasAlert = true;
                    navigator.vibrate(200);
                }
                return d.isDanger && !d.excluded;
            });
        }

        collectDevices() {
            window.ble.startScan([], this.onDiscoverDevice, this.onError);
        }

        onDiscoverDevice(d: any) {
            if (!this.hasIntro) return;
            const match = this.devices.find((e: any) => e.id === d.id);
            console.log('run');

            if (!match) {
                this.$store.commit('deviceStore/updateDevices', d);
            } else {
                match.rssi = d.rssi;
                match.distance = d.rssi * -2.5;
                match.isDanger = this.shouldAlert(d.rssi);
            }
        }

        shouldAlert(rssi: number) {
            let distance = -60;
            if (this.distance === 1) {
                distance = -80;
            }
            if (this.distance === 2) {
                distance = -90;
            }
            if (this.distance === 3) {
                distance = -100;
            }
            return rssi > distance;
        }

        onError(e: any) {
            console.log('Error trying to get device', e);
        }

        changeDistance(distance: number) {
            this.distance = distance;
            localStorage.setItem('DISTANCE', JSON.stringify(distance));
        }
    }
</script>

<style lang="scss">

    html {
        background-size: cover;
        height: 100%;
        background: #C9A1F0;
    }

    body {
        height: 100%;
    }

    #app {
        background: linear-gradient(196deg, rgba(201, 161, 240, 1) 0%, rgba(122, 178, 235, 1) 100%);
        font-family: "Arial Black", Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        padding-top: 40px;
        min-height: calc(100% - 40px);
    }

    nav {
        font-family: "Arial Black", Avenir, Helvetica, Arial, sans-serif;
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
        background: #7AB2EB;
        padding: 10px 0 20px;

        a {
            color: white;
            font-weight: bold;
            margin: 0 20px;
            text-transform: uppercase;
            padding: 5px 14px;

            &:hover {
                color: white;
            }

            &.router-link-exact-active {
                border: 1px solid white;
                font-weight: bold;
                border-radius: 16px;
            }
        }
    }

    figure {
        display: block;

        img {
            width: 40%;
        }
    }
</style>
