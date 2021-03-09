
<template>
    <section>
        <p :class="$style['team-text']">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
       <div :class="$style['team-description']">
           <h4>Qualified specialists</h4>
           <div :class="$style['team_members']">
               <div v-for="(member, index) in members" :key="index" :class="$style.member">
                   <div :class="$style['aspect-ratio']">
                       <img :src="require(`@/assets/images/${member.src}`)" alt="pilot">
                   </div>
                   <div :class="$style['member-text']">
                        <p :class="$style['member-name']">{{member.name}}</p>
                        <p :class="$style['member-position']">{{member.position}}</p>
                   </div>
               </div>
           </div>
        <p :class="$style['team-text']">{{selectedVehicle['team_text']}}</p>

       </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        middleware: ['checkStore'],
        transition: 'fade',
        data() {
            return {
                members: [
                    {name: 'Marvin McKinney', position: 'Pilot assistant', src: 'pilot1.png'},
                    {name: 'Savannah Nguyen', position: 'Mechanic', src: 'pilot2.png'},
                    {name: 'Courtney Henry', position: 'Stewardess', src: 'pilot3.png'},
                ]
            }
        },
        computed: {...mapState(['selectedVehicle'])},
    }
</script>

<style lang="scss" module>
.team-text {
    margin-bottom: 32px;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    color: var(--theme-text-color);
}
.team-description {
    & h4 {
        margin-bottom: 32px;
        font-size: 24px;
        font-weight: 700;
        color: var(--theme-bold-text-color);
        transition: .3s;
    }
    & .team_members {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
        margin-bottom: 32px;
        & .member {
            & .aspect-ratio {
                height: 0;
                margin-bottom: 16px;
                overflow: hidden;
                padding-top: 96px / 162px * 100%;
                background: white;
                position: relative;
                border-radius: 16px;
                & img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    border-radius: 16px;
                }
            }
            & .member-name {
                margin-bottom: 8px;
                font-size: 16px;
                font-weight: 700;
                line-height: 14px;
                color: var(--theme-bold-text-color);
                transition: .3s;
            }
            & .member-position {
                font-size: 12px;
                font-weight: 300;
                line-height: 18px;
                color: var(--theme-text-color);
                transition: .3s;
            }
        }
     }
}
@media (max-width: 576px) { 
    section {
        margin-bottom: 88px;
    }
    .team-text {
        margin-bottom: 20px;
    }
    .team-description {
        & h4 {
            margin-bottom: 20px;
            font-size: 20px;
            line-height: 28px;
        }
        & .team_members {
            grid-template-columns: 1fr;
            grid-gap: 12px;
            margin-bottom: 20px;
            & .member {
                display: flex;
                & .aspect-ratio {
                    height: 80px;
                    flex: 0 0 132px;
                    margin-right: 16px;
                    padding-top: 0;
                    margin-bottom: 0;
                    & img {
                        height: auto;
                    }
                }
                & .member-text {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    justify-content: center;
                    & .member-name {
                        margin-bottom: 4px;
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            }
        }
    }
}
</style>