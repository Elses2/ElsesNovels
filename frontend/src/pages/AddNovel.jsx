import { useEffect, useState } from "react";
import Navbar from '../components/navbar/Navbar.jsx'; 
export default function AddNovel() {
 
  return (
    <>
    <div>
      <Navbar />
    </div>

   <form class="space-y-12">
  <div class="border-b border-white/10 pb-12">
    <h2 class="text-base/7 font-semibold text-white">Nueva Obra</h2>
    <p class="mt-1 text-sm/6 text-gray-400">Ingresa la información básica de tu obra.</p>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

    {/*<!-- TÍTULO -->*/}
      <div class="sm:col-span-4">
        <label for="titulo" class="block text-sm/6 font-medium text-white">Título</label>
        <div class="mt-2">
          <input id="titulo" name="titulo" type="text" placeholder="Mi nueva historia"
            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white
                   outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500
                   focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

    {/*<!-- DESCRIPCIÓN -->*/}
      <div class="col-span-full">
        <label for="descripcion" class="block text-sm/6 font-medium text-white">Descripción</label>
        <div class="mt-2">
          <textarea id="descripcion" name="descripcion" rows="4"
            placeholder="Describe de qué trata tu obra..."
            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white
                   outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500
                   focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></textarea>
        </div>
      </div>

    {/*<!-- GÉNERO -->*/}
      <div class="sm:col-span-3">
        <label for="genero" class="block text-sm/6 font-medium text-white">Género</label>
        <div class="mt-2">
          <select id="genero" name="genero"
            class="w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3
                   text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800
                   focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
            <option>Fantasía</option>
            <option>Ciencia Ficción</option>
            <option>Romance</option>
            <option>Terror</option>
            <option>Drama</option>
            <option>Acción</option>
          </select>
        </div>
      </div>

    {/*<!-- IMAGEN DE PRESENTACIÓN -->*/}
      <div class="col-span-full">
        <label for="imagen" class="block text-sm/6 font-medium text-white">Imagen de presentación</label>
        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
          <div class="text-center">
            <svg viewBox="0 0 24 24" fill="currentColor"
              class="mx-auto size-12 text-gray-600">
              <path d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" />
            </svg>

            <div class="mt-4 flex text-sm text-gray-400">
              <label for="imagen" class="relative cursor-pointer rounded-md font-semibold text-indigo-400 hover:text-indigo-300">
                <span>Subir archivo</span>
                <input id="imagen" name="imagen" type="file" class="sr-only" />
              </label>
              <p class="pl-1">o arrastra y suelta</p>
            </div>

            <p class="text-xs text-gray-400">PNG, JPG hasta 10MB</p>
          </div>
        </div>
      </div>

    </div>
  </div>

    {/*<!-- BOTÓN -->*/}
  <div class="flex justify-end">
    <button type="submit"
      class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm
             hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
      Guardar obra
    </button>
  </div>

</form>
 
    </ >

  );
}
