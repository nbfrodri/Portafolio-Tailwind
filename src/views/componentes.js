export default {
  template: `
    <section class="py-16 bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Playground de Componentes</h1>
        
        <!-- Variantes de botones -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Botones</h2>
          <div class="flex flex-wrap gap-4">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
              Primario
            </button>
            <button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">
              Secundario
            </button>
            <button class="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2 px-4 rounded transition-colors">
              Contorno
            </button>
          </div>
        </div>

        <!-- Grid de tarjetas -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Tarjetas</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div class="h-32 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div class="p-4">
                <h3 class="font-bold text-gray-900 mb-2">Título de Tarjeta</h3>
                <p class="text-gray-600 text-sm">La descripción de la tarjeta va aquí.</p>
              </div>
            </article>
            
            <article class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div class="h-32 bg-gradient-to-r from-green-400 to-teal-500"></div>
              <div class="p-4">
                <h3 class="font-bold text-gray-900 mb-2">Título de Tarjeta</h3>
                <p class="text-gray-600 text-sm">La descripción de la tarjeta va aquí.</p>
              </div>
            </article>
            
            <article class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div class="h-32 bg-gradient-to-r from-pink-400 to-red-500"></div>
              <div class="p-4">
                <h3 class="font-bold text-gray-900 mb-2">Título de Tarjeta</h3>
                <p class="text-gray-600 text-sm">La descripción de la tarjeta va aquí.</p>
              </div>
            </article>
          </div>
        </div>
        
        <a href="#/" class="inline-block text-blue-600 hover:text-blue-700 font-medium">← Volver a Inicio</a>
      </div>
    </section>
  `,
};
