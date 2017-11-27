var xlsxParse = require("node-xlsx");
var fs = require('fs');
// var list = xlsxParse.parse("1511607928855.xlsx");//[{"name":"sheet1","data":[["编号","用户id","手机号",],[150,100387,"18217101456"]]}]
// console.log(JSON.stringify(list));
// console.log( list[0].data.length);

function export_excel_parse(url,cb){
	let filename=(Date.now())+'';
	let filepath=path.join(__dirname,filename+'.xlsx');
	url='http://cdn-clicker.ejudata.com/app/feed/645b5350d1d711e7b8a30f9a089f1f98.xlsx';
	return new Promise((resolve,reject)=>{

		let data={code:1,url:null}
		let data_err={code:0,url:null}
		var stream = fs.createWriteStream(filepath);
		request
			.get(url)
			.on('error', function (er) {
				reject(data_err);
			})
			.pipe(stream)
			.on('finish', function () {
                console.log('data download finished.....');
                console.log('>>>>>>>filepath',filepath);
        
				let data=xlsxParse.parse(filepath);
				console.log(data);
				// data.url=filename;
				resolve(data);
				//fs.unlinkSync(filepath);
			})
	})
}
// export_excel_parse().then(s=>{

// })
//fs.existsSync('./1,xlsx') && fs.unlinkSync('./1,xlsx');
