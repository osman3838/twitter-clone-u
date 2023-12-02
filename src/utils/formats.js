export const numberFormat =(number) => { 
    let config = {};
    if(number > 9999) 
    {
        config = {
            notation:"compact",
            maximumFractionDigits:1
        }
    }
    return Intl.NumberFormat("tr",config).format(number);

}  