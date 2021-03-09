<template>
    <header>
        <div :class="$style.logo">
            <NuxtLink to="/vehicles">
                <img v-if="darkMode" src="../assets/images/dark-logo.svg" :class="$style['logo_img']" alt="Pepelane logo">
                <img v-else src="../assets/images/logo.svg" :class="$style['logo_img']" alt="Pepelane logo">
            </NuxtLink>
            <NuxtLink to="/vehicles" tag="span" :class="$style['logo_text']">
                Pepelane
            </NuxtLink>
            <span :class="$style['slogan']">World's first affordable airsharing</span>
        </div>
        <nav>
            <ul>
                <li  @click="toggleDarkMode" :class="`${$style['mode_switch']} ${$style['icon']}`">
                    <transition name="fade">
                        <Icon v-if="darkMode" src="sun.svg" alt="sun icon" text="Day mod"/>
                        <Icon v-else src="moon.svg" alt="moon icon" text="Night mod"/>
                    </transition>
                </li>
                <li :class="$style.icon" @click="goHome">
                    <Icon src="messages.svg" alt="messages icon"/>
                </li>
                <li :class="$style.icon" @click="goHome">
                    <Icon  src="notification.svg" alt="notification icon" :notification="true"/>
                </li>
                <li :class="$style.user" @click="goHome">
                    <span>Bessie Cooper</span>  
                    <img src="../assets/images/user.jpg" :class="$style.avatar" alt="user photo">
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['darkMode'])
    },
    methods: {
        ...mapActions(['toggleDarkMode']),
        goHome() {
            this.$router.push('/vehicles')
        },
    },  
}
</script>

<style lang="scss" module>
header {
    height: 56px;
    width: 100%;
    min-width: 375px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: var(--theme-text-color);
}
.logo {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    & .logo_text {
        cursor: pointer;
        user-select: none;
        color: var(--theme-bold-text-color);
        transition: .3s;
    }
    & .slogan {
        margin-left: 65px;
        font-size: 16px;
        font-weight: 300;
        white-space: nowrap;
        color: var(--theme-text-color);
        transition: .3s;
    }
    &  .logo_img {
        padding: 3px 9px;
        margin-right: 18px;
    }
}

nav {
    margin-left: auto;
    & ul {
        display: flex;
        align-items: center;
        list-style: none;
    }
    & li.user {
        display: flex;
        align-items: center;
        font-weight: 700;
        margin-left: 56px;
        user-select: none;
        & .avatar {
            border-radius: 50%;
            margin-left: 16px; 
            cursor: pointer;
        }
        & span {
            text-align: center;
            white-space: nowrap;
            color: var(--theme-bold-text-color);
            cursor: pointer;
            transition: .3s;
        }
    }
    & li:nth-child(2) {
        margin-right: 24px;
    }
    & li.mode_switch {
        display: flex;
        margin-right: 105px;
        align-items: center;
        cursor: pointer;
    }
}


@media (max-width: 1200px) {
    .logo .slogan {
        margin-left: 45px;
        font-size: 14px;
    }
    nav {
        & li.user {
            margin-left: 32px;
        }
        & li:not(:last-child) {
            margin-right: 24px;
        }
    }
}
@media (max-width: 992px) {
    .logo .slogan {
        display: none;
    }
    nav li.user {
        & .avatar {
            margin-left: 0;
        }
        & span {
            display: none;
        }
    }
}

@media (max-width: 576px) { 
    header {
        padding: 12px 16px;
    }
    .logo {
        height: 32px;
        font-size: 14px;
        & .logo_img {
            width: 32px;
            height: 32px;
            padding: 2px;
            margin-right: 12px;
        }
    }
    nav {
        margin-left: 0;
        & .icon {
            margin-right: 12px;
        }
        & li.user {
            margin-left: 0px;
            & .avatar {
                width: 32px;
                height: 32px;
            }
        }
        & li:not(:last-child) {
            margin-right: 16px;
        }
        & li:nth-child(3) {
            margin-right: 24px;
        }
        & li.mode_switch {
            width: 20px;
            height: 20px;
        }
    }
 }
</style>