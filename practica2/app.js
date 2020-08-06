Vue.component('modal', {
  data() {
    return {
      title: 'Hola mundo cruel!',
    };
  },
  methods: {
    closeModal() {
      // this.$emit('close');
      this.$emit('close', false);
    },
  },
  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{title}}</h3>
          <div>
            <slot name="contenido"></slot>
          </div>
          <footer>
            <button @click="closeModal">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`,
});

new Vue({
  el: '#app',
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal(opc) {
      // this.showModal = !this.showModal;
      this.showModal = opc;
    },
  },
});
