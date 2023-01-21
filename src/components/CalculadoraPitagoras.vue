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
import { api } from "@/api";

const catetoAdjacente = ref();
const catetoOposto = ref();
const hipotenusa = ref();

function getHipotenusa() {
  // Reseta o valor da variável hipotenusa e faz o request com os dados do cateto adjacente e oposto, atribuindo o retorno à variável hipotenusa
  hipotenusa.value = "";

  api
    .get("pitagoras", {
      params: {
        adjacente: catetoAdjacente.value,
        oposto: catetoOposto.value,
      },
    })
    .then(({ data }) => (hipotenusa.value = data));
}

watch([catetoAdjacente, catetoOposto], () => {
  // Validação para proibir números negativos
  if (catetoAdjacente.value < 0) catetoAdjacente.value *= -1;
  else if (catetoOposto.value < 0) catetoOposto.value *= -1;
  // Reseta o valor da variável hipotenusa caso o valor de algum dos lados seja false
  else if (!catetoAdjacente.value || !catetoOposto.value) hipotenusa.value = "";
  // Caso o valor dos dois lados seja true, chama a função getHipotenusa
  else if (catetoAdjacente.value && catetoOposto.value) getHipotenusa();
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
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.25);
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
