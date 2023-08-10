// Esta clase se utiliza para manejar la visualización de una calculadora en una interfaz gráfica
class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      dividir: "%",
      multiplicar: "x",
      restar: "-",
    };
  }
  //definir el metodo para borrar
  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }

  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }
}
