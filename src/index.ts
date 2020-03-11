export class Index {
    private x=10;
    getX = () => this.x;
    setX = (newVal: number) => { this.x = newVal; }

    constructor(){
        console.log('just trying that');
    }
}

export const x = new Index();
export const y = { ...{some: "value"}};