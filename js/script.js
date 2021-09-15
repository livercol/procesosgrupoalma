/* Creamos el componente contador con los parametros de valor, incrementar, restar y reset */
const Contador = ({ valor, incrementar, restar, reset }) => /*#__PURE__*/
React.createElement("div", { id: "contador-app" }, /*#__PURE__*/
React.createElement("div", { id: "display-container", className: "container" }, /*#__PURE__*/
React.createElement("p", { id: "display" }, valor)), /*#__PURE__*/

React.createElement("div", { id: "buttons-container", className: "container" }, /*#__PURE__*/
React.createElement("button", { id: "increment-button", className: "button", onClick: incrementar }, /*#__PURE__*/React.createElement("i", { className: "fa fa-plus" })), /*#__PURE__*/
React.createElement("button", { id: "decrement-button", className: "button", onClick: restar }, /*#__PURE__*/React.createElement("i", { className: "fa fa-minus" })), /*#__PURE__*/
React.createElement("button", { id: "reset-button", className: "button", onClick: reset }, /*#__PURE__*/React.createElement("i", { className: "fas fa-sync" }))));




/* Funcionalidad para ReactDOM.render, donde llamamos al componente creado anteriormente dándole las funcionalidaddes y preparándolo para ser renderizado */
const render = () => {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(Contador, {
    valor: almacen.getState(),
    incrementar: () => {
      const val = almacen.getState();
      if (val < 99) {// Sólo se agregó para limitarlo a 99
        almacen.dispatch({
          type: 'INCREMENTA' });

      }
    },
    restar: () => {
      const val = almacen.getState();
      if (val > -99) {// Sólo se agregó para limitarlo a -99
        almacen.dispatch({
          type: 'DECREMENTA' });

      };
    },
    reset: () => {
      almacen.dispatch({
        type: 'RESET' });

    } }),

  document.getElementById('contenido-redux'));

};

/* REDUX */

/* el contador, este recibe la acción y devuelve el estado, un ejemplo muy simple de redux  */
const contador = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENTA':
      return state + 1;
    case 'DECREMENTA':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;}

};

/* Importamos { createStore } de 'redux' */
const { createStore } = Redux;
/* Generamos el alamacenamiento donde se guardaran los valores */
const almacen = createStore(contador);

/* Suscribimos al render, para que cuando cambie el estado en el contador, lo actualice */
almacen.subscribe(render);

/* Render inicial */
render();