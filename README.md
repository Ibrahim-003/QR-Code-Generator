# QR Code Generator

## Descripción

QR Code Generator es una aplicación web que permite a los usuarios generar códigos QR a partir de URLs, descargar los códigos generados y compartirlos en redes sociales como Facebook, Twitter y LinkedIn.

## Características

- Generación de códigos QR a partir de URLs.
- Descarga de códigos QR generados.
- Compartir códigos QR en redes sociales.
- Interfaz de usuario simple y fácil de usar.

## Vista Previa

![Captura del Proyecto](./assets/images/desktop-preview.png)

Puedes ver la versión demo en vivo aquí: [QR Code Generator](https://qr-code-generator-snowy-alpha.vercel.app/)

## Tecnologías Usadas

- HTML
- CSS
- JavaScript
- Libreria QRCode.js

## Instalación y Uso

1. Clona el repositorio:
    ```sh
    git clone https://github.com/Ibrahim-003/QR-Code-Generator.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd qr-code-generator
    ```
3. Abre el archivo `index.html` en tu navegador.

## Estructura del Proyecto

```
QR-code-generator/
├── css/
│   ├── styles.css          # Estilos principales del proyecto
│   └── reset.css         # Reset de los estilos predeterminados
├── images/
│   ├── desktop-preview.png          # Vista previa
│   └── ....
├── js/
│   ├── domElements.js              # Elementos del DOM a usar
│   ├── errorView.js              # Vista si la URL es incorrecta
│   ├── eventHandlers.js             # Manejadores de eventos
│   ├── main.js            # Archivo de ejecucion principal
│   ├── qrGenerator.js           # Generacion del codigo QR
│   ├── share.js           # Funcionalidades para compartir el QR
│   └── utils.js           # Funciones Auxiliares
├── index.html              # Estructura base del proyecto
└── README.md               # Documentación del proyecto
```
## Librería o API Usada

- [QRCode.js](https://github.com/davidshimjs/qrcodejs): Librería utilizada para la generación de códigos QR.

## Autor 👨‍💻
Desarrollado por **[Ibrahim Almeyda](https://github.com/Ibrahim-003)**.
