<template>
    <div 
        @click="openCard"
        :class="$style.wrapper"
    >
        <div :class="$style['card_img']">
            <img :src="item.preview">
        </div>
        
        <div :class="$style['card_text']">
            <p :class="$style['card_title']">{{item.name}}</p>
            <p :class="$style['card_description']">{{item.description}}</p>
            <p :class="$style['card_price']">{{price}} $/h</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        computed: {
            price() {
                const price = this.item.rent.toString()
                let formated = ''
                if (price.length > 3) {
                    formated = price.substring(0, price.length - 3) + ' ' + price.substr(price.length - 3)
                } else {
                    formated = price
                } 
                return formated
            }
        },
        methods: {
            ...mapActions(['selecteVehicle']),
            openCard() {
                this.selecteVehicle(this.item)
                this.$router.push('/vehicles/'+this.item.id+'/specifications')
                
            }
        },
    }
</script>

<style lang="scss" module>
.wrapper {
    display: flex;
    height: 164px;
    min-width: 340px;
    min-width: 340px;
    padding: 24px 32px;
    background-color: var(--theme-page-background);
    border-radius: 32px;
    cursor: pointer;
    transition: all .3s;
    user-select: none;
    &:hover {
        transform: scale(1.03);
        box-shadow: 0px 10px 20px rgba(103, 123, 143, 0.04), 0px 2px 6px rgba(103, 123, 143, 0.04), 0px 0px 1px rgba(103, 123, 143, 0.04);
    }
    &:active {
        transform: scale(.98)
    }
    & .card_text {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
        & .card_title {
            color: var(--theme-bold-text-color);
            font-size: 16px;
            font-weight: 700;
            transition: .3s;
        }
        & .card_description {
            display:inline-block;
            font-size: 12px;
            font-weight: 300;
            line-height: 18px;
            color: var(--theme-text-color);
            margin-top: 12px;
            margin-bottom: 16px;
            transition: .3s;
            &:first-letter {
                text-transform: uppercase;
            }
        }
        & .card_price {
            font-size: 14px;
            color: var(--theme-accent-color);
            font-weight: 700;
            line-height: 22px;
            margin-top: auto;
        }
    }
    & .card_img {
        flex: 0 0 88px;
        width: 88px;
        height: 88px;
        border-radius: 24px;
        margin-right: 24px;
        overflow: hidden;
        & img {
            width: 100%;
            height: auto;
        }
    }
}
@media (max-width: 768px) { 
    .wrapper {
        padding: 22px 28px;
        border-radius: 28px;
    }
}
@media (max-width: 576px) { 
    .wrapper {
        padding: 20px;
        border-radius: 24px;
    }
}
</style>