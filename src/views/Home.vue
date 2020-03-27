<template>
    <div class="home">
        <h2>
            Nearby
        </h2>
        <p v-if="lowestRssi.length === 0">
            Nobody around...
        </p>

        <ul>
            <li
                v-for="(device) in lowestRssi"
                :key="device.id"
                :class="{'is-danger': device.isDanger, 'is-excluded': device.excluded}"
            >
                <span class="user">
                    <img src="../assets/user.svg">
                    <strong v-if="device.distance">
                        {{ device.distance }} cm
                    </strong>
                </span>

                <b-button
                    v-if="!device.excluded"
                    rounded
                    type="is-small"
                    @click="exclude(device)"
                >
                    Ignore
                </b-button>
                <b-button
                    v-else
                    rounded
                    type="is-small"
                    @click="add(device)"
                >
                    Alert
                </b-button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { namespace } from 'vuex-class';

    const deviceStore = namespace('deviceStore');

    @Component
    export default class Home extends Vue {
        // @Prop() devices!: Array<any>;

        @deviceStore.Getter('devices') devices!: any;

        get lowestRssi() {
            if (!this.devices) return [];
            return this.devices.filter((d: any) => (d.rssi > -90) && !d.excluded).slice(0, 8);
        }

        exclude(device: any) {
            device.excluded = true;
            this.$store.commit('deviceStore/updateDevice', device);
        }

        add(device: any) {
            device.excluded = false;
            this.$store.commit('deviceStore/updateDevice', device);
        }
    }
</script>

<style lang="scss" scoped>

    .home {
        color: white;
    }

    h2 {
        color: white;
        margin-top: 10px;
    }

    ul {
        width: 100%;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        background: rgba(255, 255, 255, .2);
        margin: 10px auto;
        justify-content: center;
        align-items: center;
    }

    li {
        list-style: none;
        margin: 10px 2px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        border-radius: 16px;

        .user {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 50px;

            strong {
                margin-top: 4px;
                font-size: 12px;
                color: white;
                margin-bottom: 10px;
            }
        }

        &.is-danger {
            background: #ff246e;
            color: white;
        }

        &.is-excluded.is-danger {
            background: #59ac28 !important;
            color: white;
        }

        img {
            width: 20px;
        }
    }

</style>
