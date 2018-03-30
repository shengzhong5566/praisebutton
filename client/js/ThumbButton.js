import PraiseButton from './PraiseButton.js';

class ThumbButton extends PraiseButton{
    constructor(selector){
        super();
        this.initNode = $(
            `
             <div class="praise-button">
                <div class="thumb-one"></div>
                <div class="thumb-two"></div>
                <div class="thumb-three"></div>
                <div class="thumb-four"></div>
                <div class="thumb-five"></div>
                <div class="thumb-six"></div>
            </div>
            `
        );
        this.numNode = $(`<div class="num">当前次数：<span>${this.praiseNum}</span></div>`);
        $(selector).append(this.initNode).append(this.numNode);
        this.initNode.on('click',this.changeNum.bind(this));
    }
    changeNum(){
        this.addPraise();
        this.numNode.find('span').html(`${this.praiseNum}`);
    }
}

export default ThumbButton;
