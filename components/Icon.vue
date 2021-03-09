<template>
    <div :class="`${$style.icon} ${text ? $style.text : ''} ${darkMode ? $style.darkMode : ''}`">
        <img 
            :src="require(`@/assets/icons/${src}`)" 
            :alt="alt"
            :class="$style['icon-img']"
        >
        <span 
            v-if="text" 
            :class="$style['icon-text']"
        >{{text}}</span>
        <div v-if="notification" :class="$style.indicator"></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        props: {
            src: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                default: ''
            },
            notification: {
                type: Boolean,
                default: false
            },
            text: {
                type: String,
                default: ''
            }
        },
        computed: {
            ...mapState(['darkMode'])
        }
    }
</script>

<style lang="scss" module>
.icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: .3s;
    user-select: none;
    &:hover .icon-img,
    &:hover .icon-text {
        filter: brightness(0.7);
    }
    &.darkMode:hover .icon-img,
    &.darkMode:hover .icon-text {
        filter: brightness(1.5);
    }
    &.text {
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        width: 122px;
    }
    & .icon-img {
        margin-right: 16px;
        transition: .3s;
    }
    & .icon-text {
        white-space: nowrap;
        transition: .3s;
    }
}
.indicator {
    position: absolute;
    top: -3px;
    right: -3px;
    width: 14px;
    height: 14px;
    border: 4px solid var(--theme-page-background);
    border-radius: 50%;
    background-color: var(--theme-accent-color);
    transition: .3s;
}
@media (max-width: 1200px) {
    .icon.text {
        width: 24px;
    }
    .icon-text {
        display: none;
    }
    .icon-img {
        margin-right: 0;
    }
}
@media (max-width: 576px) {
    .icon {
        width: 20px;
        height: 20px;
        & .icon-img {
            width: 20px;
            height: 20px;
        }
    }
    .indicator {
        top: -3px;
        right: -3px;
        width: 13px;
        height: 13px;
    }
}
</style>