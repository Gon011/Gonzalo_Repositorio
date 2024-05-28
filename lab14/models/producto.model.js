const productos = [
    {
        nombre: "Cinturon Hombre Piel Vestir Reversible Ajustable Premium",
        precio: 331,
        descripcion: "Este cinturón de hombre de piel es perfecto para vestir de manera elegante y sofisticada. Con su diseño reversible y ajustable, podrás adaptarlo a cualquier ocasión y estilo. La hebilla de acero le da un toque moderno y resistente, mientras que el diseño metálico le añade un toque de distinción. Fabricado con materiales de alta calidad, este cinturón no tiene fecha de vencimiento, por lo que podrás disfrutar de él durante mucho tiempo. Con un ancho de 3.5 cm, es el complemento ideal para cualquier pantalón o traje. No contiene materiales reciclados, lo que garantiza su durabilidad y resistencia.",
        categoria: "Ropa",
        cantidad: 3,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_978826-MLM51298540871_082022-O.webp"
    },
    {
        nombre: "Moda para hombre Streetwear Casual Harem Jogger pantalones para caminar al Khaki_XL jinwen Pantalones tipo cargo",
        precio: 359,
        descripcion: "Pantalones cargo del de los hombres estilo novio vintage de moda. Diseño de múltiples bolsillos, cierre de cremallera, pantalones de trabajo de rectos de algodón. Pantalones casuales cómodos perfectos para actividades al aire libre, como caminatas, campamentos, también ideales para los fines de semana. Combina perfectamente con tu camiseta, camisa, chaqueta de traje, abrigo y zapatillas de deporte. Material: Algodón Poliéster Mezclado",
        categoria: "Ropa",
        cantidad: 8,
        imagen: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/5d02ab3d-fe1b-4d2d-bd1a-fe5e490d0ae0.8a6b69b3800650d6cb41772dd8b28844.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    }

]

module.exports = class Producto {

    constructor(nombre, precio, descripcion, categoria, cantidad, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }

    save() {
        productos.push(this);
    }

    static fetchAll() {
        return productos;
    }
}