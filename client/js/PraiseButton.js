/**
 * PraiseButton
 */
class PraiseButton{
    constructor( num = 0 ){
        this.praiseNum = num;
    }
    addPraise (){
        this.praiseNum += 1;
    }
}

export default PraiseButton;
