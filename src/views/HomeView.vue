<template>
  <section class="home container">
    <img
      class="triangulo"
      src="@/assets/triangulo.svg"
      alt="Triângulo Retângulo"
    />
    <div class="inputs">
      <input
        type="number"
        placeholder="Digite o valor do cateto adjacente"
        v-model="catetoAdjacente"
      />
      <input
        type="number"
        placeholder="Digite o valor do cateto oposto"
        v-model="catetoOposto"
      />
      <input
        type="number"
        disabled
        placeholder="Valor da hipotenusa"
        v-model="hipotenusa"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";

const catetoAdjacente = ref();
const catetoOposto = ref();
const hipotenusa = ref();

watch(catetoAdjacente, () => {
  if (catetoAdjacente.value && catetoOposto.value) getHipotenusa();
});

watch(catetoOposto, () => {
  if (catetoAdjacente.value && catetoOposto.value) getHipotenusa();
});

function getHipotenusa() {
  hipotenusa.value = "";

  axios
    .get(
      "http://localhost:5000/pitagoras",
      {
        params: {
          a: catetoAdjacente.value,
          b: catetoOposto.value,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(({ data }) => (hipotenusa.value = data));
}

hipotenusa;
</script>

<style scoped>
.home {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.triangulo {
  height: 400px;
  align-self: center;
  justify-self: center;
}

.inputs {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

input {
  width: 300px;
  height: 50px;
  border-radius: 5px;
  border: none;
  padding: 10px;
}

input:focus {
  outline: none;
}

input:disabled {
  background: #fff;
  font-weight: bold;
}

/* Responsivo */

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .triangulo {
    height: 270px;
    margin-right: 30px;
  }
}

@media screen and (min-width: 481px) and (max-width: 767px) {
  .home {
    flex-direction: column;
  }

  .triangulo {
    height: 350px;
  }

  .inputs {
    margin: 30px 0;
  }
}

@media screen and (max-width: 480px) {
  .home {
    flex-direction: column;
  }
  .triangulo {
    height: 200px;
  }

  .inputs {
    margin: 30px 0;
  }
}
</style>
