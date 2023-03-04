Vue.component("cardproduct-componentc", {
  template: `<div>  
  <div class="container">
      <div class="row">
      <h3>{{producto.nombre}}</h3>
      </div>
      <div class="row">
      <div class="col-12 col-sm-6 col-md-4">
          <img :src="producto.imagen" alt="" width="100%" />
      </div>
      <div class="col-12 col-sm-6 col-md-8">
          <h6>{{producto.descripcion}}</h6>
          <div
          class="p-3 mb-2 text-white"
          :style="configuracionPagina.precioEstilos"
          >
          Precio {{producto.precio}} BOB
          </div>
          <h5>Color</h5>
          <div>
          <div
              class="color-box clic"
              :style="{ backgroundColor: item }"
              v-for="item in producto.colores"
              :key="item.etiqueta"
              @click="colorSelecionado(item)"
          ></div>
          </div>
          <h5>Cantidad</h5>
          <div class="quantity">
          <button @click="menosCantidad()">-</button>
          <div>{{pedido.cantidad}}</div>
          <button @click="masCantidad()">+</button>
          </div>
          <div class="buy-box">
          <button
              type="button"
              class="btn btn-primary"
              @click="comprar(pedido, producto)"
          >
              Comprar
          </button>
          <button type="button" class="btn btn-secondary" @click="restablecerProducto">Restablecer</button>
          </div>
      </div>
      </div>
  </div>
    <div class="container">
      <div class="row">
      <h4>Productos relacionados</h4>
      </div>
      <div class="row">
      <div
          class="col"
          v-for="producto in productosRelacionados"
          :key="producto.id"
      >
          <div class="card" style="width: 20rem" @click="actualizarProducto(producto)">
          <div class="card-body">
              <h5 class="card-title">{{producto.nombre}}</h5>
              <img :src="producto.imagen" alt="" width="100%" />
              <p class="card-text">{{producto.descripcion}}</p>
              <div class="producto-relacionado-precio">
              Precio:{{producto.precio}} BOB
              </div>
              <div>
              <div>
                  <div
                  class="color-box"
                  :style="{ backgroundColor: item }"
                  v-for="item in producto.colores"
                  :key="item.etiqueta"
                  ></div>
              </div>
              </div>
          </div>
          </div>
      </div>
      </div>
  </div>
</div>`,
  data: function () {
    return {
      configuracionPagina: {
        precioEstilos: "background: orangered; color: white; font-weight: bold",
      },
      producto: {},

      productosRelacionados: [],
      pedido: {
        id: 1,
        cantidad: 1,
        color: "red",
      },
    };
  },

  methods: {
    getProducto() {
      axios
        .get("http://localhost:5000/producto")
        .then((response) => {
          console.log(response.data);
          this.producto = response.data;
        })
        .catch((e) => console.log("catch", e));
    },

    getProductoRelacionados() {
      axios
        .get("http://localhost:5000/productosRelacionados")
        .then((response) => {
          console.log(response.data);
          this.productosRelacionados = response.data;
        })
        .catch((e) => console.log("catch", e));
    },

    comprar(pedido, producto) {
      pedido.producto = producto.nombre;
      console.log(pedido, producto);
      alert(JSON.stringify(pedido));
    },
    showProducto(producto) {
      alert(JSON.stringify(producto));
    },
    colorSelecionado(color) {
      this.pedido.color = color;
    },
    masCantidad() {
      this.pedido.cantidad++;
    },
    menosCantidad() {
      if (this.pedido.cantidad > 1) {
        this.pedido.cantidad--;
      }
    },
    actualizarProducto(producto) {
      this.producto = producto;
    },
    restablecerProducto() {
      this.getProducto();
    }
    
  },

  props: ["titulo"],
  mounted() {
    this.getProducto(), this.getProductoRelacionados();
  },
});
