<template>
        <div :class="$style.wrapper">
        <div @click="showPopup(false)" :class="$style.backdrop"></div>
        <transition name="slide-fade" appear>
            <div :class="$style.popup" > 
                <div :class="$style.header" > 
                    <p :class="$style['popup-title']">Add new vehicle</p>
                    <Button  @click="showPopup(false)" :primary="false">
                        <img v-if="darkMode" src="@/assets/icons/close-dark.svg" :class="$style['close-icon']">
                        <img v-else src="@/assets/icons/close.svg" :class="$style['close-icon']">
                    </Button>
                </div>
                <form>
                    <div :class="$style['image-container']">
                        <p v-if="uploading">Uploading...</p>
                        <img 
                            v-else-if="vehicle.image" 
                            :src="vehicle.image" 
                            :class="$style['uploaded-image']"
                        >
                        <Button v-else :flat="true" >
                            <img src="@/assets/icons/addphoto.svg" :class="$style['add-icon']" alt="add photo icon">
                            <label for="file-upload" :class="$style['input-label']"></label>
                            <input 
                                type="file" 
                                id="file-upload" 
                                accept="image/*" 
                                :class="$style['file-input']"
                                @change="uploadImage($event)"
                            >
                        </Button>
                    </div>
                    <div :class="$style['input-container']">
                        <input v-model="vehicle.name" placeholder="Name">
                    </div>
                    <div :class="$style['input-container']">
                        <input v-model="vehicle.description" placeholder="Description">
                    </div>
                    <div :class="$style['input-container']">
                        <input v-model="vehicle.rent" placeholder="Rent price" :class="$style['price-input']">
                        <span>$/h</span>
                    </div>
                    <Button 
                        @click="submit" 
                        :fullWidth="true" 
                        :class="$style.btn"
                        :disabled="disabled"
                    >Complete</Button>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

    export default {
        mounted() {
            document.body.classList.add('popup-open')
        },
        data() {
            return {
                vehicle: {
                    name: '',
                    description: '',
                    rent: '',
                },
                uploading: false
            }
        },
        computed: {
            ...mapState(['isPopupOpen', 'darkMode']),
            disabled() {
                return !(this.vehicle.name && this.vehicle.description && this.vehicle.rent)
            }
        },
        methods: {
            ...mapActions(['showPopup', 'addVehicle']),
            uploadImage(event) {
                    let file = event.target.files[0]
                    let reader = new FileReader();
                    reader.onloadstart = () => {this.uploading = true};
                    reader.onload = (e) => {
                        let base64img = e.target.result
                        this.vehicle.image = base64img
                        this.vehicle.preview = base64img
                    }
                    reader.onloadend = () => {this.uploading = false};
                    reader.readAsDataURL(file);
            },
            submit() {
                this.addVehicle(this.vehicle)
                this.showPopup(false)
            },
        },
        beforeDestroy() {
            document.body.classList.remove('popup-open')
        }
    }
</script>

<style lang="scss" module>
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    & .backdrop {
        background-color: var(--theme-backdrop-background);
        opacity: 0.32;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}
.popup {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 600px;
    padding: 64px 72px;
    background-color: var(--theme-page-background);
    border-radius: 48px 0 0 48px;
    font-size: 40px;
    z-index: 1;
    overflow: scroll;
    & .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        & .close-icon {
            fill: red;
        }
        & .popup-title {
            font-size: 40px;
            line-height: 48px;
            font-weight: 700;
            color: var(--theme-bold-text-color);
        }
    }
    & form {
        display: flex;
        flex-direction: column;
        height: 100%;
        & .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80px;
            flex-grow: 1;
            margin-bottom: 24px;
            background: var(--theme-container-background);
            border-radius: 24px;
            overflow: hidden;
            position: relative;
            & .uploaded-image {
                position: absolute;
                width: 100%;
                height: auto;
            }
            & .file-input {
                position: absolute;
                width: 0;
                height: 0;
            }
            & .input-label {
                display: block;
                opacity: 0;
                cursor: pointer;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            & p {
                font-size: 16px;
            }
        }
        & .input-container {
            position: relative;
            color: var(--theme-text-color);
            & input {
                width: 100%;
                margin-bottom: 24px;
                padding: 21px 64px 21px 24px;
                background: var(--theme-container-background);
                border-radius: 12px;
                border: none;
                color: var(--theme-text-color);
                font-family: inherit;
                font-size: 16px;
                line-height: 14px;
                outline: none;
                position: relative;
                transition: .3s;
                &:focus {
                    box-shadow: 0 0 1px 1px var(--theme-border-color);
                }
            }
            & span {
                font-size: 16px;
                line-height: 14px;
                position: absolute;
                right: 24px;
                top: 21px;
            }
        }
        & .btn {
            margin-top: auto;
        }
    }
}
@media (max-width: 992px) { 
    .popup {
        width: 500px;
        padding: 50px 45px;
        border-radius: 36px 0 0 36px;
        & .header {
            align-items: center;
            margin-bottom: 30px;
            & .popup-title {
                font-size: 30px;
                line-height: 30px;
            }
        }
        & form {
            & .btn {
                margin-top: 24px;
            }
        }
    }
}

@media (max-width: 768px) { 
    .popup {
        width: 400px;
        padding: 45px 35px;
        border-radius: 28px 0 0 28px;
        & .header {
            margin-bottom: 25px;
            & .popup-title {
                font-size: 24px;
                line-height: 28px;
            }
        }
        & form {
            & .image-container {
                align-self:stretch;
                height: 260px;
                margin-bottom: 16px;
            }
            & .input-container {
                & input {
                    margin-bottom: 16px;
                    padding: 20px 52px 20px 20px;
                    font-size: 14px;
                    line-height: 12px;
                }
                & span {
                    font-size: 14px;
                    line-height: 12px;
                    right: 15px;
                    top: 21px;
                }
            }
        }
    }
}
@media (max-width: 576px) { 
    .popup {
        bottom: 0;
        top: auto;
        width: 100%;
        height: auto;
        padding: 24px 16px 32px;
        border-radius: 24px 24px 0 0;
        & .header .close-icon{
            width: 11px;
            height: 11px;
        }
        & form .image-container {
            height: 32vh;
            & .add-icon {
                width: 20px;
                height: 20px;
            }
        }
    }
}

</style>