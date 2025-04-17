import { markdown_data } from '@/data/sample'

export const translations = {
  es: {
    main: {
      title: 'Vue COCOMO',
      create_button: 'Crear nuevo proyecto',
      empty: {
        span: 'No hay ningún proyecto todavía, prueba {0}.',
        hyper: 'creando una',
      },
      item: {
        ufp: "Elementos del PFSA",
        afp: "Elementos del PFA",
        cost: "Costo de desarrollo",
      }
    },
    create: {
      title: 'Crear nuevo proyecto',
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
        content: markdown_data.a_step.es,
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
        content: markdown_data.b_step.es,
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
        content: markdown_data.c_step.es,
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
        content: markdown_data.d_step.es,
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
            additional: 'N/D | un mes | {value} meses',
          },
          3: {
            label: 'Tamaño del equipo: {0}',
            additional: 'N/D | una persona | {value} personas',
          }
        }
      },
      5: {
        title: 'Costo de desarrollo',
        content: markdown_data.e_step.es,
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
    read: {
      title: 'Detalles del proyecto',
      header: {
        title: 'Detalles del proyecto',
        id: 'ID',
        date: 'Fecha'
      },
      cards: {
        1: "Puntos de Función",
        2: "Puntos Ajustados",
        3: "Costo Total"
      },
      tabs: {
        ufp: {
          title: "Puntos de Función (UFP)",
          container: {
            table_columns: {
              1: "Descripción",
              2: "Tipo",
              3: "Peso",
            },
            footer: {
              subtitle: "Resultados por tipo",
            }
          }
        },
        afp: {
          title: "Factores de ajuste (AFP)",
          container: {
            footer: {
              1: "Suma de factores",
              2: "Resultado",
            }
          }
        },
        info: {
          title: "Información técnica",
          container: {
            column_1: {
              subtitle: "Líneas de Código",
              item_1: "Lenguaje",
              item_2: "Líneas de código",
              item_3: "KLDC",
            },
            column_2: {
              subtitle: "Modelo COCOMO",
              item_1: "Modelo",
              item_2: {
                label: 'Esfuerzo',
                additional: 'no personas/mes | una persona/mes | {value} personas/mes',
              },
              item_3: {
                label: 'Tiempo',
                additional: 'N/D | un mes | {value} meses',
              },
              item_4: {
                label: 'Tamaño del equipo',
                additional: 'N/D | una persona | {value} personas',
              },
            }
          }
        },
        costs: {
          title: "Costos",
          container: {
            title: "Costo total",
            subtitle: {
              1: 'Basado en ',
              2: 'una persona/mes | {value} personas/mes',
              3: ' y ',
              4: 'un mes | {value} meses',
              5: ' de desarrollo'
            }
          }
        },
      },
      delete: {
        title: 'Eliminar proyecto',
        description: '¿Está seguro de que desea eliminar este proyecto?',
      }
    },
    edit: {title: 'Modificar proyecto'},
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
      modify: 'Modificar',
      add: 'Agregar',
      next: 'Siguiente',
      previous: 'Anterior',
      step: 'Paso',
      none: 'Ninguno',
      description: 'Descripción',
      close: 'Cerrar',
      table: {
        empty: 'La tabla está vacía',
      },
      labels: {
        result: 'Resultado',
      },
    },
    toast: {
      delete: {
        title: 'Proyecto eliminado exitosamente',
        description: `Un proyecto ha sido eliminado.`,
      },
      error_read: {
        title: 'Error al obtener el proyecto',
        description: `El proyecto que has introducido no es válido`,
      },
      create: {
        title: 'Proyecto creado exitosamente',
        description: `Un proyecto ha sido creado.`,
      },
      update: {
        title: 'Proyecto actualizado exitosamente',
        description: `Un proyecto ha sido actualizado.`,
      },
    },
  },
  en: {
    main: {
      title: 'Vue COCOMO',
      create_button: 'Create new project',
      empty: {
        span: 'There are no project yet, try {0}.',
        hyper: 'creating one',
      },
      item: {
        ufp: "UFP items",
        afp: "AFP items",
        cost: "Development cost",
      }
    },
    create: {
      title: 'Create new project',
      change_name: {
        title: 'Change project name',
        input: {
          label: 'Name',
          description: 'Maximum number of characters: {size}',
        },
      },
    },
    read: {
      title: 'Project details',
      header: {
        title: 'Project details',
        id: 'ID',
        date: 'Date'
      },
      cards: {
        1: "Function Points",
        2: "Adjusted Points",
        3: "Total Cost"
      },
      tabs: {
        ufp: {
          title: "Function Points (UFP)",
          container: {
            table_columns: {
              1: "Description",
              2: "Type",
              3: "Weight",
            },
            footer: {
              subtitle: "Results by type",
            }
          },
        },
        afp: {
          title: "Adjustment factors (AFP)",
          container: {
            footer: {
              1: "Sum of factors",
              2: "Result",
            }
          }
        },
        info: {
          title: "Technical information",
          container: {
            column_1: {
              subtitle: "Lines of Code",
              item_1: "Language",
              item_2: "Lines of code",
              item_3: "KLOC",
            },
            column_2: {
              subtitle: "COCOMO Model",
              item_1: "Model",
              item_2: {
                label: 'Effort',
                additional: 'N/A | one person/month | {value} person/months',
              },
              item_3: {
                label: 'Time',
                additional: 'N/A | one month | {value} months',
              },
              item_4: {
                label: 'Team size',
                additional: 'N/A | one person | {value} persons',
              },
            }
          }
        },
        costs: {
          title: "Costs",
          container: {
            title: "Total cost",
            subtitle: {
              1: 'Based on ',
              2: 'no person/month | one person/month | {value} persons/month',
              3: ' and ',
              4: 'one month | {value} months',
              5: ' of development'
            }
          }
        },
      },
      delete: {
        title: 'Delete project',
        description: 'Are you sure you want to delete this project?',
      }
    },
    edit: {
      title: 'Edit project',
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
        title: 'Calculation of UFP',
        content: markdown_data.a_step.en,
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
        title: 'Calculation of AFP',
        content: markdown_data.b_step.en,
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
        title: 'Conversion of FP to LOC',
        content: markdown_data.c_step.en,
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
        content: markdown_data.d_step.en,
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
            additional: 'no person/month | one person/month | {value} persons/month',
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
        content: markdown_data.e_step.en,
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
      modify: 'Modify',
      add: 'Add',
      next: 'Next',
      previous: 'Previous',
      step: 'Step',
      none: 'None',
      close: 'Close',
      description: 'Description',
      table: {
        empty: 'The table is empty',
      },
      labels: {
        result: 'Result',
      },
    },
    toast: {
      delete: {
        title: 'Project deleted successfully',
        description: `A project has been deleted.`,
      },
      error_read: {
        title: 'Error getting project',
        description: `The project you entered is not valid.`,
      },
      create: {
        title: 'Project created successfully',
        description: `A new project has been created.`,
      },
      update: {
        title: 'Project updated successfully',
        description: `A project has been updated.`,
      },
    },
  },
}
