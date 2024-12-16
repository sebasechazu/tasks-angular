# Proyecto Tasks Angular

## Estructura del Proyecto

```plaintext
src/
├── app/
│   ├── core/
│   │   ├── guards/          # Guards generales
│   │   ├── interceptors/    # Interceptores generales
│   │   ├── services/        # Servicios globales (por ejemplo, autenticación)
│   │   ├── models/          # Interfaces y modelos generales
│   │   ├── constants/       # Constantes generales
│   │   ├── utils/           # Funciones utilitarias compartidas
│   │   └── core.module.ts   # Módulo Core
│   ├── shared/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── directives/      # Directivas reutilizables
│   │   ├── pipes/           # Pipes reutilizables
│   │   ├── services/        # Servicios compartidos entre módulos
│   │   └── shared.module.ts # Módulo Shared
│   ├── features/
│   │   ├── feature1/
│   │   │   ├── components/  # Componentes específicos de este módulo
│   │   │   ├── services/    # Servicios específicos del módulo
│   │   │   ├── models/      # Interfaces específicas del módulo
│   │   │   ├── feature1-routing.module.ts
│   │   │   └── feature1.module.ts
│   │   ├── feature2/        # Similar a feature1
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/                  # Archivos estáticos (imágenes, JSON, etc.)
│   ├── data/                # Datos estáticos, como JSON
├── environments/            # Archivos de configuración de entornos
├── styles/                  # Estilos globales (SCSS o CSS)
├── index.html
└── main.ts

```