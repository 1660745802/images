<<<<<<< HEAD

console.log("联系我");
console.log("QQ 1660745802\n" +
    "tele 13617609969");

=======
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
//时钟
//分秒
function time() {
    var TIME;
    tmpDate = new Date();
    h = tmpDate.getHours();if(h<10)h="0"+h;
    m = tmpDate.getMinutes();if(m<10)m="0"+m;
    s = tmpDate.getSeconds();if(s<10)s="0"+s;
    TIME = h + ":" + m + ":" + s;
    return TIME;
}
//日期
function cdate() {
    var DATE;

    tmpDate = new Date();

    day = tmpDate.getDate();
    month= tmpDate.getMonth() + 1 ;
    year= tmpDate.getYear();
    year = year + 1900;

    myArray=new Array(6);
    myArray[0]="星期日 "
    myArray[1]="星期一 "
    myArray[2]="星期二 "
    myArray[3]="星期三 "
    myArray[4]="星期四 "
    myArray[5]="星期五 "
    myArray[6]="星期六 "

    weekday=tmpDate.getDay();

    DATE = year + "年" + month + "月" + day + "日 " + myArray[weekday];
    return DATE;
}
function writeTime(){//把时间显示在id为time的div中
    document.getElementById('time').innerHTML = time();
    document.getElementById('date').innerHTML = cdate();
}
function perSecond(){//显示时间
    //每次打开网页显示时间
    writeTime();
    //每1000毫秒更新时间,如果不需要则注释下面一行；如果希望更改时间的刷新速度，请更改下面的数字，单位是毫秒
    setInterval(writeTime,1000);
}
perSecond();



//为背景添加模糊
var bgDiv = document.querySelector('#bgDiv');
function blurBgDiv() {
    bgDiv.classList.add('obscured');
}
function restoreBgDiv() {
    bgDiv.classList.remove('obscured');
}



//jsonp 搜索框
var search = document.getElementById('search');
//   document.querySelector('#search');
search.oninput = function(e) {
    var wd = this.value;
    var script = document.createElement('script');
    script.src = `https://www.baidu.com/sugrec?prod=pc&wd=${wd}&callback=updateSearchSug`;
    // script.setAttribute('src', `https://www.baidu.com/sugrec?prod=pc&wd=${wd}&callback=console.log`)
    //console.log(data)
    document.body.appendChild(script);
    document.body.removeChild(script);
}
//将百度返回的数据同步到页面上
function updateSearchSug(data) {
    var searchSug = document.getElementById('searchSug');
    var ul = searchSug.firstElementChild;
    if(!data.g) {
        ul.innerHTML = '';
        return ;
    }
    var html = ``;
    for(let i = 0; i < 5 && i < data.g.length; i++) {
        html += `<li>${data.g[i].q}</li>`;
    }
    ul.innerHTML = html;
}
//当input框获得焦点时,样式改变
search.onfocus = function(e) {
    this.classList.add('search-focus');
    blurBgDiv();
}
//当失去焦点时
search.onblur = function(e) {
    this.classList.remove('search-focus');
    restoreBgDiv();
}
// 按下回车键时
search.onkeydown = function(e) {
    // console.log(e);
    if(e.key === 'Enter'){
        let keyword = this.value;
        window.open(`https://www.baidu.com/s?wd=${keyword}`, "_blank");
    }
}
// 点击联想跳转
searchSug.onclick = function(e) {
    // console.log(e);
    // 该事件为鼠标点击事件
    // nodeName为被点击的节点的标签名（均大写）
    if(!e.target.nodeName === 'LI') { return ; }
    let keyword = e.target.textContent;   //获取对应联想字段
    window.open(`https://www.baidu.com/s?wd=${keyword}`, '_blank');
}
// 当searchSug失去焦点时
window.onclick = function(e) {
    var target = e.target;
    if(!searchWrapper.contains(target)) {
        search.classList.remove('search-focus');
        searchSug.firstElementChild.innerHTML = '';
        restoreBgDiv();
    }
}


//点击图片切换背景
var bgDiv=document.getElementById('bgDiv');
<<<<<<< HEAD
var gantan=document.getElementById('gantan');
=======
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
var imagesInfo=null;
var xhr = new XMLHttpRequest();
xhr.open('GET',`${window.location.origin}/HPImageArchive.aspx?format=js&n=8`);
//监听图片切换
xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&xhr.status===200){
        imagesInfo=JSON.parse(xhr.response);
    }
<<<<<<< HEAD
    bgDiv.style.backgroundImage=`url('http://cn.bing.com/${imagesInfo.images[0].url}')`;
    gantan.title=imagesInfo.images[0].copyright;
