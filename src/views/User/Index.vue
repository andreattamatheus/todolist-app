<template>
    <div class="flex">
        <side-menu/>
        <div class="w-full flex items-start justify-left bg-background-primary font-sans vl-parent">
         
        </div>
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import SideMenu from '@/components/TheSideMenuBar.vue';

export default {
    name: "UserView",
    components: {
        Loading,
        SideMenu
    },
    methods: {
        submit() {
            let form = document.getElementById("login");
            form.addEventListener(
                "submit",
                function (event) {
                    event.preventDefault();
                    let elements = form.elements;
                    let payload = {};
                    for (let i = 0; i < elements.length; i++) {
                        let item = elements.item(i);
                        switch (item.type) {
                            case "checkbox":
                                payload[item.name] = item.checked;
                                break;
                            case "submit":
                                break;
                            default:
                                payload[item.name] = item.value;
                                break;
                        }
                    }
                    // Place your API call here to submit your payload.
                    // console.log("payload", payload);
                },
                true
            );
        },
    },
};
</script>

<style>
.checkbox:checked {
    /* Apply class right-0*/
    right: 0;
}

.checkbox:checked+.toggle-label {
    /* Apply class bg-indigo-700 */
    background-color: #4c51bf;
}
</style>
