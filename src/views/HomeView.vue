<template>
  <section class="home container">
    <img
      class="triangulo"
      src="@/assets/triangulo.svg"
      alt="Triângulo Retângulo"
    />
    <CalculadoraPitagoras />
  </section>
</template>

<script setup>
import CalculadoraPitagoras from "@/components/CalculadoraPitagoras.vue";
</script>

<style scoped>
.home {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.triangulo {
  height: 300px;
  align-self: center;
  justify-self: center;
  margin-right: 50px;
}

/* Responsivo */

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .triangulo {
    height: 250px;
    margin-right: 30px;
  }
}

@media screen and (min-width: 581px) and (max-width: 767px) {
  .home {
    flex-direction: column;
  }

  .triangulo {
    height: 250px;
    margin: 0;
  }
}

@media screen and (max-width: 580px) {
  .home {
    flex-direction: column;
  }
  .triangulo {
    height: 200px;
    margin: 0;
  }
}
</style>
