# Calculadora Teorema de Pitágoras (Case Cromai)

Projeto desenvolvido em um processo seletivo da [Cromai](https://www.cromai.com), o qual consiste em um front-end que consume uma [API para cálculo do Teorema de Pitágoras](https://github.com/gabrielvianaz/pitagoras-back). Desenvolvido com Vue.js 3, utilizando a Composition API.

![Funcionamento Calculadora](https://i.imgur.com/axvpGcd.gif)

## 🚀 Tecnologias utilizadas

- Vue.js 3
- Bootstrap

## 🔧 Instalação

Clone o repositório e execute o comando para instalar todas as dependências do projeto

```bash
npm install
```

Para iniciar o servidor

```bash
npm run serve
```

## 🛠️ Funcionamento

Ao inserir os valores dos catetos, automaticamente é feita uma requisição à [API](https://github.com/gabrielvianaz/pitagoras-back), sendo exibido o valor da hipotenusa. Não implementei um botão para realizar o cálculo pois achei que a interatividade ficou melhor com ele sendo feito de forma automática. Sei que isso não é aplicável para qualquer cenário, visto que pode haver uma sobrecarga de requisições.
