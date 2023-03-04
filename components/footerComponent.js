Vue.component(
    'footer-component',
    {
        template:    `<div>   <footer
                        :style="{ backgroundColor: data.footerColor }"
                    ></footer>
                    </div>`,    
        data: function(){
            return {
                data: {
                    marca: 'MegaDron',
                    menuColor: '#5b88a5',
                    footerColor: '#158fa2',
                    precioEstilos:
                    'background: orangered; color: white; font-weight: bold',
                    menus: [
                    {
                        etiqueta: 'Inicio',
                        url: '',
                    },
                    {
                        etiqueta: 'Tienda',
                        url: '',
                    },
                    ],
                },
            
            }
        },
        props: ["titulo"],
        mounted() {
            this.numero =10
        },
    }
);