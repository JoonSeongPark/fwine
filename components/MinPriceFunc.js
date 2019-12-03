
const MinPriceFunc = props => {

  var i;
  var priceList = new Array();
  for (i = 0; i < props.price.length; i++) {
    priceList.push(props.price[i][3]);
  }
  var min = Math.min.apply(null, priceList).toString();
  var answer;
  if (min.length < 4) {
    answer = min;
  } else if (min.length < 7) {
    answer = min.slice(0, -3) + "," + min.slice(-3);
  } else {
    answer = min.slice(0, -6) + "," + min.slice(-6, -3) + "," + min.slice(-3);
  }

  return answer
}

export default MinPriceFunc