var calculate = {
  sort: function(inputCoords,givenCoords){
    var input = inputCoords;
    var coordsObj = givenCoords;
    coordsObj.forEach((x,i)=>{
      var coord = x.value.split(",");
      coordsObj[i]['value']=coord
      var distance = Math.sqrt(Math.pow(Number(coordsObj[i]['value'][0])-input[0],2)+Math.pow(Number(coordsObj[i]['value'][1])-input[1],2));
      distance=distance.toFixed(2);
      coordsObj[i]['distance'] = distance;
    })
    coordsObj.sort(function (a, b) {
      return a.distance - b.distance;
    });
    return coordsObj
  }
};

module.exports = calculate;
