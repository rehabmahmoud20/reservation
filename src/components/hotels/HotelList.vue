<template >
  <section class="container">
    <div class="row g-3">
      <div class="col-md-6 col-lg-4" v-for="hotel in hotels" :key="hotel.id">
          <HotelItem :hotelItem="hotel" />
      </div>
    </div>
    <Modal />
    
  </section>
 
</template>
<script>
import HotelItem from "./HotelItem.vue";
import Modal from "./Modal.vue";

import { hotels } from "../../data";
export default {
  components: {
    HotelItem,
    Modal
  },
  data() {
    return {
      hotels: hotels,
    };
  },
};
</script>
