<template>
  <header>
    <h1>Teorema de Pitágoras</h1>
  </header>
</template>

<style scoped>
header {
  padding-top: 50px;
}

h1 {
  color: #fff;
  font-family: "Ingrid Darling", cursive;
  font-size: 5rem;
  text-align: center;
  margin: 0;
}

/* Responsivo */

@media screen and (max-width: 767px) {
  header {
    padding-top: 30px;
  }

  h1 {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 4rem;
  }
}
</style>
