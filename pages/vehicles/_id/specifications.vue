<template>
    <section>
       <p :class="$style['specifications-text']">{{selectedVehicle['specifications_text']}}</p>
       <div :class="$style['specifications-features']">
           <h4>Features:</h4>
           <div :class="$style.feature">
               <div :class="$style['feature-icon-wrap']">
                   <img src="@/assets/icons/cup.svg" alt="cup icon">
               </div>
               <div :class="$style['feature-text-wrap']">
                   <p :class="$style['feature-title']">A challenge for a true champion</p>
                   <p :class="$style['feature-text']">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
               </div>
           </div>
           <div :class="$style.feature">
               <div :class="$style['feature-icon-wrap']">
                   <img src="@/assets/icons/pilot.svg" alt="cup icon">
               </div>
               <div :class="$style['feature-text-wrap']">
                   <p :class="$style['feature-title']">Pilot's sweaty hands</p>
                   <p :class="$style['feature-text']">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
               </div>
           </div>
       </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        middleware: ['checkStore'],
        transition: 'fade',
        computed: {...mapState(['selectedVehicle'])},
    }
</script>

<style lang="scss" module>
.specifications-text {
    margin-bottom: 32px;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    color: var(--theme-text-color);
    transition: .3s;
}
.specifications-features {
    margin-bottom: 16px;
    & h4 {
        margin-bottom: 32px;
        font-size: 24px;
        font-weight: 700;
        color: var(--theme-bold-text-color);
        transition: .3s;
    }
    & .feature {
        display: flex;
        flex-direction: row;
        & .feature-icon-wrap {
            max-height: 96px;
            margin-right: 24px;
            padding: 32px 24px;
            background-color: var(--theme-container-background);
            border-radius: 16px;
            transition: .3s;
            user-select: none;
        }
        & .feature-text-wrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            & .feature-title {
                margin-bottom: 8px;
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
                color: var(--theme-bold-text-color);
                transition: .3s;
            }
            & .feature-text {
                font-size: 14px;
                line-height: 20px;
                color: var(--theme-text-color);
                transition: .3s;
            }
        }
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }
}
@media (max-width: 576px) { 
    section {
        margin-bottom: 88px;
    }
    .specifications-text {
        margin-bottom: 20px;
        line-height: 20px;
    }
    .specifications-features {
        margin-bottom: 16px;
        & h4 {
            margin-bottom: 20px;
        }
    }
    .specifications-features .feature:not(:last-child) {
            margin-bottom: 12px;
        }
    .specifications-features .feature .feature-icon-wrap {
            max-height: 80px;
            margin-right: 16px;
            padding: 28px 20px;
    }
}
</style>