=======
    bgDiv.style.backgroundImage=`url('http://cn.bing.com/${imagesInfo.images[7].url}')`;
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
}
xhr.send();

var bottomCell=document.getElementById('bottomCell');
var prev=document.getElementById('prev');
var next=document.getElementById('next');
prev.style.color="gray";
// var imagesInfo={"images":[{"startdate":"20191109","fullstartdate":"201911091600","enddate":"20191110","url":"/th?id=OHR.BlueberryFrost_ZH-CN0971529753_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","urlbase":"/th?id=OHR.BlueberryFrost_ZH-CN0971529753","copyright":"蓝莓植物上的霜，加拿大新不伦瑞克 (© Freeman Patterson/Masterfile)","copyrightlink":"https://www.bing.com/search?q=%E8%93%9D%E8%8E%93%E6%A4%8D%E7%89%A9&form=hpcapt&mkt=zh-cn","title":"","quiz":"/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191109_BlueberryFrost%22&FORM=HPQUIZ","wp":true,"hsh":"50797d08768040242d599914e5dd9b10","drk":1,"top":1,"bot":1,"hs":[]},{"startdate":"20191108","fullstartdate":"201911081600","enddate":"20191109","url":"/th?id=OHR.KagamiMirror_ZH-CN0889648187_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","urlbase":"/th?id=OHR.KagamiMirror_ZH-CN0889648187","copyright":"秋日景色倒映于镜池中，日本长野 (© magicflute002/Getty images)","copyrightlink":"https://www.bing.com/search?q=%E9%95%9C%E6%B1%A0&form=hpcapt&mkt=zh-cn","title":"","quiz":"/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191108_KagamiMirror%22&FORM=HPQUIZ","wp":true,"hsh":"c1bb71745d7167dca5121f284f06fe92","drk":1,"top":1,"bot":1,"hs":[]},{"startdate":"20191107","fullstartdate":"201911071600","enddate":"20191108","url":"/th?id=OHR.Lidong2019_ZH-CN0761273672_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","urlbase":"/th?id=OHR.Lidong2019_ZH-CN0761273672","copyright":"【今日立冬】 (© zhouyousifang/Getty Images)","copyrightlink":"https://www.bing.com/search?q=%E4%BB%8A%E6%97%A5%E7%AB%8B%E5%86%AC&form=hpcapt&mkt=zh-cn","title":"","quiz":"/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191107_Lidong2019%22&FORM=HPQUIZ","wp":true,"hsh":"0caf032f0888bd9d701838a2a670f849","drk":1,"top":1,"bot":1,"hs":[]},{"startdate":"20191106","fullstartdate":"201911061600","enddate":"20191107","url":"/th?id=OHR.LouvreAutumn_ZH-CN3206208609_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","urlbase":"/th?id=OHR.LouvreAutumn_ZH-CN3206208609","copyright":"秋日里通往卢浮宫的杜乐丽花园，法国巴黎 (© Brian A. Jackson/Getty Images Plus)","copyrightlink":"https://www.bing.com/search?q=%E6%9D%9C%E4%B9%90%E4%B8%BD%E8%8A%B1%E5%9B%AD&form=hpcapt&mkt=zh-cn","title":"","quiz":"/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191106_LouvreAutumn%22&FORM=HPQUIZ","wp":true,"hsh":"90ab8b71d4086701adc95e2b070b6ae6","drk":1,"top":1,"bot":1,"hs":[]},{"startdate":"20191105","fullstartdate":"201911051600","enddate":"20191106","url":"/th?id=OHR.CrocusSativus_ZH-CN3143423131_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","urlbase":"/th?id=OHR.CrocusSativus_ZH-CN3143423131","copyright":"西班牙的藏红花 (© Juan-Carlos Munoz/Minden Pictures)","copyrightlink":"https://www.bing.com/search?q=%E8%97%8F%E7%BA%A2%E8%8A%B1&form=hpcapt&mkt=zh-cn","title":"","quiz":"/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191105_CrocusSativus%22&FORM=HPQUIZ","wp":true,"hsh":"d23ff51d8b583a412c8d2e804017e8ba","drk":1,"top":1,"bot":1,"hs":[]},{"startdate":"20191104","fullstartdate":"201911041600","enddate":"20191105","url":"/th?id=OHR.CamelsBalloons_ZH-CN3086626309_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","urlbase":"/th?id=OHR.CamelsBalloons_ZH-CN3086626309","copyright":"普什卡骆驼节上的骆驼与牧民，印度拉贾斯坦邦 (© Anand Purohit/Getty Images)","copyrightlink":"https://www.bing.com/search?q=%E6%99%AE%E4%BB%80%E5%8D%A1%E9%AA%86%E9%A9%BC%E8%8A%82&form=hpcapt&mkt=zh-cn","title":"","quiz":"/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191104_CamelsBalloons%22&FORM=HPQUIZ","wp":true,"hsh":"de1622978718d032772e30c7bf9a809c","drk":1,"top":1,"bot":1,"hs":[]},{"startdate":"20191103","fullstartdate":"201911031600","enddate":"20191104","url":"/th?id=OHR.MtDiablo_ZH-CN2888586273_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","urlbase":"/th?id=OHR.MtDiablo_ZH-CN2888586273","copyright":"代阿布洛峰州立公园，加利福尼亚 (© Yuval Helfman/Getty Images)","copyrightlink":"https://www.bing.com/search?q=%E4%BB%A3%E9%98%BF%E5%B8%83%E6%B4%9B%E5%B3%B0%E5%B7%9E%E7%AB%8B%E5%85%AC%E5%9B%AD&form=hpcapt&mkt=zh-cn","title":"","quiz":"/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191103_MtDiablo%22&FORM=HPQUIZ","wp":true,"hsh":"b9bcee6359569a1d91c6af0fd186b82b","drk":1,"top":1,"bot":1,"hs":[]},{"startdate":"20191102","fullstartdate":"201911021600","enddate":"20191103","url":"/th?id=OHR.ChandraTal_ZH-CN2809744505_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp","urlbase":"/th?id=OHR.ChandraTal_ZH-CN2809744505","copyright":"喜马拉雅山脉的钱德拉塔尔湖，印度 (© f9photos/Getty Images Plus)","copyrightlink":"https://www.bing.com/search?q=%E9%92%B1%E5%BE%B7%E6%8B%89%E5%A1%94%E5%B0%94%E6%B9%96&form=hpcapt&mkt=zh-cn","title":"","quiz":"/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191102_ChandraTal%22&FORM=HPQUIZ","wp":true,"hsh":"08a41955d0052ad6800263f94c3325ce","drk":1,"top":1,"bot":1,"hs":[]}],"tooltips":{"loading":"正在加载...","previous":"上一个图像","next":"下一个图像","walle":"此图片不能下载用作壁纸。","walls":"下载今日美图。仅限用作桌面壁纸。"}};
bottomCell.onclick=function(e){
    if(e.target.nodeName!=='I'){ return ; }
    var curIndex = bottomCell.dataset['idx']*1;

    if(e.target.id==='prev'){
<<<<<<< HEAD
        curIndex-=1;
        if(curIndex<0){
            curIndex=0;
        }
        if(curIndex==0)prev.style.color="gray";
=======
        curIndex+=1;
        if(curIndex>7){
            curIndex=7;
        }
        if(curIndex==7)prev.style.color="gray";
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
        next.style.color="white";

        bottomCell.dataset['idx']=curIndex;
        var url=imagesInfo.images[curIndex].url;
        bgDiv.style.backgroundImage=`url('http://cn.bing.com/${url}')`;
<<<<<<< HEAD
        gantan.title=imagesInfo.images[curIndex].copyright;
    }
    else if(e.target.id==='next'){
        curIndex+=1;
        if(curIndex>7){
            curIndex=7;
        }
        if(curIndex==7)next.style.color="gray";
=======
    }
    else if(e.target.id==='next'){
        curIndex-=1;
        if(curIndex<0){
            curIndex=0;
        }
        if(curIndex==0)next.style.color="gray";
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
        prev.style.color="white";

        bottomCell.dataset['idx']=curIndex;
        var url=imagesInfo.images[curIndex].url;
        bgDiv.style.backgroundImage=`url('http://cn.bing.com/${url}')`;
<<<<<<< HEAD
        gantan.title=imagesInfo.images[curIndex].copyright;
=======
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
    }
}

