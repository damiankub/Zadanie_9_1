function getTriangleArea(a, h) {
  if (a>0 && h>0) return a*h/2;
  else return 'Nieprawidłowe dane';
}

var triangle1Area1 = getTriangleArea(10, 6),
	triangle1Area2 = getTriangleArea(10, 15),
	triangle1Area3 = getTriangleArea(4, 5);
console.log(triangle1Area1);
console.log(triangle1Area2);
console.log(triangle1Area3);