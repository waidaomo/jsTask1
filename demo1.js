// 随机取数
var num=new Array;
var square = document.getElementsByClassName('square');
function number() 
{
    for (var i = 0;i<3; i++) 
    {
	    num[i] = Math.floor(Math.random() * 9);
	    for(l=0;l<i;l++){
		   if(num[i]==num[l]){
		    i=i-1;
		    break;
		   }
		  }
    }

    // if (num[0] == num[1] || num[0] == num[2] || num[1] == num[2]) 
    // {
    //     number();
    // }
}

function btn_begin()
{   
	// 重置颜色
	for (var i = 0; i < square.length; i++) {
        square[i].style.background = "#fea500";
    }
	// 随机取色
	var color=new Array;
	for(var j=0;j<3;j++)
	{
	  color[j]='#'+Math.floor(Math.random()*16777215).toString(16);
	}
	// 执行取数函数
	number();
	// 给格子着色
	square[num[0]].style.background = color[0];
	square[num[1]].style.background = color[1];
	square[num[2]].style.background = color[2];
	ready();
}

var clear;
function ready()
{
	clearInterval(clear);
	clear=setInterval(btn_begin,1000);
}

function btn_end()
{
	clearInterval(clear);
	for (var i = 0; i < square.length; i++) {
        square[i].style.background = "#fea500";
    }
}

// 用js原生的方式为“开始闪”的button添加click事件
var btn=document.getElementById("btn_begin");
btn.addEventListener('click', btn_begin,false);
// document.getElementById("#btn_end").addEventListener('click', btn_end(),false);