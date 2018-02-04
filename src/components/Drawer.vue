<template>
  <div class="row">
    <!-- left side of drawer: fixed header -->
    <div class="col-4 column bg-blue" style="height: 89%;">
       <q-card id="search" class="bg-green">
        <q-item>
          <q-item-side><q-icon class="fa fa-4x fa-user" /></q-item-side>
        </q-item>
      </q-card>
      <q-scroll-area class="col">
        <template v-for="n in 100">{{n}}<br></template>
      </q-scroll-area>
    </div>
    <!-- right side of drawer: fixed header -->
    <div class="col-8 column bg-blue" >
      <q-card id="search" class="bg-grey">
        <q-item>
          <q-item-side><q-icon class="fa fa-search" /></q-item-side>
          <q-item-main>
            <q-field>
              <q-input type="email" icon="mail" value="" float-label="search" v-model="search" clearable />
            </q-field>
          </q-item-main>
        </q-item>
      </q-card>
      <q-scroll-area class="col">
        <template v-for="n in 100">{{n}}<br></template>
      </q-scroll-area>
    </div>
    <!-- drawer Footer: horizontal, low-profile, and spans both columns -->
    <div class="col-md bg-green" style="height: 90px;">
      footer
    </div>      
  </div>    
</template>
<script type="text/javascript">
  import {
    QBtn,
    QCard,
    QField,
    QInput,
    QIcon,
    QItem,
    QItemMain,
    QItemSide,
    QItemTile,
    QScrollArea
  } from 'quasar-framework' 
  export default {
    data () {
      return {
        photo: '',
        userId: '',
        name: 'Please, fix me!',
        email: '',
        search: '',
        user: {}      
      }
    },
    components: {
      QBtn,
      QCard,
      QField,
      QInput,
      QIcon,
      QItem,
      QItemMain,
      QItemSide,
      QItemTile,
      QScrollArea
    }
  }
</script>
  <style scoped>
    .fixed-bottom {
      margin - bottom: 1%;
  }

  .fixed-bottom a img {
      width: 25px;
    height: 25px;
  }
  #avatar{
      padding: 20px;
  }
  .footer {
    height: 60px;
    background-color: #009688;
  }
  #user-name {
      left: 90px;
    bottom: 77px;
    position: relative;
    width: 159px;
  }
  #user-actions {
      left: 90px;
    bottom: 71px;
    position: relative;
    width: 171px;
  }
  #menu-collapse {
      margin - top: 5%;
  }
</style>
