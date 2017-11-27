var jexcel=require('json2excel');
let header= {
    'hotel': '酒店名称',
    'address': '酒店地址',
    'score': '酒店评分',
    'hot_line': '酒店电话',
    'district': '所在区域',
};
let temp_data=[{hotel:'aaa',address:'add',score:'10',hot_line:'12315',district:'shanghai'}];
let export_data = {
   sheets: [{
       header:header,
       items:temp_data,
       sheetName: 'sheet1',
   }],
   filepath: 'hotels_test.xlsx'
} 
