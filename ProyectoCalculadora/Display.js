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
}
