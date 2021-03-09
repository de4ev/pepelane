
<template>
    <section>
        <p :class="$style['terms-text']">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <p :class="`${$style['terms-text']} ${$style['terms-description']}`">{{selectedVehicle['term_text']}}</p>
        <div :class="$style.additional">
            <h4 >Additional conditions:</h4>
            <ul>
                <li :class="`${$style['terms-text']} ${$style['terms-list']}`">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
                <li :class="`${$style['terms-text']} ${$style['terms-list']}`">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
                <li :class="`${$style['terms-text']} ${$style['terms-list']}`">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
            </ul>
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        middleware: ['checkStore'],
        transition: 'fade',
        computed: {...mapState(['selectedVehicle'])}
    }
</script>

<style lang="scss" module>
.terms-text {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    color: var(--theme-text-color);
    transition: .3s;
    &.terms-description {
        margin-bottom: 24px;
    }
}
.additional {
    margin-bottom: 16px;
    & h4 {
        margin-bottom: 24px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        color: var(--theme-bold-text-color);
        transition: .3s;
    }
    & .terms-list {
        position: relative;
        list-style: none;
        padding-left: 24px;
        &:before {
            content: '';
            width: 4px;
            height: 4px;
            position: absolute;
            left: 0;
            top: 8px;
            border-radius: 50%;
            background-color: var(--theme-accent-color);
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
}
@media (max-width: 576px) { 
    section {
        margin-bottom: 88px;
    }
    .terms-text {
        margin-bottom: 8px;
        &.terms-description {
            margin-bottom: 16px;
        }
    }
    .additional {
        & h4 {
            margin-bottom: 16px;
        }
        & .terms-list {
            padding-left: 16px;
        }
    }
}
</style>