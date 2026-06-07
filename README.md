# 🚀 Fundamentos de JavaScript - Dashboard de Consola

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Estudios](https://img.shields.io/badge/DAM-1º%20Curso-blueviolet?style=for-the-badge&logo=bookstack&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-Completado-success?style=for-the-badge)

Este proyecto consiste en un **Dashboard web minimalista** diseñado para servir de interfaz y entorno de pruebas para una serie de ejercicios prácticos sobre los fundamentos de JavaScript (JS). El proyecto ha sido desarrollado como trabajo de clase para el **1º curso del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)**.

---

## 👨‍💻 Autor

Sergio Alcántara - Estudiante de 1º de DAM.

---

## 🖥️ Vista Previa del Dashboard

La interfaz simula una ventana de terminal en modo oscuro, optimizada con CSS moderno (Flexbox, CSS Variables y Media Queries) que invita al usuario a interactuar con el entorno de depuración.

* **Página Principal:** Muestra un índice visual de los módulos evaluados.
* **Interactividad:** Se apoya en eventos del DOM y alertas dinámicas al cargar el sitio.

---

## 🛠️ Contenidos Técnicos Manejados

El archivo `script.js` está estructurado utilizando bloques colapsables (`console.group()`) para facilitar la lectura y corrección de los siguientes bloques temáticos:

1.  **Variables y Tipos:** Uso y diferencias de alcance/mutabilidad entre `let`, `const` y `var`. Tipos primitivos (`string`, `number`, `boolean`) y operador `typeof`.
2.  **Operadores y Expresiones:** Operaciones aritméticas, de asignación, lógicas (`&&`, `||`, `!`) y de comparación débil/estricta (`==` vs `===`). Manejo de Template Literals y coerción de tipos.
3.  **Control de Flujo:** Estructuras condicionales (`if`, `else if`, `else`), evaluación de valores *truthy* y *falsy*, operador ternario y estructuras selectivas `switch`.
4.  **Funciones:** Declaración de funciones tradicionales, funciones anónimas y funciones flecha (*arrow functions*). Retorno de valores, parámetros, argumentos y gestión del *Scope* (ámbito local vs global).
5.  **Arrays:** Inicialización de arreglos, mutabilidad de elementos, propiedad `length` y uso de métodos nativos (`push`, `pop`, `unshift`, `shift`, `indexOf`, `includes`).
6.  **Objetos:** Creación de objetos literales, acceso y manipulación de propiedades (notación por punto y por corchetes), borrado de claves con `delete` y declaración de métodos internos usando el contexto `this`.
7.  **Bucles e Iteraciones:** Control de repeticiones mediante estructuras `for`, `while` y `do-while`. Técnicas de conteo, acumulación, búsqueda con rupturas anticipadas (`break`) y saltos de iteración (`continue`).
8.  **DOM y Manipulación de Elementos:** Selección de nodos mediante `querySelector`, alteración de contenidos con `textContent`, inyección dinámica de elementos al árbol HTML mediante `createElement` / `after` y modificación de estilos en línea.

---

## 🚀 Cómo Ejecutar el Proyecto

Al tratarse de un desarrollo *frontend* nativo (Vanilla HTML/CSS/JS), no requiere de servidores locales ni instalaciones de dependencias.

1.  **Clona el repositorio** en tu máquina local:
    ```bash
    git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
    ```
2.  **Abre el archivo `index.html`** en cualquier navegador web moderno (Chrome, Edge, Firefox, Brave, etc.).
3.  **Abre la Consola de Desarrollador:**
    * Presiona la tecla **`F12`**.
    * O utiliza el atajo **`Ctrl + Mayús + I`** (Windows/Linux) / **`Cmd + Opt + I`** (Mac).
    * O haz clic derecho en cualquier parte de la pantalla y selecciona **Inspeccionar**, luego muévete a la pestaña **Consola**.

---

## 📂 Estructura del Proyecto

```text
📁 mi-proyecto-javascript/
│
├── 📄 index.html      # Estructura semántica del Dashboard y nodos de control para el DOM
├── 📄 styles.css      # Hoja de estilos con arquitectura moderna y diseño oscuro (Developer)
├── 📄 script.js       # Script principal estructurado con la resolución de los ejercicios
└── 📄 README.md       # Documentación del proyecto

