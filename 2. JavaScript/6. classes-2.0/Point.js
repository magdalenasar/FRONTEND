class Point {
  #x;
  #y;
  constructor(arr) {
    this.#x = arr[0];
    this.#y = arr[1];
  }
    
    //validaties toepassen
  get x() {
    return this.#x;
  }
    get x(nr) {
        this.#x = nr;
    return this.#x;
    }
    static distance(pn1, pn2) {
        //Pitagor theorem
        return Math.sqrt((pn1.#x - pnt2.#x) ** 2 + (pn1.#y - pnt2.#y) ** 2 );

    }
}

const point1 = new Point([2, 2]);
const point1 = new Point([4, 4]);

point1.x;
//point2.x = 15;
console.log(Point.distance(point1, point2));  // 2.828282.... 