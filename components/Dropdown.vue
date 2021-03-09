<template>
    <div :class="$style['dropdown-wrapper']" v-outside-click="closeDropdown">
        <span :class="$style['dropdown-label']" id="dropdown-id">Rent</span>
        <div :class="$style.dropdown">
            <!-- native select for touch devices-->
            <select  v-model="selected" @change="selectOption($event.target.value)" :class="$style['native-select']" aria-labelledby="dropdown-id">
                <option 
                    v-for="(option, index) in options" 
                    :key="index" 
                    :value="option"
                >{{option}}</option>
            </select>
            <!-- custom select -->
            <div :class="$style['custom-select']" aria-hidden="true">
                <div  @click="dropdownOpen = !dropdownOpen" :class="$style['custom-select-trigger']">
                    <span>{{selected}}</span>
                    <img src="@/assets/icons/arrow-down.svg">
                </div>
                <transition name="fade">
                    <div v-if="dropdownOpen" :class="$style['custom-select-options']" >
                        <div 
                            v-for="(option, index) in options" 
                            @click="selectOption(option)"
                            :key="index" 
                            :value="option"
                            :class="`${$style['custom-select-option']} ${option == selected ? $style.active : ''}`"
                        >{{option}}</div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import outsideClick from "@/directives/outside-click";
    import { mapState } from 'vuex';

    export default {
        directives: {'outside-click': outsideClick},
        props: {
            options: {
                type: Array,
                required: true
            },
            selectedOption: {
                type: String
            }
        },
        data() {
            return {
                dropdownOpen: false,
                selected:  this.selectedOption ? this.selectedOption : this.options[0] 
            }
        },
        methods: {
            closeDropdown() {
                this.dropdownOpen = false
            },
            selectOption(option) {
                this.selected = option
                this.dropdownOpen = false
                this.$emit('change', option)
            }
        },
    }
</script>

<style lang="scss" module>

.dropdown-wrapper {
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: 700;
    position: relative;
}
.dropdown-label {
    color: var(--theme-bold-text-color);
    padding-right: 10px;
    transition: .3s;
}
.dropdown {
    position: relative;
    user-select: none;
}
.native-select,
.custom-select {
    position: relative;
    width: 240px;
    height: 100%;
}
.native-select:focus {
    outline: none;
}
.custom-select {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
}
.native-select,
.custom-select-trigger {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    color: var(--theme-main-color);
    line-height: 35px;
}
.custom-select-trigger {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--theme-container-background);
    cursor: pointer;
    transition: .3s;
    & span {
        padding-left: 3px;
    }
    &:hover {
        color: var(--theme-main-hover-color);
    }
}
.custom-select-options {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    border: 1px solid var(--theme-border-color);
    border-radius: 12px;
    background-color: var(--theme-page-background);
    box-shadow: 0 0 4px var(--theme-border-color);
    z-index: 1;
    padding: 12px 0;
}
.custom-select-option {
    color: var(--theme-bold-text-color);
    font-size: 16px;
    position: relative;
    padding: 10px;
    padding-left: 35px;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: var(--theme-border-color);
    }
    &:not(:last-of-type)::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid var(--theme-border-color);
    }
    &.active:before {
        content: "✓";
        color: var(--theme-bold-text-color);
        position: absolute;
        left: 12px;
        top: 8px;
    }
}


@media (hover: hover) {
    .custom-select {
        display: block;
    }
    .native-select:focus + .custom-select {
        display: none;
    }
}
@media (max-width: 992px) { 
    .dropdown-wrapper {
        font-size: 36px;
    }
    .native-select,
    .custom-select {
        width: 200px;
    }
    .dropdown-label {
        padding-right: 8px;
    }
}
@media (max-width: 768px) { 
    .dropdown-wrapper {
        font-size: 32px;
    }
    .native-select,
    .custom-select {
        width: 180px;
    }
    .dropdown-label {
        padding-right: 5px;
    }
}
@media (max-width: 576px) { 
    .dropdown-wrapper {
        font-size: 24px;
    }
    .native-select,
    .custom-select {
        width: 145px;
        height: 30px;
    }
    .dropdown-label {
        padding-right: 3px;
    }
}
</style>