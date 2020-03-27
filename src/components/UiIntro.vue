<template>
    <section class="section intro">
        <div
            v-if="getSlideActive(1)"
            class="slide-1"
        >
            <h1>Welcome</h1>
            <p>
                This application is developed to keep yourself aware of your surrounding environment in the current
                world
                situation.

                <br><br>
                It’s important to keep distance from each other to prevent the spread of the COVID-19 virus.
            </p>
            <b-button
                size="is-large"
                inverted
                type="is-primary"
                @click="next(2)"
            >
                Start
            </b-button>
        </div>
        <div
            v-if="getSlideActive(2)"
            class="slide-2"
        >
            <img src="../assets/logo-number.png">
            <p>
                To help you remind to keep distance we use the Bluetooth signal of your device.

                If another phone enters your surroundings we want to alert you to keep distance via a vibration.

                Please select your minimum distance.
            </p>
            <UiDistance
                :distance="distance"
                @distanceUpdate="changeDistance"
            />
            <b-button
                size="is-large"
                inverted
                type="is-primary"
                @click="next(3)"
            >
                Next
            </b-button>
        </div>
        <div
            v-if="getSlideActive(3)"
            class="slide-3"
        >
            <img src="../assets/logo-number.png">
            <p>
                All set up!

                We will alert you automatically when someone enter your preferred range of 1.5 meters.

                Bluetooth technology is being used to see other person in your surroundings. This will run on the
                background and has very low battery usage.

                There is no data being saved or sent to a server.
            </p>

            <b-button
                size="is-large"
                inverted
                type="is-primary"
                @click="close"
            >
                GO!
            </b-button>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import UiDistance from '@/components/UiDistance.vue';

    @Component({
        components: { UiDistance }
    })
    export default class UiIntro extends Vue {
        @Prop() distance!: number;
        active = 1;

        getSlideActive(id: number) {
            return this.active === id;
        }

        next(id: number) {
            this.active = id;
        }

        changeDistance(d: number) {
            this.$emit('distanceUpdate', d);
        }

        close() {
            this.$emit('close');
        }
    }
</script>

<style scoped lang="scss">

    h1 {
        font-size: 60px;
        color: white;
        font-family: "Arial Black", Avenir, Helvetica, Arial, sans-serif;
    }

    p {
        font-family: "Arial Black", Avenir, Helvetica, Arial, sans-serif;
        margin: 40px auto;
        max-width: 80%;
        color: white;
    }

    button {
        width: 160px;
        color: #8AAFEC !important;
        font-family: "Arial Black", Avenir, Helvetica, Arial, sans-serif;
    }

    /deep/ .distance {
        margin-bottom: 60px;
    }

</style>
