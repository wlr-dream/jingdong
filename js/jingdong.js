window.onload=function(){

  // $("img.lazy").lazyload();
	
// 头部

function head(top,box){
 top.onmouseover=function(){
    box.style.display="block";
    top.style.background="white";
  }
  top.onmouseout=function(){
    box.style.display="none";
    top.style.background="none";
  }
}
head(($(".zi")[0]),($(".box")[0]))


var jingdong=$(".jingdong")[0];
var jd1=$(".jd1")[0];
  jingdong.onmouseover=function(){
    jd1.style.display="block";
    jingdong.style.background="white";
  }
  jingdong.onmouseout=function(){
    jd1.style.display="none";
    jingdong.style.background="none";
  }

var sjjd=$(".sjjd")[0];
var sjjdimg=$(".sjjdimg")[0];
  sjjd.onmouseover=function(){
    sjjdimg.style.display="block";
    sjjd.style.background="white";
  }
  sjjd.onmouseout=function(){
    sjjdimg.style.display="none";
    sjjd.style.background="none";
  }

var gzjd=$(".gzjd")[0];
var gzjd1=$(".gzjd1")[0];
  gzjd.onmouseover=function(){
    gzjd1.style.display="block";
    gzjd.style.background="white";
  }
  gzjd.onmouseout=function(){
    gzjd1.style.display="none";
    gzjd.style.background="none";
  }
var fu=$(".fu")[0];
var fu1=$(".fu1")[0];
  fu.onmouseover=function(){
    fu1.style.display="block";
    fu.style.background="white";
  }
  fu.onmouseout=function(){
    fu1.style.display="none";
    fu.style.background="none";
  }

var wzdh=$(".wzdh")[0];
var wzdhbox=$(".wzdhbox")[0];
  wzdh.onmouseover=function(){
    wzdhbox.style.display="block";
    wzdh.style.background="white";
  }
  wzdh.onmouseout=function(){
    wzdhbox.style.display="none";
    wzdh.style.background="none";
  }

var sousuoRight=$(".sousuoRight")[0];
var sc=$(".sc")[0];
  sousuoRight.onmouseover=function(){
    sc.style.display="block";
    sousuoRight.style.background="white";
  }
  sousuoRight.onmouseout=function(){
    sc.style.display="none";
    sousuoRight.style.background="none";
  }
// banner选项卡
 var lj=$(".lj");
 var ljbox=$(".ljbox");
  for(var i=0;i<lj.length;i++){
    lj[i].index=i;
    lj[i].onmouseover=function(){
     ljbox[this.index].style.display="block";
     this.style.background="#f7f7f7";
    }
  }
  for(var i=0;i<lj.length;i++){
    lj[i].index=i;
    lj[i].onmouseout=function(){
     ljbox[this.index].style.display="none";
     this.style.background="#c81623";
    }
  }



 // banner轮播
	var imgBox=$(".imgBox");
	var btn=$(".button");
	var left=$(".btnLeft")[0];
	var right=$(".btnRight")[0];
	var banner=$(".bannerMiddle")[0];
    var now=0;
    var next=0;
    imgBox[0].style.opacity=1;
	  btn[0].style.background="#c81623";
	  var t=setInterval(move,2000);
	function move(){
  	next++
  	if(next==imgBox.length){
  		next=0;
  	}
  	animate(imgBox[now],{opacity:0})
  	animate(imgBox[next],{opacity:1},function(){flag=true})
  	btn[now].style.background="#3e3e3e";
  	btn[next].style.background="#c81623";
  	now=next;
  }
  function movel(){
  	next--
  	if(next<0){
  		next=imgBox.length-1;
  	}
  	animate(imgBox[now],{opacity:0})
  	animate(imgBox[next],{opacity:1},function(){flag=true})
  	btn[now].style.background="#3e3e3e";
  	btn[next].style.background="#c81623";
  	now=next;
  }
  banner.onmouseover=function(){
  	clearInterval(t);
  	left.style.display="block";
  	right.style.display="block";
  }
  banner.onmouseout=function(){
  	t=setInterval(move,2000);
  	left.style.display="none";
  	right.style.display="none";
  }
  for(var i=0;i<btn.length;i++){
  	btn[i].index=i;
  	btn[i].onclick=function(){
  		animate(imgBox[now],{opacity:0});
  		animate(imgBox[this.index],{opacity:1})
  		btn[now].style.background="#3e3e3e";
  	    this.style.background="#c81623";
  	    now=this.index;
  	    next=this.index;
  	}
  }
  right.onclick=function(){
  	 if(flag){
  	 	move();
  	 }
  	 flag=false;    
  }
  left.onclick=function(){
     if(flag){
  	 	movel();
  	 }
  	 flag=false;  
  }

// 节点轮播
var tu=$(".tuRight")[0];
var tleft=$(".btLeft")[0];
var tright=$(".btRight")[0];
var tt=$(".tuku")[0];
var img=$(".limg")[0];
var flag1=true;
var width=parseInt(getStyle(img,"width"));
var r=setInterval(rmove,2000);
function rmove(){
    animate(tt,{left:-width},function(){
    var first=firstChild(tt);
    tt.appendChild(first);
    tt.style.left=0;
    flag1=true;
  }) 
}
  tu.onmouseover=function(){
    clearInterval(r);
  }
  tu.onmouseout=function(){
    r=setInterval(rmove,2000);
  }
  tleft.onclick=function(){
    var last=lastChild(tt);
    var first=firstChild(tt);
    tt.insertBefore(last,first);
    tt.style.left=-width+"px";
    animate(tt,{left:0});
  }
  tright.onclick=function(){
    rmove();
  }


//猜你喜欢


    var xihuan=$(".xihuan")[0];
    var xihuanhx=$(".hx",xihuan)[0];
    hover(xihuan,xihuanover,xihuanout)
    function xihuanover(){
      xihuanhx.style.display="block"
      animate(xihuanhx,{left:845})
    }
    function xihuanout(){
       animate(xihuanhx,{left:0},300)
       xihuanhx.style.display="none"
    }




var hyp=$("#hyp");
var like=$(".like");
var xnow=0;
like[0].style.display="block";
hyp.onclick=function(){
  xnow++;
  if(xnow==like.length){
    xnow=0;
  }
  for(var i=0;i<like.length;i++){
    like[i].style.display="none";
  }
  like[xnow].style.display="block";
}


   

// 楼层轮播
var lc=$(".lc");
dlc(lc[0]);
dlc(lc[2]);
dlc(lc[3]);
dlc(lc[4]);
dlc(lc[9]);
dlc(lc[10]);
dlc(lc[11]);
dlc(lc[12]);
var dimgs=$(".d2",lc[1])
dong(lc[1]);
dong(lc[5]);
dong(lc[6]);
dong(lc[7]);
dong(lc[8]);
function dong(obj1){
  var dimgs=$(".d2",obj1)
  var dbtn=$(".button1",obj1);
  var dleft=$(".dbtnLeft",obj1)[0];
  var dright=$(".dbtnRight",obj1)[0]; 
  var dnow=0;
  var dnext=0;
  var flag2=true;
  var dwd=parseInt(getStyle(dimgs[0],"width"));
  var d=setInterval(dmove,2000);

 for(var i=0;i<dimgs.length;i++){
   if(i==0){
    continue;
   }
   dimgs[i].style.left=dwd+"px";
 }
 function dmove(){
  dnext=dnow+1;
  if(dnext>=dimgs.length){
    dnext=0;
  }
  dimgs[dnext].style.left=dwd+"px";
  animate(dimgs[dnow],{left:-dwd});
  animate(dimgs[dnext],{left:0},function(){flag2=true});   
  dbtn[dnow].style.background="#3e3e3e";
  dbtn[dnext].style.background="#b61b1f";
  dnow=dnext;
}
function dmovel(){
  dnext=dnow-1;
  if(dnext<0){
    dnext=dimgs.length-1;
  }
  dimgs[dnext].style.left=-dwd+"px";
  animate(dimgs[dnow],{left:dwd});
  animate(dimgs[dnext],{left:0},function(){flag2=true});   
  dbtn[dnow].style.background="#3e3e3e";
  dbtn[dnext].style.background="#b61b1f";
  dnow=dnext;
}
 obj1.onmouseover=function(){
    clearInterval(d);
    dleft.style.display="block";
    dright.style.display="block";
 }
 obj1.onmouseout=function(){
    d=setInterval(dmove,2000);
    dleft.style.display="none";
    dright.style.display="none";
 }
 dright.onclick=function(){
    if(flag2){
      dmove();  
    }
    flag2=false;
 }
 dleft.onclick=function(){
    if(flag2){
      dmovel();  
    }
    flag2=false;
 }
 for(var i=0;i<dbtn.length;i++){
    dbtn[i].index=i;
    dbtn[i].onclick=function(){
      if(dnow==this.index){
        return;
      }else if(dnow>this.index){
        dimgs[this.index].style.left=dwd+"px";
        animate(dimgs[dnow],{left:-dwd});
        animate(dimgs[this.index],{left:0});    
        dbtn[dnow].style.background="#3e3e3e";
        dbtn[this.index].style.background="#b61b1f";
      }else if(dnow<this.index){
        dimgs[this.index].style.left=-dwd+"px";
        animate(dimgs[dnow],{left:dwd});
        animate([this.index],{left:0});    
        dbtn[dnow].style.background="#666";
        dbtn[this.index].style.background="#b61b1f";
      }
      dnow=this.index;
      dnext=this.index;
    }
  }
}
function dlc(obj2){
 var lcc=$(".d2",obj2)[0];
 var dimgs=$("a",lcc);
 var dbtn=$(".button1",obj2);
 var dleft=$(".dbtnLeft",obj2)[0];
 var dright=$(".dbtnRight",obj2)[0]; 
 var dnow=0;
 var dnext=0;
 var flag2=true;
 var dwd=parseInt(getStyle(dimgs[0],"width"));
 dbtn[0].style.background="#b61b1f";
 var d=setInterval(dmove,2000);

 for(var i=0;i<dimgs.length;i++){
   if(i==0){
    continue;
   }
   dimgs[i].style.left=dwd+"px";
 }
 function dmove(){
  dnext=dnow+1;
  if(dnext>=dimgs.length){
    dnext=0;
  }
  dimgs[dnext].style.left=dwd+"px";
  animate(dimgs[dnow],{left:-dwd});
  animate(dimgs[dnext],{left:0},function(){flag2=true});   
  dbtn[dnow].style.background="#3e3e3e";
  dbtn[dnext].style.background="#b61b1f";
  dnow=dnext;
}
function dmovel(){
  dnext=dnow-1;
  if(dnext<0){
    dnext=dimgs.length-1;
  }
  dimgs[dnext].style.left=-dwd+"px";
  animate(dimgs[dnow],{left:dwd});
  animate(dimgs[dnext],{left:0},function(){flag2=true});   
  dbtn[dnow].style.background="#3e3e3e";
  dbtn[dnext].style.background="#b61b1f";
  dnow=dnext;
}
 obj2.onmouseover=function(){
    clearInterval(d);
    dleft.style.display="block";
    dright.style.display="block";
 }
 obj2.onmouseout=function(){
    d=setInterval(dmove,2000);
    dleft.style.display="none";
    dright.style.display="none";
 }
 dright.onclick=function(){
    if(flag2){
      dmove();  
    }
    flag2=false;
 }
 dleft.onclick=function(){
    if(flag2){
      dmovel();  
    }
    flag2=false;
 }
 for(var i=0;i<dbtn.length;i++){
    dbtn[i].index=i;
    dbtn[i].onclick=function(){
      if(dnow==this.index){
        return;
      }else if(dnow>this.index){
        dimgs[this.index].style.left=dwd+"px";
        animate(dimgs[dnow],{left:-dwd});
        animate(dimgs[this.index],{left:0});    
        dbtn[dnow].style.background="#3e3e3e";
        dbtn[this.index].style.background="#b61b1f";
      }else if(dnow<this.index){
        dimgs[this.index].style.left=-dwd+"px";
        animate(dimgs[dnow],{left:dwd});
        animate([this.index],{left:0});    
        dbtn[dnow].style.background="#666";
        dbtn[this.index].style.background="#b61b1f";
      }
      dnow=this.index;
      dnext=this.index;
    }
  }
}

// 楼层选项卡

// function loucen(lou,xx,ccimgs){
//   var lou=lou;
//   var xx=xx;
//   var ccimgs=ccimgs;
//    ccimgs[0].style.display="block";
//    for(var i=0;i<xx.length;i++){
//       xx[i].index=i;
//       xx[i].onmouseover=function(){
//         for(var i=0;i<xx.length;i++){
//             ccimgs[i].style.display="none";
//         }
//         ccimgs[this.index].style.display="block";
//       }
//    }
// }
//  var lou=$(".zn")[0];
//  var xx=$("a",lou);
//  var ccimgs=$(".bn");
//  loucen(lou,xx,ccimgs)




var lou=$(".zn")[0];
var xx=$("a",lou);
var ccimgs=$(".bn");
ccimgs[0].style.display="block";
  for(var i=0;i<xx.length;i++){
      xx[i].index=i;
      xx[i].onmouseover=function(){
        for(var i=0;i<xx.length;i++){
            ccimgs[i].style.display="none";
            xx[i].className="dppp1";
        }
        ccimgs[this.index].style.display="block";
        this.className="dppp";
      }
  }

var lou1=$(".aaa")[0];
var xxk=$(".rl",lou1);
var ccimgs1=$(".aac");
 ccimgs1[0].style.display="block";
 for(var i=0;i<xxk.length;i++){
      xxk[i].index=i;
      xxk[i].onmouseover=function(){
        for(var i=0;i<xxk.length;i++){
            ccimgs1[i].style.display="none";        
        }
        ccimgs1[this.index].style.display="block";
      }
 }

var lou2=$(".sjtx")[0];
var xx2=$("a",lou2);
var ccimgs2=$(".sjtx1");
ccimgs2[0].style.display="block";
  for(var i=0;i<xx2.length;i++){
      xx2[i].index=i;
      xx2[i].onmouseover=function(){
        for(var i=0;i<xx2.length;i++){
            ccimgs2[i].style.display="none";
            xx2[i].className="dppp1";
        }
        ccimgs2[this.index].style.display="block";
        this.className="dppp";
      }
  }

var lou3=$(".jydq2")[0];
console.log(lou3)
var xx3=$("a",lou3);
var ccimgs3=$(".jydq1");
// console.log(xx3.length)
ccimgs3[0].style.display="block";
  for(var i=0;i<xx3.length;i++){
      xx3[i].index=i;
      xx3[i].onmouseover=function(){
        for(var i=0;i<xx3.length;i++){
            ccimgs3[i].style.display="none";
            xx3[i].className="dppp1";
        }
        ccimgs3[this.index].style.display="block";
        this.className="dppp";
      }
  }


var lou4=$(".dnsm")[0];
console.log(lou4)
var xx4=$("a",lou4);
// console.log(xx4.length)
var ccimgs4=$(".dnsm1");
ccimgs4[0].style.display="block";
  for(var i=0;i<xx4.length;i++){
      xx4[i].index=i;
      xx4[i].onmouseover=function(){
        for(var i=0;i<xx4.length;i++){
            ccimgs4[i].style.display="none";
            xx4[i].className="dppp1";
        }
        ccimgs4[this.index].style.display="block";
        this.className="dppp";
      }
  }


var lou5=$(".ydjs")[0];
var xx5=$("a",lou5);
var ccimgs5=$(".ydjs1");
ccimgs5[0].style.display="block";
  for(var i=0;i<xx5.length;i++){
      xx5[i].index=i;
      xx5[i].onmouseover=function(){
        for(var i=0;i<xx5.length;i++){
            ccimgs5[i].style.display="none";
            xx5[i].className="dppp1";
        }
        ccimgs5[this.index].style.display="block";
        this.className="dppp"
      }
  }


var lou6=$(".jjsh")[0];
var xx6=$("a",lou6);
var ccimgs6=$(".jjsh1");
ccimgs6[0].style.display="block";
  for(var i=0;i<xx6.length;i++){
      xx6[i].index=i;
      xx6[i].onmouseover=function(){
        for(var i=0;i<xx6.length;i++){
            ccimgs6[i].style.display="none";
            xx6[i].className="dppp1";
        }
        ccimgs6[this.index].style.display="block";
        this.className="dppp";
      }
  }

var lou7=$(".mywj")[0];
var xx7=$("a",lou7);
var ccimgs7=$(".mywj1");
ccimgs7[0].style.display="block";
  for(var i=0;i<xx7.length;i++){
      xx7[i].index=i;
      xx7[i].onmouseover=function(){
        for(var i=0;i<xx7.length;i++){
            ccimgs7[i].style.display="none";
            xx7[i].className="dppp1";
        }
        ccimgs7[this.index].style.display="block";
        this.className="dppp";
      }
  }

var lou8=$(".spbj")[0];
var xx8=$("a",lou8);
var ccimgs8=$(".spbj1");
ccimgs8[0].style.display="block";
  for(var i=0;i<xx8.length;i++){
      xx8[i].index=i;
      xx8[i].onmouseover=function(){
        for(var i=0;i<xx8.length;i++){
            ccimgs8[i].style.display="none";
            xx8[i].className="dppp1";
        }
        ccimgs8[this.index].style.display="block";
        this.className="dppp";
      }
  }


var lou9=$(".tsyx")[0];
var xx9=$("a",lou9);
var ccimgs9=$(".tsyx1");
ccimgs9[0].style.display="block";
  for(var i=0;i<xx9.length;i++){
      xx9[i].index=i;
      xx9[i].onmouseover=function(){
        for(var i=0;i<xx9.length;i++){
            ccimgs9[i].style.display="none";
            xx9[i].className="dppp1";
        }
        ccimgs9[this.index].style.display="block";
        this.className="dppp";
      }
  }

var lou10=$(".zcyp")[0];
var xx10=$("a",lou10);
var ccimgs10=$(".zcyp1");
ccimgs10[0].style.display="block";
  for(var i=0;i<xx10.length;i++){
      xx10[i].index=i;
      xx10[i].onmouseover=function(){
        for(var i=0;i<xx10.length;i++){
            ccimgs10[i].style.display="none";
            xx10[i].className="dppp1";
        }
        ccimgs10[this.index].style.display="block";
        this.className="dppp";
      }
  }

// 楼层跳转
  var floor=$(".floor");
  var nav=$(".nav")[0];
  var floors=$(".floors")
  var floor1=$(".floor1");
  var lnow=0;
  var floor2=$(".floor3")
  var cH=document.documentElement.clientHeight;
  for(var i=0;i<floor.length;i++){
   floor[i].a=floor[i].offsetTop;
  }
  window.onscroll=function(){
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=obj.scrollTop;
    if(top>=floor[0].a-3000){
      nav.style.display="block";
      var fHeight=nav.offsetHeight;
      nav.style.top=(cH-fHeight)/2+"px";
    }
    if(top<floor[0].a-200){
       nav.style.display="none";
    }
    if(top>=floor[11].a-10){
      nav.style.display="none";
    }
    for(var i=0;i<floor.length;i++){
      if(top>=floor[i].a-200){
        for(var j=0;j<floor.length;j++){
          floor1[j].style.display="block";
          floor2[j].style.display="none";
          floor2[j].className="floor3 floor2"
        }
        floor1[i].style.display="none";
         floor2[i].style.display="block";
         floor2[i].className="floor3 floor4";
         lnow=i;
      }
    }
  }
  for(var i=0;i<floor.length;i++){
    floors[i].index=i;
    if(i<=floors.length){   
        if(this.index==lnow){
          floors[i].onmouseover=function(){
            floor3[i].className="floor3 floor2"
          }
        }
      floors[i].onmouseover=function(){
        floor2[this.index].style.display="block";
        floor1[this.index].style.display="none";
        // floor2[this.index].className="floor3 floor4"
      }
      floors[i].onmouseout=function(){
        if(this.index==lnow){
          return;
        }
        floor2[this.index].style.display="none";
        floor1[this.index].style.display="block"; 
      }
      floors[i].onclick=function(){
        animate(document.body,{scrollTop:floor[this.index].a-300},300);
        animate(document.documentElement,{scrollTop:floor[this.index].a-300},300);
      }
    }
  }

// 天天低价轮播
  var readall=$(".rrr")[0]
  var reads=$(".rr1");
  reads[0].style.top=0;
  reads[1].style.top=141+"px";
  for(var i=0;i<reads.length;i++){
    if(i>1) {
      reads[i].style.top=-141+"px";
    }
  }
  var nowday=0;
  var front;
  var nextday=0;
  var ct=setInterval(xiabo,2000)
  readall.onmouseover=function(){
    clearInterval(ct)
  }
  readall.onmouseout=function(){
    ct=setInterval(xiabo,2000)
  }
  function xiabo(){
    front=nowday-1
    nextday=nowday+1
    if(front<0){
      front=reads.length-1
    }
    if(nextday==reads.length){
      nextday=0;
    }
    reads[front].style.top=-141+"px";
    animate(reads[nowday],{top:141})
    animate(reads[front],{top:0})
    animate(reads[nextday],{top:282})
    nowday=front;
    nextday=nowday;
  }
      // 右下边
    var r=$(".r"); 
    var rz=$(".rz");
    for(var i=0;i<r.length;i++){
      r[i].index=i;
      r[i].onmouseover=function(){
         rz[this.index].style.background="#c81623"
         animate(rz[this.index],{right:35})
      }
      r[i].onmouseout=function(){
         rz[this.index].style.background="#7a6e6e"
         animate(rz[this.index],{right:-35})
      }
    }
}