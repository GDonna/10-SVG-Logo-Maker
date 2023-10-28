class shapes{
    constructor(){
        this.color ='';  
    }
    setColor(color){
        this.color = color;
    }
}

class circle extends shapes{
        render() {
          return  `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        }
    }

class triangle extends shapes{
        render(){
            return `<polygon points="150,20 225,150 75,150" fill="${this.color}" />`;
        } 
    }

class square extends shapes{    
    render(){ 
        return `<rect x="50" y="20" rx="20" ry="20" width="100" height="100" fill="${this.color}" />`;
    }
}   

module.exports = {circle, triangle, square};

