<template>
  <div class="inputs">
    <input
      type="number"
      placeholder="Digite o valor do cateto adjacente"
      min="0"
      v-model="catetoAdjacente"
    />
    <input
      type="number"
      placeholder="Digite o valor do cateto oposto"
      min="0"
      v-model="catetoOposto"
    />
    <input
      type="number"
      disabled
      placeholder="Valor da hipotenusa"
      v-model="hipotenusa"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";

const catetoAdjacente = ref();
const catetoOposto = ref();
const hipotenusa = ref();

function getHipotenusa() {
  // Reseta o valor da variável hipotenusa e faz o request com os dados do cateto adjacente e oposto, atribuindo o resultado à variável hipotenusa

  hipotenusa.value = "";

  axios
    .get("http://localhost:5000/pitagoras", {
      params: {
        adjacente: catetoAdjacente.value,
        oposto: catetoOposto.value,
      },
    })
    .then(({ data }) => (hipotenusa.value = data));
}

watch(catetoAdjacente, () => {
  // Validação para proibir números negativos
  if (catetoAdjacente.value < 0)
    catetoAdjacente.value = catetoAdjacente.value * -1;

  // Ao haver uma mudança na variável catetoAdjacente e caso seu valor e o valor de catetoOposto forem true, chama a função getHipotenusa
  if (catetoAdjacente.value && catetoOposto.value) getHipotenusa();
});

watch(catetoOposto, () => {
  // Validação para proibir números negativos
  if (catetoOposto.value < 0) catetoOposto.value = catetoOposto.value * -1;

  // Ao haver uma mudança na variável catetoOposto e caso seu valor e o valor de catetoAdjacente forem true, chama a função getHipotenusa
  if (catetoAdjacente.value && catetoOposto.value) getHipotenusa();
});
</script>

<style scoped>
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
  color: #7271d3;
}

input:focus {
  outline: none;
}

input:disabled {
  background: #fff;
  font-weight: bold;
}

/* Responsivo */

@media screen and (max-width: 767px) {
  .inputs {
    margin: 30px 0;
  }
}
</style>
