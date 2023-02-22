<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar2.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Evaluación y acciones de mejora en la producción y operación de eventos masivos.
        p Lograr la satisfacción del cliente es indispensable para obtener un lugar en su corazón. Este proceso solo puede ser posible si se aplica la mejora continua en los servicios, identificando sus debilidades y las fortalezas a potenciar. 
        p.mb-4 Para poner a prueba sus conocimientos, complete los espacios en blanco de cada una de las oraciones con la palabra que corresponde y luego verifique la respuesta:
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar la frase
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
