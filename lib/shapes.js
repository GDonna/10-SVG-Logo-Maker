class shapes{
    constructor(){
        this.color ='';  
        this.text = '';
        this.textColor = '';
    }
    setColor(color){
        this.color = color;
    }
    setText(text){
        this.text = text;
    }
    setTextColor(color){
        this.textColor = color;
    }
}

class circle extends shapes{
        render() {
          return  `<circle cx="150" cy="100" r="80" fill="${this.color}" />  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text>`;

        }
    }

class triangle extends shapes{
        render(){
            return `<polygon points="150,20 225,150 75,150" fill="${this.color}" /> <text x="150" y="150" font-size="60" text-anchor="${this.textColor}" fill="#3a0467">"${this.text}"</text>`;
        } 
    }

class square extends shapes{    
    render(){ 
        return `<rect x="50" y="20" rx="20" ry="20" width="100" height="100" fill="${this.color}" />  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}"> "${this.text}"</text>`;
    }
}   

module.exports = {circle, triangle, square};

