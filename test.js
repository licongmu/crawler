//引入http模块
let http = require("http");

//引入cheerio模块
let cheerio = require("cheerio");

//引入文件系统file system，目的是为了之后把爬到的数据保存成文件
let fs = require("fs");
let axios = require("axios");
let $;
axios.get("https://scrapeme.live/shop").then((res)=>{
	$= cheerio.load(res.data);
	$(".page-numbers a").each((index, element) => { 
		const paginationURL = $(element).attr("href") 
		console.log(paginationURL);
	})
	
});







