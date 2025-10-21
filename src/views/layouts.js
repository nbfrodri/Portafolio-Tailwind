export default {
  template: `
    <section class="py-16 bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Patrones de Grid y Flexbox</h1>

        <!-- Flexbox: eje horizontal y centrado -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Flex: fila centrada</h2>
          <div class="flex items-center justify-center gap-4">
            <div class="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded">1</div>
            <div class="w-24 h-24 bg-green-500 text-white flex items-center justify-center rounded">2</div>
            <div class="w-24 h-24 bg-pink-500 text-white flex items-center justify-center rounded">3</div>
          </div>
        </div>

        <!-- Flexbox: columna responsiva -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Flex: columna responsiva</h2>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded">Col 1</div>
            <div class="flex-1 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded">Col 2</div>
            <div class="flex-1 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded">Col 3</div>
          </div>
        </div>

        <!-- Grid: cards 1-3-? -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Grid: tarjetas responsivas</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article class="p-4 border rounded-lg">
              <h3 class="font-bold mb-2">Tarjeta A</h3>
              <p class="text-sm text-gray-600">Una tarjeta en la grid.</p>
            </article>
            <article class="p-4 border rounded-lg">
              <h3 class="font-bold mb-2">Tarjeta B</h3>
              <p class="text-sm text-gray-600">Otra tarjeta en la grid.</p>
            </article>
            <article class="p-4 border rounded-lg">
              <h3 class="font-bold mb-2">Tarjeta C</h3>
              <p class="text-sm text-gray-600">Otra tarjeta más.</p>
            </article>
            <article class="p-4 border rounded-lg">
              <h3 class="font-bold mb-2">Tarjeta D</h3>
              <p class="text-sm text-gray-600">Contenido adicional.</p>
            </article>
            <article class="p-4 border rounded-lg">
              <h3 class="font-bold mb-2">Tarjeta E</h3>
              <p class="text-sm text-gray-600">Contenido adicional.</p>
            </article>
            <article class="p-4 border rounded-lg">
              <h3 class="font-bold mb-2">Tarjeta F</h3>
              <p class="text-sm text-gray-600">Contenido adicional.</p>
            </article>
          </div>
        </div>

        <!-- Grid: Masonry-like with row-span -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Grid: Masonry simple (rows)</h2>
          <div class="grid grid-cols-3 gap-4 auto-rows-fr">
            <div class="col-span-2 row-span-2 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded p-4 text-white">Elemento grande (2x2)</div>
            <div class="bg-gray-100 rounded p-4">Pequeño 1</div>
            <div class="bg-gray-100 rounded p-4">Pequeño 2</div>
            <div class="bg-gray-100 rounded p-4">Pequeño 3</div>
            <div class="bg-gray-100 rounded p-4">Pequeño 4</div>
          </div>
        </div>

        <!-- Flex utilities: space-between and wrap -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4">Flex: space-between y wrap</h2>
          <div class="flex flex-wrap justify-between gap-4">
            <div class="w-40 h-24 bg-yellow-200 rounded flex items-center justify-center">Box 1</div>
            <div class="w-40 h-24 bg-yellow-300 rounded flex items-center justify-center">Box 2</div>
            <div class="w-40 h-24 bg-yellow-400 rounded flex items-center justify-center">Box 3</div>
            <div class="w-40 h-24 bg-yellow-500 rounded flex items-center justify-center text-white">Box 4</div>
          </div>
        </div>

        <a href="#/" class="inline-block text-blue-600 hover:text-blue-700 font-medium">← Volver a Inicio</a>
      </div>
    </section>
  `,
};
