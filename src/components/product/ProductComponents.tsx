import { allProducts } from "../../data/productData"

interface ProductCardProps {
    product: Product
}

//function component que recibe productprops

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
         <div
      className="
        bg-white              /* Fondo blanco para la tarjeta */
        shadow-sm             /* Sombra sutil, parece que la original es muy ligera o nula */
        overflow-hidden       /* Asegura que el contenido (especialmente la imagen) no se desborde */
        relative              /* Para posicionar el botón de 'Quick Add' absolutamente */
        flex                  /* Usa flexbox para apilar contenido */
        flex-col              /* Contenido en columna */
        h-full                /* Asegura que la tarjeta ocupe el alto completo disponible en una grilla */

        // --- Anchos responsivos para que se adapte bien ---
        w-72                  /* Ancho base de 288px para móviles (como md:w-72 que te gustó antes) */
        md:w-96          
      "
    >
      {/* Contenedor de la Imagen y Efectos Hover */}
      <div className="relative w-full overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="
            w-full
            h-full
            object-cover          /* La imagen cubre el área, puede recortar bordes */
          "
        />

        {/* Etiqueta de 'Destacado' (opcional, ya que la web de Lando Norris no la usa visiblemente en la colección) */}
        {product.isFeatured && (
          <span className="
            absolute top-2 left-2 /* Posición superior izquierda */
            bg-[#F9FAFB]         /* Color de fondo */
            text-black            /* Color de texto */
            text-xs               /* Tamaño de fuente pequeño */
            px-4 py-2             /* Relleno */
            z-10                  /* Asegura que esté por encima de la imagen */
          ">
            DESTACADO
          </span>
        )}

      </div>

      {/* Sección de la Información del Producto (Nombre y Precio) */}
      <div className="p-4 flex flex-col flex-grow justify-center font-bebas">
        <h3 className="
          text-sm               /* Tamaño de texto */
          text-gray-900         /* Color de texto oscuro */
          mb-1                  /* Margen inferior mínimo */
          tracking-wide         /* Espaciado entre letras */
          uppercase             /* Convertir a mayúsculas */
          font-extrabold
        ">
          {product.name}
        </h3>
        <p className="
          text-xs             /* Tamaño de texto para precio */
          text-gray-700         /* Un poco más claro que el nombre */
          tracking-wider        /* Espaciado entre letras para el precio */
          uppercase             /* Convertir a mayúsculas */
        ">
          {product.price}
        </p>
        {/*
          // La web de Lando Norris no muestra stock visiblemente en las tarjetas de colección.
          // Si lo quieres, puedes descomentar y ajustar:
          {product.stock > 0 ? (
            <span className="text-green-600 text-sm mt-2">En Stock ({product.stock})</span>
          ) : (
            <span className="text-red-600 text-sm mt-2">Agotado</span>
          )}
        */}
      </div>
    </div>
    )
}

export const ProductList : React.FC = () => {
    return (
        <div>
            {allProducts.map(product => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
    )
}