//便签
var user;
var noteList = document.querySelector('#note-list');
var textArea = document.querySelector('#note');
var delBtn = document.querySelector('#icon-lajitong');
var curNote = null;
noteList.onclick = function(e) {
    // 这里有两种可能，一是点击新建便笺，而是点击具体便笺
    let createNote = e.path.find(function(element) {
        // 返回true则输出element
        return element.id === 'new-note';
    })
    if(createNote) {
        let date = new Date();
        let id = date.getTime();
        let createTime = `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        window.localStorage.noteIdCollection = !window.localStorage.noteIdCollection ? `${id}` : `${window.localStorage.noteIdCollection},${id}`;
        window.localStorage[`noteTime_${id}`] = createTime;
        window.localStorage[`noteText_${id}`] = `新便笺_${id}`;

        let html = `<div class="note-item" data-note-id=${id}>
                        <span class="note-title">新便笺_${id}</span>
                        <span class="note-time">${window.localStorage[`noteTime_${id}`]}</span>
                    </div>`;
        let wrapperDOM = document.createElement('a');
        wrapperDOM.innerHTML = html;
        noteList.appendChild(wrapperDOM.firstElementChild);

        $.ajax({
            type:"POST",
            url:"/insertmesg",
            dataType:"json",
            data:{
                "id": id,
                "username":user,
            }
        })
        return ;
    }
    // 点击具体便笺
    let noteItem = e.path.find(function(element) {
<<<<<<< HEAD
            return element.classList.contains('note-item');
=======
        return element.classList.contains('note-item');
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
    })
    if(noteItem) {
        // 选中的样式
        let noteItems = [...noteList.getElementsByClassName('note-item')]; //直接将元素变成数组
        //变成数组的第二种方法：
        // let noteItems = noteList.getElementsByClassName('.note-item');
        // noteItems = [].slice.call(noteItems);   //变成数组
        noteItems.forEach(function(element) {
            element.classList.remove('note-item-selected');
        })
        noteItem.classList.add('note-item-selected');
        //可进行编辑
        textArea.removeAttribute('disabled');

        let id = noteItem.dataset['noteId'];
        textArea.setAttribute('editingNote', id);

        curNote = noteItem;
        textArea.value = '';
        // 更新textArea里面的内容
        if(noteItem.firstElementChild.textContent.indexOf('新便笺_') === 0) {
            textArea.value = '';
        } else {
            textArea.value = noteItem.firstElementChild.textContent;
        }

    }
}
// 同步便笺
function renderNote() {
    $.ajax({
        type:"POST",
        url:"/preattend",
        dataType:'json',
        data:{
            "username":user,
        },
        success: function (data) {
            // console.log(data);
            for (let i=0; i<data.length;i++) {
                //遍历JSON格式的数组取元素, x代表下标
                var s=data[i].date;
                date=s.substring(0,4)+"年"+s.substring(5,7)+"月"+s.substring(8,10)+"日 "+s.substring(11,19);
                let html = `<div class="note-item" data-note-id=${data[i].id}>
                        <span class="note-title">${data[i].message}</span>
                        <span class="note-time">${date}</span>
                    </div>`
                let wrapperDOM = document.createElement('a');
                wrapperDOM.innerHTML = html;
                noteList.appendChild(wrapperDOM.firstElementChild);
            }
        }
    })
    return false;

}

// 更新便笺内容
textArea.oninput = function() {
    let content = this.value;
    let id = this.getAttribute('editingNote');
    if(!content) {
        content = `新便笺_${id}`;
    }
    window.localStorage[`noteText_${id}`] = content;
    curNote.firstElementChild.textContent = content;
    $.ajax({
        type:"POST",
        url:"/timeattend",
        dataType:"json",
        data:{
            "id": id,
            "message":content
        }
    })
}

// 删除按钮
delBtn.onclick = function() {
    let id = textArea.getAttribute('editingNote');
    if(!id) { return ; }
    let result = window.confirm('确认删除？');
    if(result) {
        let arr = window.localStorage.noteIdCollection.split(',');
        let index = arr.indexOf(id);
        arr.splice(index, 1);
        window.localStorage.removeItem(`noteText_${id}`);
        window.localStorage.removeItem(`noteTime_${id}`);
        window.localStorage.noteIdCollection = arr;
        curNote.remove();
        textArea.value = '';
        $.ajax({
            type:"POST",
            url:"/deletemesg",
            dataType:"json",
            data:{
                "id": id
            }
        })
    }
}

//点击时间后为背景添加模糊
var bgDiv = document.querySelector('#bgDiv');
function addObs() {
    bgDiv.classList.add('oobbss');
}
function delObs() {
    bgDiv.classList.remove('oobbss');
}

//按下按钮出现便签
var Clock = document.getElementById("clock");
var Middle = document.getElementById("middle");
var tr = document.getElementById("tpr")
var Search = document.getElementById("searchWrapper");
Clock.onclick = function() {
    // console.log(Search.getAttribute('style'));
    // console.log(Middle.getAttribute('style'));
    if (Search.getAttribute('style') == null) {
        addObs()
        Search.style.display='none';
        Middle.removeAttribute("style");
        tr.removeAttribute("style");
    }else{
        delObs()
        Search.removeAttribute("style");
        Middle.style.display='none';
        tr.style.display='none';
    }
}

//用户界面
var Mi = document.querySelector('#middle');
function addmi() {
    Mi.classList.add('oobbss');
}
function delmi() {
    Mi.classList.remove('oobbss');
}
var userr = document.getElementById("user");
var money = document.getElementById("money");
<<<<<<< HEAD
var uBac = document.getElementById("uBac");
var moneypic = document.getElementById("moneypic");
var paypage1 = document.getElementById("paypage1");
var paypage2 = document.getElementById("paypage2");
var zhi = document.getElementById("zhi");
userr.onclick = function() {
    uBac.removeAttribute("style");
    Middle.style.display='none'; 
    Clock.style.display='none';
    addmi();
}
money.onclick = function() {
    moneypic.removeAttribute("style");
    Middle.style.display='none';
    Clock.style.display='none';
    addmi();
    paypage1.classList.add("paypagestyle");
}
paypage1.onclick = function () {
    paypage1.classList.add("paypagestyle");
    paypage2.classList.remove("paypagestyle");
    zhi.src="images/pay.jpg";
}
paypage2.onclick = function () {
    paypage2.classList.add("paypagestyle");
    paypage1.classList.remove("paypagestyle");
    zhi.src="https://user-images.githubusercontent.com/48144936/69716916-08b9d200-1146-11ea-9905-9b91bf48b32e.jpg";
=======
var mp = document.getElementById("moneypic");
var uBac = document.getElementById("uBac");
userr.onclick = function() {
    uBac.removeAttribute("style");
    Middle.style.display='none'; 
    Clock.style.display='none'; 
    addmi();
}
money.onclick = function() {
    mp.removeAttribute("style");
    Middle.style.display='none'; 
    Clock.style.display='none'; 
    addmi();
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
}

var closee = document.getElementById("closee");
closee.onclick = function() {
    uBac.style.display='none';
    Middle.removeAttribute("style");
    Clock.removeAttribute("style");
    delmi();
}
var closeee = document.getElementById("closeee");
closeee.onclick = function() {
<<<<<<< HEAD
    moneypic.style.display='none';
=======
    mp.style.display='none';
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
    Middle.removeAttribute("style");
    Clock.removeAttribute("style");
    delmi();
}

function dengdeng(){
<<<<<<< HEAD
    let html = `<div style="font-size: 20px;position: absolute;top: 90px;left: 20px;">Hello ${user} :</div><div style="font-size: 17px;position: absolute;width: 80%;left: 10%;top: 25%;">欢迎注册，您现在可以在不同设备上编辑您的便签(自动保存）。 ╥﹏╥... 。</div>`
=======
    let html = `<div style="font-size: 20px;position: absolute;top: 90px;left: 20px;">Hello ${user} :</div><div style="font-size: 17px;position: absolute;width: 80%;left: 10%;top: 25%;">欢迎注册，您现在可以在不同设备上编辑您的便签(自动保存）。  因布局问题，请配合电脑浏览器最大化食用 ╥﹏╥... 。</div>`
>>>>>>> 1b7312799bb6a9a2bd1ea04070cf6fb12081c0a9
    let deng = document.querySelector("#deng");
    deng.innerHTML=html;
}

//注册&&登陆
var username = document.querySelector('#username');
var password = document.querySelector('#userkey');
var login = document.querySelector('#login');
var register = document.querySelector('#register');
register.onclick = function () {
    $.ajax({
        type:'POST',
        url:'/register',
        dataType:'json',
        data:{
            "username":username.value,
            "password":password.value
        },
        success: function (data) {
            if(data=="1"){
                user=username.value;
                alert("注册成功,为您自动登录");
                {
                    uBac.style.display='none';
                    Middle.removeAttribute("style");
                    Clock.removeAttribute("style");
                    delmi();
                    dengdeng();
                }
            }
            else
                alert("用户名已存在,请重新输入");
        }
    })
    return false;
};
login.onclick = function () {
    $.ajax({
        type:'POST',
        url:'/login',
        dataType:'json',
        data:{
            "username":username.value,
            "password":password.value
        },
        success: function (data) {
            if(data=="1"){
                user=username.value;
                renderNote();
                alert("登陆成功");
                {
                    uBac.style.display='none';
                    Middle.removeAttribute("style");
                    Clock.removeAttribute("style");
                    delmi();
                    dengdeng();
                }
            }
            else
                alert("用户名或密码错误,请重新输入");
        }
    })
    return false;
}