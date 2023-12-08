class ScrollItem {
    element;
    shown;
    scrollShow;
    scrollMax;

    constructor(element, scrollShow, scrollMax){
        this.element = element;
        this.scrollShow = scrollShow;
        this.scrollMax = scrollMax;
        this.shown = false;

        document.getElementById("main").appendChild(this.element);
    }

    show(scroll){
        if(!shown && scroll>this.scrollShow){
            this.element.hidden = false;
            shown = true;
        } else if (shown && scroll<this.scrollShow){
            this.element.hidden = true;
            shown = false;
        }
    }

    setPos(scroll){
        if(shown) {
            let pos = innerHeight - scroll+this.scrollShow;
            pos = Math.max(pos, this.scrollMax);
            this.element.style.top = pos +"px";
        }
    }
}