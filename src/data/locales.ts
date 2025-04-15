export const translations = {
  es: {
    main: {
      create_button: 'Crear nuevo proyecto',
      empty: {
        span: 'No hay ningún proyecto todavía, prueba {0}.',
        hyper: 'creando una',
      },
    },
    create: {
      change_name: {
        title: 'Cambiar nombre del proyecto',
        input: {
          label: 'Nombre',
          description: 'Número máximo de caracteres: {size}',
        },
      },
    },
    steps: {
      1: {
        title: 'Cálculo de PFSA',
        content: `
      Los PFSA se calculan identificando las funciones del sistema, como entradas, salidas, consultas, archivos internos y archivos externos.

      Asigna un peso a cada función según su complejidad (baja, media, alta) y suma los valores para obtener el PFSA, donde:

      - **Entradas externas (EI):** Datos que ingresan al sistema desde el usuario o sistemas externos.
      - **Salidas externas (EO):** Información que el sistema genera y envía al usuario o sistemas externos.
      - **Consultas externas (EQ):** Interacciones que permiten al usuario obtener información específica.
      - **Ficheros lógicos internos (ILF):** Bases de datos o archivos gestionados por el sistema.
      - **Ficheros lógicos externos (ELF):** Bases de datos o archivos gestionados por sistemas externos pero utilizados por el sistema.

      Es importante asignar complejidad, según los criterios como el número de campos o el nivel de interacción. De acuerdo a la complejidad es que se asigna un peso para cada función del sistema.
    `,
        table_columns: {
          1: 'Nro.',
          2: 'Nombre',
          3: 'Tipo',
          4: 'Bajo',
          5: 'Medio',
          6: 'Alto',
        },
        values: {
          external_inputs: 'Entradas externas',
          external_outputs: 'Salidas internas',
          external_queries: 'Consultas externas',
          internal_logical_files: 'Archivos lógicos internos',
          external_interface_files: 'Archivos de interfaz externa',
        },
        weights: {
          low: 'Bajo',
          medium: 'Medio',
          high: 'Alto',
        },
        modals: {
          create: 'Agregar elemento',
          modify: 'Modificar elemento',
          inputs: {
            name: {
              label: 'Nombre',
              placeholder: 'Nombre de la función',
            },
            type: {
              label: 'Tipo',
              placeholder: 'Seleccione el tipo',
            },
            complexity: {
              label: 'Complejidad',
            },
          },
        },
      },
      2: {
        title: 'Cálculo de PFA',
        content: '',
        table_columns: {
          1: 'Nro.',
          2: 'Nombre',
          3: 'Puntuación',
        },
        results: {
          1: "Suma total",
          2: "Factores de ajuste"
        },
        modals: {
          create: 'Agregar elemento',
          modify: 'Modificar elemento',
          inputs: {
            name: {
              label: 'Nombre',
              placeholder: 'Nombre de la función',
            },
            score: {
              label: 'Puntuación',
              placeholder: 'Puntuación de la función',
              description: 'La puntuación debe ser un número entre 0 y 5.',
            }
          }
        }
      },
      3: {
        title: 'Conversión de PF a LDC',
        content: '',
        table_columns: {
          1: 'Nro.',
          2: 'Lenguaje de programación',
          3: 'Líneas de código por función',
        },
        inputs: {
          language: {
            label: "Selecciona el lenguaje de programación",
          }
        },
        results: {
          1: "Líneas de código del lenguaje seleccionado",
          2: "Lineas de código",
          3: "Kilolíneas de código",
          lines_of_code: 'LDC'
        }
      },
      4: {
        title: 'Aplicación de COCOMO',
        content: '',
        input: {
          label: 'Selecciona el modelo',
          placeholder: 'Seleccione',
        },
        models: {
          'Orgánico': 'Orgánico',
          'Semiacoplado': 'Semiacoplado',
          'Empotrado': 'Empotrado',
        },
        results: {
          1: {
            label: 'Esfuerzo estimado: {0}',
            additional: 'no personas/mes | una persona/mes | {value} personas/mes',
          },
          2: {
            label: 'Cálculo de tiempo: {0}',
            additional: 'un mes | {value} meses',
          },
          3: {
            label: 'Tamaño del equipo: {0}',
            additional: 'una persona | {value} personas',
          }
        }
      },
      5: {
        title: 'Costo de desarrollo',
        content: '',
        save: 'Guardar en la base de datos',
        update: 'Modificar en la base de datos',
        alerts: {
          must_enter_ufp: 'Debe introducir las funciones para el cálculo de PFSA.',
          must_enter_afp: 'Debe introducir las funciones para el cálculo de PFA.',
          loc_no_result: 'No hay resultado para la conversión de líneas de código.',
          cocomo_no_result: 'No hay valor para la aplicación de COCOMO.',

        }
      },
      alerts: {
        must_enter_functions: 'Debes introducir las funciones para obtener un resultado.',
        must_enter_other_functions: 'Debes introducir las funciones (PFA/PFSA) para obtener un resultado.',

      },
    },
    side_menu: {
      title: 'Resumen',
      1: {
        subtitle_1: 'Funciones insertadas',
        subtitle_2: 'Resultado',
      },
      2: {
        subtitle_1: 'Funciones insertadas',
        subtitle_2: 'Suma total',
        subtitle_3: 'Resultado',
      },
      3: {
        subtitle_1: 'Lenguaje',
        subtitle_2: 'Líneas de código',
      },
      4: {
        subtitle_1: 'Modelo',
        subtitle_2: 'Esfuerzo estimado',
        subtitle_3: 'Tiempo estimado',
        subtitle_4: 'Tamaño del equipo',
      },
      5: {
        subtitle_1: 'Valor de estimación',
      },
    },
    ui: {
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      add: 'Agregar',
      next: 'Siguiente',
      previous: 'Anterior',
      step: 'Paso',
      none: 'Ninguno',
      table: {
        empty: 'La tabla está vacía',
      },
      labels: {
        result: 'Resultado',
      },
    },
  },
  en: {
    main: {
      create_button: 'Create new project',
      empty: {
        span: 'There are no project yet, try {0}.',
        hyper: 'creating one',
      },
    },
    create: {
      change_name: {
        title: 'Change project name',
        input: {
          label: 'Name',
          description: 'Maximum number of characters: {size}',
        },
      },
    },
    side_menu: {
      title: 'Summary',
      1: {
        subtitle_1: 'Inserted functions',
        subtitle_2: 'Result',
      },
      2: {
        subtitle_1: 'Inserted functions',
        subtitle_2: 'Total sum',
        subtitle_3: 'Result',
      },
      3: {
        subtitle_1: 'Language',
        subtitle_2: 'Lines of code',
      },
      4: {
        subtitle_1: 'Model',
        subtitle_2: 'Effort estimation',
        subtitle_3: 'Time estimation',
        subtitle_4: 'Team size',
      },
      5: {
        subtitle_1: 'Estimation value',
      },
    },
    steps: {
      1: {
        title: 'Calculation of PFSA',
        content: ``,
        table_columns: {
          1: 'No.',
          2: 'Name',
          3: 'Type',
          4: 'Low',
          5: 'Medium',
          6: 'High',
        },
        values: {
          external_inputs: 'External inputs',
          external_outputs: 'Internal outputs',
          external_queries: 'External queries',
          internal_logical_files: 'Internal logical files',
          external_interface_files: 'External interface files',
        },
        weights: {
          low: 'Low',
          medium: 'Medium',
          high: 'High',
        },
        modals: {
          create: 'Add item',
          modify: 'Modify item',
          inputs: {
            name: {
              label: 'Name',
              placeholder: 'Function name',
            },
            type: {
              label: 'Type',
              placeholder: 'Select type',
            },
            complexity: {
              label: 'Complexity',
            },
          },
        },
        alerts: {
          must_functions: '',
        },
      },
      2: {
        title: 'Calculation of PFA',
        content: '',
        table_columns: {
          1: 'No.',
          2: 'Name',
          3: 'Score',
        },
        results: {
          1: 'Total sum',
          2: 'Adjustment factors',
        },
        modals: {
          create: 'Add item',
          modify: 'Modify item',
          inputs: {
            name: {
              label: 'Name',
              placeholder: 'Function name',
            },
            score: {
              label: 'Score',
              placeholder: 'Function score',
              description: 'The score must be a number between 0 and 5.',
            },
          },
        },
      },
      3: {
        title: 'Conversion of PF to LOC',
        content: '',
        table_columns: {
          1: 'No.',
          2: 'Programming language',
          3: 'Lines of code per function',
        },
        inputs: {
          language: {
            label: "Select programming language",
          }
        },
        results: {
          1: 'Lines of code of the selected language',
          2: 'Lines of code',
          3: 'Kilolines of code',
          lines_of_code: 'LOC'
        },
      },
      4: {
        title: 'Application of COCOMO',
        content: '',
        input: {
          label: 'Select model',
          placeholder: 'Select',
        },
        models: {
          'Orgánico': 'Organic',
          'Semiacoplado': 'Semi-detached',
          'Empotrado': 'Embedded',
        },
        results: {
          1: {
            label: 'Effort estimation: {0}',
            additional: 'no person/months | one person/months | {value} person/months',
          },
          2: {
            label: 'Time calculation: {0}',
            additional: 'one month | {value} months',
          },
          3: {
            label: 'Team size: {0}',
            additional: 'one person | {value} persons',
          },
        },
      },
      5: {
        title: 'Development cost',
        content: '',
        save: 'Save in the database',
        update: 'Modify in the database',
        alerts: {
          must_enter_ufp: 'You must enter the functions for the calculation of PFSA.',
          must_enter_afp: 'You must enter the functions for the calculation of PFA.',
          loc_no_result: 'There is no result for the conversion of lines of code.',
          cocomo_no_result: 'There is no value for the application of COCOMO.',
        }
      },
      alerts: {
        must_enter_functions: 'You must enter the functions to get a result.',
        must_enter_other_functions: 'You must enter the functions (UFP/AFP) to get a result.',
      },
    },
    ui: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      add: 'Add',
      next: 'Next',
      previous: 'Previous',
      step: 'Step',
      none: 'None',
      table: {
        empty: 'The table is empty',
      },
      labels: {
        result: 'Result',
      },
    },
  },
}
