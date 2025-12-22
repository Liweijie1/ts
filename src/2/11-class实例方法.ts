//class实例方法
class Point{
    x=1;
    y=2;

    //实例方法
    sclae(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}
const p = new Point();
p.sclae(2);
console.log(p.x,p.y); //2 4

export {};