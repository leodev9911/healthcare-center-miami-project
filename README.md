# Documentación del Proyecto

## Descripción General

El proyecto consiste en la implementación de una landing page utilizando React y TailwindCSS para el diseño responsivo y adaptable a diferentes dispositivos. La página debe ser funcional tanto en dispositivos móviles como en escritorio, manteniendo la consistencia visual en todas las plataformas.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario de forma declarativa y eficiente.
- **TailwindCSS**: Framework de CSS para diseñar interfaces personalizadas sin abandonar la hoja de estilos.

## Implementación del Proyecto

- Implementar la landing page con diseño responsivo para móviles y escritorio.
- Mantener la consistencia visual en todos los dispositivos.
- Utilizar TailwindCSS para la creación de componentes estilizados.
- Optimizar la velocidad de navegación y minimizar el código fuente.

## Estructura del Proyecto

El proyecto se estructura de la siguiente manera:

- **src/**: Directorio principal que contiene el código fuente de la aplicación.
  - **src/app.jsx**: Archivo principal de la aplicación.
  - **src/main.jsx**: Archivo principal de React donde se renderiza la aplicación.
  - **src/index.css**: Archivo de estilos principal de la aplicación.
  - **src/assets/**: Directorio para activos estáticos como imágenes y otros recursos.
  - **src/components/**: Directorio para los componentes de React.
    - **src/components/Shared/**: Componentes compartidos utilizados en varios lugares de la aplicación.
    - **src/components/Home/**: Componentes específicos de la página de inicio.
  - **src/logic/**: Directorio para lógica auxiliar que pueda ayudar al proyecto, como funciones de utilidad.
  - **src/hooks/**: Directorio para los hooks personalizados de React.

## Guía de Instalación y Ejecución

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clonar el repositorio desde GitHub.
2. Navegar hasta el directorio del proyecto.
3. Ejecutar `npm install` para instalar las dependencias.
4. Iniciar el servidor de desarrollo con `npm start`.
5. Acceder a la aplicación desde un navegador web en [http://localhost:3000](http://localhost:3000).

## Buenas Prácticas utilizadas

- Utilizar componentes funcionales y Hooks de React para una mejor gestión del estado y efectos secundarios.
- Aplicar el principio DRY (Don't Repeat Yourself) para evitar la repetición de código.
- Seguir las convenciones de codificación de React y TailwindCSS para un código más legible y mantenible.
- Documentar el código claramente para futuras referencias y contribuciones.

## Sitio en Vivo

El sitio web está disponible en la siguiente dirección: [https://interview-healthcare-project.vercel.app/](https://interview-healthcare-project.vercel.app/)

Recuerda que la estructura del proyecto ha sido actualizada para reflejar la organización de carpetas, donde ahora se tienen componentes específicos para la página de inicio dentro de la carpeta `Home` dentro de `components`.
