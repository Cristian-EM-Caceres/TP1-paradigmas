export function Tarea(titulo: string, fechaLimite: string) {
  this.titulo = titulo;
  this.completada = false;
  this.fechaLimite = fechaLimite;
}

Tarea.prototype.completar = function () {
  this.completada = true;
};

// =============================
// src/ejercicio3/ListaTareas.ts
// =============================
export function ListaTareas() {
  this.tareas = [];
}

ListaTareas.prototype.agregar = function (tarea) {
  this.tareas.push(tarea);
};

ListaTareas.prototype.pendientes = function () {
  return this.tareas.filter((t) => !t.completada);
};

ListaTareas.prototype.completadas = function () {
  return this.tareas.filter((t) => t.completada);
};
