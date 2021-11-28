function taikhoan(tiencuatoi)
{
    let myMoney = tiencuatoi;
    return{
        xem: function(){
            return `Ban co ${myMoney} $ trong tai khoan`;
        },
        nap: function(amount){
            myMoney = amount+myMoney;
            return myMoney;
        },
        rut: function(amount)
        {
            if(amount>myMoney)
            {
                return "Het tien roi. Nap vao di";
            }
            myMoney = myMoney-amount;
            return myMoney;
        }
    }
}
const Nam = taikhoan(20);
console.log(Nam.xem());
console.log(Nam.rut(10));
console.log(Nam.nap(1000000));