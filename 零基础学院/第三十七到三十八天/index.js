let sourceData = [{
  product: "手机",
  region: "华东",
  sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
  product: "手机",
  region: "华北",
  sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
  product: "手机",
  region: "华南",
  sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
  product: "笔记本",
  region: "华东",
  sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
  product: "笔记本",
  region: "华北",
  sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
  product: "笔记本",
  region: "华南",
  sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
  product: "智能音箱",
  region: "华东",
  sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
  product: "智能音箱",
  region: "华北",
  sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
  product: "智能音箱",
  region: "华南",
  sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]
let sourceDataTmp = [];
console.log(sourceData)
// if (window.localStorage.length) {
//   sourceDataTmp = JSON.parse(window.localStorage.getItem("sourceData"))
//   sourceData = [];
//   for (let i = 0; i < 9; ++i) {
//     sourceData.push(sourceDataTmp[i])
//   }
// }
console.log(sourceData)
const region = document.getElementById('region');
const product = document.getElementById('product');
const data = document.getElementById('data');
const regionAll = document.getElementById('regionAll');
const productAll = document.getElementById('productAll');
const regionCheck = document.getElementsByClassName('region');
const productCheck = document.getElementsByClassName('product');
const save = document.getElementById('save');
const edit = document.getElementsByTagName('td');
let flag = true,
  tdtmp = 0;
let tmp = [],
  checkedRegion = [],
  checkedProduct = [];
let headData = "",
  bodyData = "";

function editTd(e) {
  flag = false;
  tdtmp = e.previousElementSibling.innerHTML;
  e.parentNode.innerHTML = `<input value=${e.previousElementSibling.innerHTML}></input><button onclick="editSure(this)">确认</button><button onclick="editExit(this)">取消</button>`
}

function editSure(e) {
  if (!isNaN(+e.previousElementSibling.value)) {
    flag = true
    e.parentNode.innerHTML = `${e.previousElementSibling.value}`
  } else {
    alert("请输入数字");
    editExit(e);
  }
}

function editExit(e) {
  flag = true
  e.parentNode.innerHTML = `${tdtmp}`
}
regionAll.addEventListener('click', regionAllhandle)

function regionAllhandle() {
  if (regionAll.checked === true) {
    for (let i = 0, len = regionCheck.length; i < len; ++i) {
      regionCheck[i].checked = true
    }
  }

}
productAll.addEventListener('click', productAllhandle)

function productAllhandle() {
  if (productAll.checked === true) {
    for (let i = 0, len = productCheck.length; i < len; ++i) {
      productCheck[i].checked = true
    }
  }

}

function query(region, product) {
  for (let i = 0, len = sourceData.length; i < len; ++i) {
    if (sourceData[i].region === region && sourceData[i].product === product) {
      return `
      <td>${sourceData[i].sale[0]}</td>
      <td>${sourceData[i].sale[1]}</td>
      <td>${sourceData[i].sale[2]}</td>
      <td>${sourceData[i].sale[3]}</td>
      <td>${sourceData[i].sale[4]}</td>
      <td>${sourceData[i].sale[5]}</td>
      <td>${sourceData[i].sale[6]}</td>
      <td>${sourceData[i].sale[7]}</td>
      <td>${sourceData[i].sale[8]}</td>
      <td>${sourceData[i].sale[9]}</td>
      <td>${sourceData[i].sale[10]}</td>
      <td>${sourceData[i].sale[11]}</td>
    `;
    }
  }
}

function renderTable() {
  const productLen = checkedProduct.length;
  const regionLen = checkedRegion.length;
  headData = `
  <tr>
    <th>地区</th>
    <th>商品</th>
    <th>1月</th>
    <th>2月</th>
    <th>3月</th>
    <th>4月</th>
    <th>5月</th>
    <th>6月</th>
    <th>7月</th>
    <th>8月</th>
    <th>9月</th>
    <th>10月</th>
    <th>11月</th>
    <th>12月</th>
  </tr>
  `;
  bodyData = "";
  if (regionLen === 1 && productLen > 0) {
    bodyData += `
    <tr>
      <th rowspan=${productLen}>${checkedRegion[0]}</th>
      <th>${checkedProduct[0]}</th>
      ${query(checkedRegion[0],checkedProduct[0])}
    </tr>
    `;
    for (let i = 1; i < productLen; ++i) {
      bodyData += `
    <tr>
      <th>${checkedProduct[i]}</th>
      ${query(checkedRegion[0],checkedProduct[i])}
    </tr>
    `;
    }
  } else if (regionLen > 0 && productLen > 0) {
    headData = `
  <tr>
      <th>商品</th>
      <th>地区</th>
      <th>1月</th>
      <th>2月</th>
      <th>3月</th>
      <th>4月</th>
      <th>5月</th>
      <th>6月</th>
      <th>7月</th>
      <th>8月</th>
      <th>9月</th>
      <th>10月</th>
      <th>11月</th>
      <th>12月</th>
    </tr>
  `;
    bodyData = "";
    for (let i = 0; i < productLen; ++i) {
      bodyData += `
      <tr>
        <th rowspan=${regionLen}>${checkedProduct[i]}</th>
        <th>${checkedRegion[0]}</th>
        ${query(checkedRegion[0],checkedProduct[i])}
      </tr>
    `;
      for (let j = 1; j < regionLen; ++j) {
        bodyData += `
        <tr>
          <th>${checkedRegion[j]}</th>
          ${query(checkedRegion[j],checkedProduct[i])}
        </tr>
        `;
      }
    }
  }
  data.innerHTML = headData + bodyData;
  for (let i = 0, len = edit.length; i < len; ++i) {
    edit[i].addEventListener('mouseenter', function () {
      if (flag) {
        edit[i].innerHTML = `<span>${edit[i].innerHTML}</span><button onclick="editTd(this)">编辑</button>`
      }
    })
  }

  for (let i = 0, len = edit.length; i < len; ++i) {
    edit[i].addEventListener('mouseleave', function () {
      if (flag) {
        edit[i].innerHTML = `<td>${edit[i].childNodes[0].innerHTML}</td>`
      }
    })
  }
  save.click();
}
product.addEventListener('change', function () {
  tmp = [];
  for (let i = 0, len = productCheck.length; i < len; ++i) {
    if (productCheck[i].checked === true) {
      tmp.push(productCheck[i].value)
    }
  }
  checkedProduct = tmp;
  renderTable()


})
region.addEventListener('change', function () {
  tmp = [];
  for (let i = 0, len = regionCheck.length; i < len; ++i) {
    if (regionCheck[i].checked === true) {
      tmp.push(regionCheck[i].value)
    }
  }
  checkedRegion = tmp;
  renderTable()

})



save.addEventListener('click', function () {
  let tmpdata = {};
  let tmpseries = {};
  let series = [];
  sourceDataTmp = [];
  let k = 0;
  for (let i = 0, plen = checkedProduct.length; i < plen; ++i) {
    for (let j = 0, rlen = checkedRegion.length; j < rlen; ++j) {
      tmpdata = {
        product: checkedProduct[i],
        region: checkedRegion[j],
        sale: [edit[k * 12].innerHTML, edit[k * 12 + 1].innerHTML, edit[k * 12 + 2].innerHTML, edit[k * 12 + 3].innerHTML, edit[k * 12 + 4].innerHTML, edit[k * 12 + 5].innerHTML, edit[k * 12 + 6].innerHTML, edit[k * 12 + 7].innerHTML, edit[k * 12 + 8].innerHTML, edit[k * 12 + 9].innerHTML, edit[k * 12 + 10].innerHTML, edit[k * 12 + 11].innerHTML],
      };
      tmpseries = {
        name: `${checkedProduct[i]}&${checkedRegion[j]}`,
        type: 'line',
        // stack: '销量',
        data: [+edit[k * 12].innerHTML, +edit[k * 12 + 1].innerHTML, +edit[k * 12 + 2].innerHTML, +edit[k * 12 + 3].innerHTML, +edit[k * 12 + 4].innerHTML, +edit[k * 12 + 5].innerHTML, +edit[k * 12 + 6].innerHTML, +edit[k * 12 + 7].innerHTML, +edit[k * 12 + 8].innerHTML, +edit[k * 12 + 9].innerHTML, +edit[k * 12 + 10].innerHTML, +edit[k * 12 + 11].innerHTML],
      };
      sourceDataTmp.push(tmpdata);
      ++k;
      series.push(tmpseries);
    }
  }
  for (let j = 0, tlen = sourceDataTmp.length; j < tlen; ++j) {
    for (let i = 0, len = sourceData.length; i < len; ++i) {
      if (sourceData[i].region === sourceDataTmp[j].region && sourceData[i].product === sourceDataTmp[j].product) {
        sourceData[i].sale = sourceDataTmp[j].sale;
      }
    }
  }
  // document.getElementById('main').innerHTML="";
  visual(series)
  window.localStorage.setItem("sourceData", JSON.stringify(sourceData));
})


//可视化
function visual(e) {
  console.log(e)
  let data = []
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));
  for (let i = 0; i < e.length; ++i) {
    data.push(e[i].name)
  }
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '产品销量'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
    },
    yAxis: [{
      type: 'value',
      // data: [100, 200, 300, 400]
    }],
    series: e
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option, true);
}
productAll.click();
regionAll.click();