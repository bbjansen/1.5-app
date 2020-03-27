<template>
    <div class="settings">
        <div class="range">
            <h2>
                Adjust the distance
            </h2>

            <UiDistance
                :distance="distance"
                @distanceUpdate="changeDistance"
            />
        </div>

        <div
            v-if="excludes.length > 0"
            class="excluded"
        >
            <h2>
                Excluded
            </h2>

            <ul>
                <li
                    v-for="(device) in closest"
                    :key="device.id"
                >
                    <span class="user">
                        <img src="../assets/user.svg">
                        <strong v-if="device.distance">
                            {{ device.distance }} cm
                        </strong>
                    </span>
                    <b-button
                        rounded
                        type="is-small"
                        @click="add(device)"
                    >
                        Alert
                    </b-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiDistance from '@/components/UiDistance.vue';
    import { namespace } from 'vuex-class';

    const deviceStore = namespace('deviceStore');

    @Component({
        components: { UiDistance }
    })
    export default class Settings extends Vue {
        @Prop() distance!: number;

        localDistance = 0;

        @deviceStore.Getter('excludes') excludes!: any;

        created() {
            this.localDistance = this.distance;
        }

        changeDistance(d: any) {
            this.$emit('distanceUpdate', d);
        }

        get closest() {
            return this.excludes.sort((a: any, b: any) => (a.rssi < b.rssi ? 1 : -1));
        }

        add(device: any) {
            device.excluded = false;
            this.$store.commit('deviceStore/updateDevice', device);
        }
    }
</script>

<style lang="scss" scoped>

    .settings {
        width: 100%;
        color: white;
        padding-bottom: 100px;
    }

    .range {
        padding: 0 60px;
    }

    /deep/ .label {
        color: white;
        padding: 4px;
        max-width: 140px;
        margin: 15px auto;
        border: 1px solid white;
        border-radius: 16px;
    }

    /deep/ .b-slider-tick-label {
        margin-top: 16px;
    }

    .excluded {
        padding: 50px 0;
    }

    ul {
        width: 100%;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        background: rgba(255, 255, 255, .1);
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
