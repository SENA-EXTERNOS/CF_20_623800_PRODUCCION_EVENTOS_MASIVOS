<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Plan de mejoramiento continuo

    .row.justify-content-around.align-items-center.mt-3
        .col-lg-10
          .row.justify-content-around.align-items-center.mt-3.banner2-tema-2
            .col-lg-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")

            .col-lg-10.p-4
              p Las empresas que buscan aumentar la satisfacción de sus clientes deben ser conscientes del establecimiento de mejoras que deben realizar en sus productos o servicios. El objetivo de definir una estrategia de mejora continua es poder ser sostenibles en el tiempo y que el negocio siga funcionando de manera correcta, a partir del reconocimiento de los errores que se tengan en los procesos.

              p A continuación, se presentan los pasos para elaborar un plan de mejoramiento continuo.

    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.1 Elementos para su diseño

    .row  
      p Para tener un adecuado plan de mejoramiento continuo, se debe contar con los siguientes pasos:

    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure(data-aos="zoom-in-left")
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="8%" y="70%" numero="1")
        .h5.mb-2 Definir objetivos
        p El buen funcionamiento de la compañía también depende de la definición de unos objetivos que plasmen lo que se desea alcanzar; de esta manera, el plan de mejoramiento siempre estará con una buena dirección y enfocado hacia lo que corresponde. 

      .tarjeta.color-acento-botones.p-3(x="20%" y="60%" numero="2")
        .h5.mb-2 Medir y analizar los resultados
        p Se deben tener detalles o informes de cada actividad realizada en la organización, con el fin de contar con los datos precisos para poder realizar las evaluaciones correspondientes. 

      .tarjeta.color-acento-botones.p-3(x="35%" y="40%" numero="3")
        .h5.mb-2 Comparar resultados entre procesos
        p En este punto se pueden tomar datos históricos de los procesos de la organización, con la intención de compararlos y encontrar patrones repetidos que puedan dar indicios de errores o mejoras a realizar. 

      .tarjeta.color-acento-botones.p-3(x="45%" y="35%" numero="4")
        .h5.mb-2 Simplificar procesos
        p La mejora continua busca no solo resolver lo inadecuado dentro de la compañía, sino también hacer más fácil todos los procesos para disminuir o evitar por completo la pérdida de dinero y de tiempo en la productividad. 

      .tarjeta.color-acento-botones.p-3(x="62%" y="32%" numero="5")
        .h5.mb-2 Trabajar con todos los colaboradores de la empresa
        p Es necesario que los empleados se vinculen a este proceso de mejora continua, ya que serán ellos quien definitivamente apliquen los cambios necesarios para que la compañía siga creciendo.

      .tarjeta.color-acento-botones.p-3(x="77%" y="23%" numero="6")
        .h5.mb-2 Evaluación periódica del plan de mejora
        p En el tiempo todo tiene modificaciones; el plan de mejora también. Los resultados de hoy no serán los de mañana, por tanto, se debe afinar a medida que vaya transcurriendo el tiempo.

      .tarjeta.color-acento-botones.p-3(x="88%" y="5%" numero="7")
        .h5.mb-2 Análisis y #[i feedback] de resultados
        p Con este paso la compañía puede identificar cuáles han sido las estrategias exitosas y ajustar las que no, para que las mejoras realizadas en verdad se alineen con los objetivos planteados.

    .row.mt-5
      h3 Tipos de mejora

      p Es importante tener en cuenta que el proceso de mejora puede llevarse a cabo de dos maneras:

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-10
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img3.svg", alt="alt")

    .row.mt-5
      h3 Estrategias de mejoramiento
      p En una empresa existen estrategias para aplicar los programas de mejora continua. Se presentan a continuación estas estrategias: 

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-10  
        p Estrategias de mejoramiento continuo en la empresa:   

    TabsC.color-primario
      .py-3.py-md-4(titulo="Analizar el rendimiento")
        .row
          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0
            p Hace parte de un diagnóstico empresarial que evidencia los puntos fuertes y los débiles con respecto al rendimiento de un proceso. Es con esta estrategia que se pueden aplicar mejoras y llegar a resultados óptimos.
          
      .py-3.py-md-4(titulo="Prevenir es la clave")
        .row
          .col-md-6.mb-4.mb-md-0
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')
              
          .col-md-6
            p Si bien todo proceso puede mejorar y todo error tiene su solución, es importante que la cultura organizacional se enfoque en prevenir y no en solucionar. De esta manera, se podrán identificar áreas o procesos en los que hay que centrar las herramientas de mejora continua.

      .py-3.py-md-4(titulo="Motivación e incentivos")
        .row
          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Texto que describa la imagen')
              
          .col-md-6.mb-4.mb-md-0
            p Anteriormente se había hablado de la importancia de tener a todo el equipo de trabajo comprometido con la mejora continua, sin embargo, esto es una labor que se debe cultivar, por lo cual son necesarios los incentivos que valoren la labor de los empleados y los motiven a hacer parte de la filosofía organizacional. Este proceso puede estar compuesto por bonos, regalos, días de descanso, etc.; también se deben tener presentes las jornadas de capacitación que buscan generar un mayor conocimiento en los empleados, e incluso enseñarles varias funciones que puedan ser útiles en sus tiempos de vacaciones o enfermedad. Otro punto para considerar, y que siempre es bien visto, es organizar sesiones de ideas donde se tome en cuenta el punto de vista de los empleados, para crear, reforzar o mejorar procesos, teniendo en cuenta los puntos débiles para aplicar nuevas estrategias. 

      .py-3.py-md-4(titulo="Hora de ocuparse y no estresarse")
        .row
          .col-md-6.mb-4.mb-md-0
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='Texto que describa la imagen')
              
          .col-md-6
            p Siempre quisiéramos que los resultados esperados en una organización fueran óptimos y se reflejarán en el ahora; sin embargo, se debe reconocer que los resultados esperados no se pueden controlar, porque siempre se presentan variables que pueden intervenir en última instancia. En lugar de estresarse por ello, se debe centrar en encontrar estrategias o herramientas que ayuden a crecer, ser flexibles y adaptarse a los cambios constantes del entorno. 

    .row.mt-5
      h3 Métodos de mejora continua
      p Existen diferentes métodos para aplicar la mejora continua, a continuación, se relacionan algunos de ellos:

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-10  
        p Método de las 5S: se basa en 5 principios que provienen de la cultura japonesa.

        p Es una técnica para la gestión laboral proveniente de la cultura empresarial japonesa y basada en 5 principios. El objetivo es ordenar y dar sentido a las funciones. Los principios son:

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-8  
        .tarjeta.p-5(titulo="Ejemplo - 1")
          .imgCont.m-auto
            .row.justify-content-center.mb-4
              ImagenInfografica.color-primario.mb-5
                template(v-slot:imagen)
                  figure(data-aos="zoom-in-left")
                    img(src='@/assets/curso/temas/tema2/img8.svg', alt='', style='')

                .tarjeta.color-acento-botones.p-4(x="20%" y="10%" numero="+" style='border-radius: 10px; background-color: #5038A1;')
                  h5.mb-3.text-center #[i Shitsuke] (hábitos)
                  p.mb-0.text-center Cuando los otros factores están claros, se pueden generar hábitos que logren mantener los objetivos claros y llegar a cumplirlos de una manera más eficiente. 

                .tarjeta.color-acento-botones.p-4(x="80%" y="10%" numero="+" style='border-radius: 10px; background-color: #5038A1')
                  h5.mb-3.text-center #[i Seiri] (selección)
                  p.mb-0.text-center Se basa en eliminar espacio y todo aquello que no desempeñe una función importante para el desarrollo de una labor: herramientas, documentos, etc. 

                .tarjeta.color-acento-botones.p-4(x="90%" y="75%" numero="+" style='border-radius: 10px; background-color: #5038A1')
                  h5.mb-3.text-center #[i Seiton] (organización)
                  p.mb-0.text-center Se enfoca en ordenar los espacios para tener mayor concentración y un desempeño más eficaz. 

                .tarjeta.color-acento-botones.p-4(x="50%" y="100%" numero="+" style='border-radius: 10px; background-color: #5038A1')
                  h5.mb-3.text-center #[i Seiso] (limpieza)
                  p.mb-0.text-center Se evita acumular objetos innecesarios que generen distracciones en el trabajo.

                .tarjeta.color-acento-botones.p-4(x="10%" y="75%" numero="+" style='border-radius: 10px; background-color: #5038A1')
                  h5.mb-3.text-center #[i Seiketsu] (bienestar personal)
                  p.mb-0.text-center Nos permite evidenciar incoherencias en el lugar de trabajo y en los procesos. El objetivo es estandarizar los procesos de la manera más óptima posible.

    .row.mt-3
      p #[b #[i Lean manufacturing:]]

      p Su fin también es identificar y eliminar lo que no sirva dentro de una compañía, como procesos, documentos, actividades que no agregan valor, etc. El objetivo de este método va en contraposición al de la producción en masa, ya que con #[i lean manufacturing] se eliminan la mayor cantidad de desperdicios posibles.

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-10
        p Se presenta a continuación el Ciclo PDCA o Rueda Deming, la cual se centra en la calidad bajo una metodología cíclica que busca la mejora en dicha área. Cada letra tiene un significado y se representa de la siguiente manera:


    .row.justify-content-around.align-items-center.mt-3
      .col-lg-9.position-relative
        .avatar
          figure(data-aos="zoom-in-left")
            img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img10.svg", alt="alt").img100
            .col
              h5 P - #[i Plan]
              p Se plantean los problemas que se deben resolver y los recursos que hay disponibles para ello. 

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img11.svg", alt="alt").img100
            .col
              h5 D - #[i Do]
              p En español significa hacer; aquí se plantean los pasos a seguir para poder resolver lo planteado en el punto anterior.

        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img12.svg", alt="alt").img100
            .col
              h5 C - #[i Check]
              p En español, verificar. En este punto se hace un análisis de resultados después de haber aplicado el plan. Se valida la efectividad de lo planeado al inicio.

        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema2/img13.svg", alt="alt").img100
            .col
              h5 A - #[i Act]
              p En español, actuar. En este punto se corrige lo que se haya encontrado con el análisis de datos del punto anterior. También se deben reconocer las nuevas mejoras propicias por hacer. 

    .row.mt-5
      p #[b Kanban]

      p Esta técnica se basa en la demanda de los clientes. Este método busca agilizar las funciones de trabajo dividiéndolas en fases. Se le debe indicar al equipo de trabajo las acciones que deben desarrollar en términos de tarea, función y observaciones.

      p Kanban se reconoce por las siguientes características:

      ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Visualización efectiva de tareas.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Procesos de gestión basados en objetivos claros.
          li 
            .lista-ol--cuadro__vineta
              span c
            | Priorización según la urgencia e importancia.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Mejora continua empresa.


    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.2 Sistema de aseguramiento de calidad ISO 9000, 9001 y 9004

    .row.justify-content-around.align-items-center
      .col-lg-12
        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-3
          p En la actualidad existen una serie de normas estandarizadas que se presentan de la siguiente manera:
          p ISO 9000: 2000. Sistemas de gestión de la calidad. Fundamentos y vocabulario.
          p ISO 9001: 2000. Sistemas de gestión de la calidad. Requisitos.
          p ISO 9004: 2000. Sistemas de gestión de la calidad. Directrices para la mejora del desempeño.

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-8
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img14.svg", alt="alt")

        p.mt-3 En este orden de ideas, los sistemas de aseguramiento de calidad ISO 9000, 9001 y 9004 presentan las siguientes características:

    .tarjeta.tarjeta--azul.p-4.banner1-tema-1
      SlyderA(tipo="b")
        .row.p-2
          .col-md-6.mb-4.mb-md-0
            p Las normas ISO son un conjunto de normas orientadas a ordenar la gestión de una empresa en sus distintos ámbitos. Aunque su implementación es de carácter voluntario, han ganado gran reconocimiento y aceptación internacional debido a la importancia que ha tomado la figura y la opinión de los consumidores. Las normas ISO son establecidas por el Organismo Internacional de Estandarización (ISO), y se componen de estándares y guías relacionados con sistemas y herramientas específicas de gestión aplicables en cualquier tipo de organización (ISO, 2015).

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img15.svg', alt='Texto que describa la imagen')

        .row.p-2
          .col-md-6.mb-4.mb-md-0
            p En los últimos tiempos han tenido una gran difusión en el mundo empresarial como una metodología para obtener buenos resultados y satisfacción en los procesos con los clientes, los trabajadores, los accionistas y la sociedad en general, abarcando el término de calidad total, que a su vez es un compromiso con toda la compañía en la mejora continua. Cuando esta calidad se desea implementar como un sistema de gestión, se aplica a un proceso largo que implica un cambio en la forma de dirigir y gestionar los procesos internos de la compañía, que por supuesto, va de cara al cliente. 

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img16.svg', alt='Texto que describa la imagen')
                     
        .row.p-2
          .col-md-6.mb-4.mb-md-0
            p Al interior de la organización, con los empleados, se logra crear una cultura participativa que permita la creatividad y la innovación. Se potencian los grupos multidisciplinares y la formación continua, se respeta al medio ambiente desde la labor de la compañía y se potencia la seguridad en el trabajo. Para los accionistas también hay beneficios, como la rentabilidad en el mediano y largo plazo, además se evitan daños innecesarios en los inventarios, equipos, exceso de informes, reuniones y tareas no productivas. 

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img17.svg', alt='Texto que describa la imagen')
                  
        .row.p-2
          .col-md-6.mb-4.mb-md-0
            p Finalmente, con respecto a los clientes y la aplicación de las normas, se les añade valor haciendo los procesos de manera correcta y sin rectificaciones, aceptando que el cliente requiere de una mejora continua y que cada uno tiene su propia definición de calidad. 

          .col-md-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema2/img18.svg', alt='Texto que describa la imagen')
                  

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
