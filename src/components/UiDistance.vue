<template>
    <div class="distance">
        <b-field :label="calculatedDistance">
            <b-slider
                v-model="localDistance"
                size="is-large"
                :min="0"
                :max="3"
                :tooltip="false"
            >
                <b-slider-tick :value="0">
                    1.5
                </b-slider-tick>
                <b-slider-tick :value="1">
                    2.0
                </b-slider-tick>
                <b-slider-tick :value="2">
                    2.5
                </b-slider-tick>
                <b-slider-tick :value="3">
                    3.0
                </b-slider-tick>
            </b-slider>
        </b-field>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

    @Component
    export default class UiDistance extends Vue {
        @Prop() distance!: number;
        localDistance = 0;

        created() {
            this.localDistance = this.distance;
        }

        get calculatedDistance() {
            let distance = 0;
            if (this.distance === 0) {
                distance = 1.5;
            }
            if (this.distance === 1) {
                distance = 2.0;
            }
            if (this.distance === 2) {
                distance = 2.5;
            }
            if (this.distance === 3) {
                distance = 3;
            }
            return `${distance} meters`;
        }

        @Watch('localDistance')
        onDistanceChange(d: any) {
            this.$emit('distanceUpdate', d);
        }
    }
</script>

<style lang="scss" scoped>

    /deep/ .label {
        color: white !important;
    }

    /deep/ .b-slider-tick-label {
        margin-top: 16px;
        color: white;
    }
</style>
