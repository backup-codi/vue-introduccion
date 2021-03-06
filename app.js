Vue.component('coin-detail', {
  props: ['coin'],

  data() {
    return {
      showPrices: false,
      value: 0,
    };
  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },
    convertedValue() {
      if (!this.value) {
        return 0;
      }
      return this.value / this.coin.price;
    },
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;

      // Cuando de emite el evento para que el padre cambie el color, se aprovecha y se envia el color que queremos ahora
      // this.$emit('change-color', 'FF96C8');

      // Otro ejemplo es si showPrices es TRUE mandar un color de lo contrario mandar otro
      this.$emit('change-color', this.showPrices ? 'FF96C8' : '3D3D3D');
    },
  },
  created() {
    console.log('Created coin-detail...');
  },

  mounted() {
    console.log('Mounted coin-detail...');
  },

  template: `
    <div>
    <img
      v-on:mouseover="toggleShowPrices"
      v-on:mouseout="toggleShowPrices"
      :src="coin.img"
      :alt="coin.name"
    />
    <h1 :class="coin.changePercent > 0 ? 'green' : 'red'">
      {{title}}

      <span v-if="coin.changePercent > 0">👍🏽</span>
      <span v-else-if="coin.changePercent < 0">👎🏽</span>
      <span v-else>🤞🏽</span>

      <span @click="toggleShowPrices">
        {{ showPrices ? '👀' : '🙅🏽‍♂️'}}
      </span>
    </h1>
    <input type="number" v-model="value" />
    <span>{{ convertedValue }}</span>

    <slot name="text"></slot>
    <slot name="link"></slot>

    <ul v-show="showPrices">
      <li
        class="uppercase"
        :class="{ orange: p.value === coin.price, red: p.value < coin.price, green: p.value > coin.price}"
        v-for="(p, i) in coin.pricesWithDays"
        :key="p.day"
      >
        {{ i }} - {{p.day}} - {{ p.value }}
      </li>
    </ul>
  </div>
  `,
});

new Vue({
  el: '#app',
  data() {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 11,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ],
      },
      color: 'f4f4f4',
    };
  },

  created() {
    console.log('Created...');
  },

  mounted() {
    console.log('Mounted...');
  },

  methods: {
    updateColor(color) {
      this.color = color || this.color.split('').reverse().join('');
    },
  },
});
