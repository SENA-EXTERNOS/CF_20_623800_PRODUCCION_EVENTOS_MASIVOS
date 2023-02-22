<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen')  

      .col-lg-7
        p(data-aos="fade-down").mt-3 En este componente formativo, se abordarán temas relacionados con la importancia de evaluar el proceso creativo de un evento y su ejecución, características fundamentales para aplicar mejoras y brindar mayor satisfacción al cliente; con el propósito, de permitir la construcción del aprendizaje en las temáticas, posibilitando evidenciar la formación de competencias propias para el perfil del aprendiz en el marco de la producción, evaluación y desarrollo de eventos.

        p(data-aos="fade-down").mt-3 En el siguiente video se presenta la introducción a la temática, de modo que le permita identificar elementos importantes y desarrollar las habilidades que se esperan en el transcurso de cada punto de este componente formativo. Le deseamos éxito en la culminación de su formación técnica y profesional.

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
