<template>
    <router-link :to="'park/' + park.name">
        <div class="card">
            <img :src="park.image">
            <div class="title">
                <h4>{{ park.name }}</h4>
            </div>
        </div>
    </router-link>
</template>





<script>
import { Park } from '@/data/parks';

export default {
    props: {
        park: Park
    }
}
</script>





<style scoped>
.card {
    position: relative;
    display: flex;
    height: 18.75rem;
    justify-content: center;
    overflow: hidden;

    border-radius: 8px;
    transition: box-shadow 0.1s ease;
}

.card img {
    flex: 1 0 0;
    align-self: stretch;
    height: 18.75rem;
    object-fit: cover;
}

.card .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    bottom: 0;
    flex: 1 0 0;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 100%);
}

.card h4 {
    padding: 16px;
}



.card:hover {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.16);
}
</style>