<template>
    <div :class="$style.wrapper">
        <span v-if="textBefore" @click="handleClick" :class="$style['text_before']">{{textBefore}}</span>
        <button 
            @click="handleClick"
            :class="classes"
            type="button"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            to: {
                type: String,
                default: ''
            },
            textBefore: {
                type: String,
                default: ''
            },
            wide: {
                type: Boolean,
                default: false
            },
            fullWidth: {
                type: Boolean,
                default: false
            },
            primary: {
                type: Boolean,
                default: true
            },
            flat: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes() {
                let classes = [this.$style.btn]

                if (this.wide) {
                    classes.push(this.$style.wide)
                }
                if (this.fullWidth) {
                    classes.push(this.$style['full-width'])
                }
                if (this.disabled) {
                    classes.push(this.$style.disabled)
                    return classes.join(' ')
                }
                if (this.flat) {
                    classes.push(this.$style.flat)
                } else if (this.primary) {
                    classes.push(this.$style.primary)
                }
                return classes.join(' ')
            }
        },
        methods: {
            handleClick() {
                if (!this.disabled) {
                    if (this.to) {
                        this.$router.push(this.to)
                    }
                    this.$emit('click')
                }
            }
        },
        
    }
</script>

<style lang="scss" module>
.wrapper:hover span, {
    color: var(--theme-main-hover-color);
}
.wrapper {
    display: flex;
    align-items: center;
}
.wrapper:hover .btn.primary {
    background-color: var(--theme-main-hover-color);
}
.btn {
    position: relative;
    display: inline-flex;
    min-width: 48px;
    padding: 17px;
    align-items: center;
    justify-content: center;
    background-color: var(--theme-container-background);
    border-style: none;
    border-radius: 12px;
    outline: none;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    color: var(--theme-light-text-color);
    line-height: 14px;
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: var(--theme-hover-color);
    }
    &:active {
        transform: scale(0.98)
    }
    &.primary {
        background-color: var(--theme-main-color);
        &:hover {
            background-color: var(--theme-main-hover-color);
        }
        &:active {
            background-color: var(--theme-main-color);
        }
    }
    &.flat {
        background-color: var(--theme-page-background);
        transition: .3s;
        &:hover {
            background-color: var(--theme-hover-color);
        }
    }
    &.wide {
        padding: 17px 32px;
    }
    &.full-width {
        width: 100%;
    }
    &.disabled {
        background-color: var(--theme-disabled-button-background);
        &:hover {
            cursor: not-allowed;
        }
        &:active {
            transform: none;
        }
    }
}
.text_before {
    margin-right: 20px;
    font-size: 20px;
    line-height: 28px;
    color: var(--theme-main-color);
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
}
@media (max-width: 576px) { 
    .btn {
        min-width: 32px;
        min-height: 32px;
        padding: 6px;
        font-size: 14px;
        line-height: 12px;
        border-radius: 8px;
        &.full-width {
            padding: 20px 0;
        }
        &.wide {
            padding: 16px 24px;
        }
    }
    .text_before {
        font-size: 16px;
        line-height: 22px;
        margin-right: 12px;
    }
 }
</style>