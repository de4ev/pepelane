<template>
    <div :class="$style.wrapper">
        <figure>
            <img 
                :src="selectedVehicle.image" 
                :alt="selectedVehicle.description"
                :class="$style.image"
            >
        </figure>
        <main>
            <h2>{{selectedVehicle.name}}</h2>
            <div :class="$style.links">
                <nuxt-link
                    v-for="link in links"
                    :key="link.name"
                    :to="link.path"
                    :class="`${$style.link} ${link.isActive ? $style['link-active'] : ''}`"
                >
                    {{link.name}}
                </nuxt-link>
            </div>
            
            <NuxtChild />

            <div :class="$style['footer-wrapper']">
                <div :class="$style['main-footer']">
                    <span>Rent for <span :class="$style.price">{{selectedVehicle.rent}} $/h</span></span>
                    <Button :wide="true">Rent now</Button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        middleware: ['checkStore'],
        transition: 'fade',
        mounted() {
            window.scrollTo(0,0);
        },
        data() {
            return {
                linksArray: ['Specifications', 'Team', 'Terms']
            }
        },
        computed: {
            ...mapState(['selectedVehicle']),
            links() {
                return this.linksArray.map(name => {
                    const path = `/vehicles/${this.$route.params.id}/${name.toLowerCase()}`
                    return {
                        name,
                        path,
                        isActive: this.$nuxt.$route.path === path
                    }
                })
            },
        },
    }
</script>

<style lang="scss" module>
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 64px;
}
figure {
    max-width:100%;
    max-height:100%;
    align-self: flex-start;
    flex-grow: 1;
    & .image {
        border-radius: 24px;
        width: 100%;
    }
}
main {
    display: flex;
    padding-bottom: 40px;
    height: 100%;
    flex-direction: column;
    & h2 {
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
        color: var(--theme-bold-text-color);
        transition: .3s;
    }
    & .links {
        margin: 32px 0;
    }
    & .link {
        font-size: 16px;
        font-weight: 700;
        color: var(--theme-text-color);
        text-decoration: none;
        user-select: none;
        transition: .2s;
        &:not(:last-child) {
            margin-right: 32px;
        } 
        &:last-child {
            margin-right: 0;
        }
        &.link-active {
            color: var(--theme-main-color);
        }     
    }
    & .main-footer {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 16px 32px;
        margin-top: auto;
        background-color: var(--theme-container-background);
        border-radius: 16px;
        color: var(--theme-bold-text-color);
        transition: .3s;
        & span {
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            & .price {
                color: var(--theme-accent-color);
            }
        }
    }
}
@media (max-width: 992px) { 
    .wrapper {
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 48px;
    }
}
@media (max-width: 768px) { 
    .wrapper {
        grid-template-columns: 1fr 3fr;
        grid-column-gap: 40px;
    }
}
@media (max-width: 576px) { 
    .wrapper {
        grid-template-columns: 1fr;
        grid-gap: 22px;
        padding: 0 16px;
    }
    main .links {
        margin-top: 16px;
        margin-bottom: 20px;
    }
    .footer-wrapper {
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 26px 16px 32px;
        width: 100%;
        background: var(--theme-page-background);
        background: linear-gradient(to top,var(--theme-page-background) 0%, var(--theme-page-background) 78%, rgba(255, 255, 255, 0) 100%);
    }
    main .main-footer {
        
        padding: 12px 24px;
        & span {
            font-size: 16px;
            line-height: 22px;
            & .price {
                color: var(--theme-accent-color);
            }
        }
    }
}
</style>