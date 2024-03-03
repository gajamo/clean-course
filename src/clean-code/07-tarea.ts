(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents{        
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

   class ImputElement {

        public html : HtmlElement;
        public attributes: InputAttributes;
        public event : InputEvents;
        
        constructor(value: string, placeholder: string, id: string) {
            this.html = new HtmlElement(id,'input');
            this.attributes = new InputAttributes(value,placeholder);
            this.event = new InputEvents();
        }
   }

    //? Idea para la nueva clase InputElement

    const nameField = new ImputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()