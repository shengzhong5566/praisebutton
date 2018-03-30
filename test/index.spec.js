import PraiseButton from '../client/js/PraiseButton';
describe("测试点击",function () {
   it("按钮+1",function () {
       let praiseButton = new PraiseButton(0);
       praiseButton.addPraise();
       expect(praiseButton.praiseNum).toEqual(1);
   });
    it("按钮++1",function () {
        let praiseButton = new PraiseButton();
        praiseButton.addPraise();
        praiseButton.addPraise();
        expect(praiseButton.praiseNum).toEqual(2);
    });
});
