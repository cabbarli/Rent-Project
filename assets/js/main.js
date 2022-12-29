
   // evin sahə ölçüsünü girərkən km2 dəyərini sağa çəkmə funksiyası
   function changeArea() {
    document.querySelector(".advertised__area").style.right = "20px";
   }
    // evin qiymətini girərkən AZN dəyə rini sağa çəkmə funksiyası
   function changeFunction() {
    document.querySelector(".advertised__value").style.right = "20px";
   }
   // detail map and elan-page3-map 
   function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {zoom: 7, center: { lat: 40.375,  lng: 49.845}});
  }

  /* heart like button */
 function chn() {
  var menu = document.querySelector(".immg");
  menu.classList.toggle("key");
 }

  /*====== detail top-right picture section =====*/
  var Gall = function () {

  var gal;
  var imgs;
  var actid;
  var height;

  var HideImages = function (imgs) {
    var i;
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.visibility = "hidden";
    }
  };

  var GenerateThumbnails = function (cont, srcs, alts) {
    var i;
    var id = 0;
    var imgs = '<div class="thumbbox">' +
      '<div class="imgthumb" id="ith_' + gal + '">';
    for (i = 0; i < srcs.length; i++) {
      imgs += '<img src="' + srcs[i] + '" alt="' + alts[i] + '" onclick="Gall.ImgBox(\'' + gal + '\', ' + i + ')" />';
    }
    var p = 'style="color: white;cursor: default;""';
    var n = p;
    var count = srcs.length - 1;
    if (id > 1) {

      p = 'onclick="Gall.ImgThuCh(\'' + gal + '\', ' + (id - 1) + ');"';
    }
    if (id < count) {
      n = 'onclick="Gall.ImgThuCh(\'' + gal + '\', ' + (id + 1) + ');"';
    }
    imgs += '</div>' +
      '</div>' +
      '<div class="btnl" id="' + gal + '_btnl"' + p + '>&lt;</div>' +
      '<div class="btnr" id="' + gal + '_btnr"' + n + '>&gt;</div>';

    return (imgs);
  };

  var GenerateImg = function (cont, idx, srcs, alts) {
    var img = '<div class="imgcont" >' +
      '<img id="' + gal + '_img" src="' + srcs[idx] + '" alt = "' + alts[idx] + '" onclick="Gall.ImgBox(\'' + gal + '\', ' + idx + ')" />' +
      '</div>';

    return (img);
  };

  var GetImages = function (cont, type) {

    var imgs = cont.getElementsByTagName(type);
    return imgs;
  };

  var GetImageLinks = function (imgs, type) {
    imgscou = imgs.length;
    var i;
    var srcs = Array();

    for (i = 0; i < imgscou; i++) {
      if (type == 'img') {
        srcs[i] = imgs[i].src;
      } else {
        var url = imgs[i].style.backgroundImage;
        srcs[i] = url.slice(5, (url.length - 2));
      }
    }
    return srcs;
  };

  var GetImageAlts = function (imgs) {
    var imgscou = imgs.length;
    var i;
    var srcs = new Array();

    for (i = 0; i < imgscou; i++) {
      srcs[i] = imgs[i].alt;
    }
    return srcs;
  };

  var Render = function (gall) {
    var tpl = "";
    var imgscou = 0;
    gal = gall;
    var cont = document.getElementById(gall);
    var imgst = GetImages(cont, 'img');
    imgs = imgst;
    var imglinks = GetImageLinks(imgst, 'img');
    var imgalts = GetImageAlts(imgst);

    HideImages(imgst);

    tpl += GenerateImg(cont, 0, imglinks, imgalts);
    tpl += GenerateThumbnails(cont, imglinks, imgalts);

    cont.innerHTML = "<div class='gall'>" + tpl + "</div>";
  };

  var CreateAttr = function (el, name, val) {
    var attr = document.createAttribute(name);
    attr.value = val;
    el.setAttributeNode(attr);

  };

  var CreateEl = function (el, type, text) {
    var inode = document.createElement(type);
    if (text != "") {
      var tnode = document.createTextNode(text);
      inode.appendChild(tnode);
    }
    var nd = el[0];
    nd.appendChild(inode);
    return inode;
  };

  var BoxRender = function (content) {
    //append container
    var mybody = document.getElementsByTagName('body');
    var mdiv = CreateEl(mybody, 'div', ' ');

    mdiv.setAttribute('class', 'gall');
    mdiv.setAttribute('id', 'gall_float');

    var box = '<div class="overlayer" id="overlayer"></div>'
      + '<div class="outerframe" id="outerframe">'
      + '<div class="outerbox">'
      + content
      + '</div>'
      + '</div>';
    mdiv.innerHTML = box;
  };

  var ImgBoxRender = function (gall, id) {
    actid = id + 1;
    gal = gall;

    id++;

    var cont = document.getElementById(gall);
    var imgs = GetImages(cont, 'img');
    var imglinks = GetImageLinks(imgs, 'img');
    var imgalts = GetImageAlts(imgs);

    var p = 'style="color: white;cursor: default;""';
    var n = p;
    var count = imglinks.length - 1;

    if (id > 1) {

      p = 'onclick="Gall.ImgCh(\'' + gall + '\', ' + (id - 1) + ');"';
    }
    if (id < count) {
      n = 'onclick="Gall.ImgCh(\'' + gall + '\', ' + (id + 1) + ');"';
    }

    var content = '<div class="imgbox">'
      + '<img class="img" id="imgbox_im" src="' + imglinks[id] + '" />'
      + '<div class="btntop">' +
      '<a href="#" ' + p + ' class="less">&lt;</a>' +
      ' <span class="displ">' + id + ' / ' + (count) + '</span>' +
      '<a href="#" ' + n + ' class="greater">&gt;</a>' +
      '</div>' +
      '<a href="#" onclick="Gall.CloseFloat();" class="close">X</a>' +
      '<br>' +
      '<div class="desc">' + imgalts[id] + '</div>'
      + '</div>';
    BoxRender(content);

    //get screen orientation and change view port
    var height = document.getElementById('overlayer').clientHeight;
    var width = document.getElementById('overlayer').clientWidth;
    var wimg = document.getElementById('imgbox_im').offsetWidth;
    var himg = document.getElementById('imgbox_im').offsetHeight;

    var viewratio = '';
    var imgratio = '';

    if (wimg > himg) {
      imgratio = 'landscape';
    } else {
      imgratio = 'portrait';
    }

    if (width > height) {
      viewratio = 'landscape';
    } else {
      viewratio = 'portrait';
    }

    if (imgratio == 'landscape' && viewratio == 'landscape') {
      //landscape
      document.getElementById("imgbox_im").setAttribute("style", "width:" + (width * 0.9 - 40) + "px");
    } else if (imgratio == 'landscape' && viewratio == 'portrait') {
      document.getElementById("imgbox_im").setAttribute("style", "width:" + (width * 0.9 - 40) + "px");
    } else if (imgratio == 'portrait' && viewratio == 'portrait') {
      document.getElementById("imgbox_im").setAttribute("style", "height:" + (height * 0.95 - 40) + "px");
    } else if (imgratio == 'portrait' && viewratio == 'landscape') {
      document.getElementById("imgbox_im").setAttribute("style", "height:" + (height * 0.95 - 40) + "px");
    }

    window.addEventListener("resize", ImgBoxResize);
  };


  var CloseFloatWin = function () {
    var el = document.getElementsByTagName('body')[0];
    el.removeChild(document.getElementById('gall_float'));

    //return false;
  };

  var ImgBoxRenderCall = function (gall, id) {
    ImgBoxRender(gall, id);
    ImgThuChange(gall, id);
    return (false);
  };

  var ImgChange = function (gall, id) {
    CloseFloatWin();
    ImgBoxRender(gall, id - 1);
    ImgThuChange(gall, id - 1);
    return (false);
  };

  var ImgThuChange = function (gall, id) {
    id++;
    var cont = document.getElementById(gall);
    var imgs = GetImages(cont, 'img');
    var imglinks = GetImageLinks(imgs, 'img');
    var imgalts = GetImageAlts(imgs);

    var el = document.getElementById(gall + '_img');
    el.src = imglinks[id];
    el.setAttribute(
      'onclick',
      'Gall.ImgBox(\'' + gall + '\', ' + (id - 1) + ');'
    );

    var count = imglinks.length - 1;

    var ell = document.getElementById(gall + '_btnl');
    if (id > 1) {
      ell.setAttribute(
        'onclick',
        'Gall.ImgThuCh(\'' + gall + '\', ' + (id - 2) + ');'
      );
      ell.removeAttribute('style');
    } else {
      ell.removeAttribute('onclick');
      ell.setAttribute(
        'style',
        'color: white;cursor: default;'
      );
    }

    var elr = document.getElementById(gall + '_btnr');
    if (id < count) {
      elr.setAttribute(
        'onclick',
        'Gall.ImgThuCh(\'' + gall + '\', ' + (id) + ');'
      );
      elr.removeAttribute('style');
    } else {
      elr.removeAttribute('onclick');
      elr.setAttribute(
        'style',
        'color: white;cursor: default;'
      );
    }
    return (false);
  };

  var ImgBoxResize = function () {
    var dummy = 1;
    ImgChange(gal, actid);
  };

  //public function
  return {
    Run: function (gall) {
      return Render(gall);
    },
    ImgBox: function (gall, id) {
      return ImgBoxRenderCall(gall, id);
    },
    CloseFloat: function () {
      return CloseFloatWin();
    },
    ImgCh: function (gall, id) {
      return ImgChange(gall, id);
    },
    ImgThuCh: function (gall, id) {
      return ImgThuChange(gall, id);
    }
  };

}();/**
 * Created by naith on 29.12.17.
 */
var Gall = function () {

  var gal;
  var imgs;
  var actid;
  var height;

  var HideImages = function (imgs) {
    var i;
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.visibility = "hidden";
    }
  };

  var GenerateThumbnails = function (cont, srcs, alts) {
    var i;
    var id = 0;
    var imgs = '<div class="thumbbox">' +
      '<div class="imgthumb" id="ith_' + gal + '">';
    for (i = 0; i < srcs.length; i++) {
      imgs += '<img src="' + srcs[i] + '" alt="' + alts[i] + '" onclick="Gall.ImgBox(\'' + gal + '\', ' + i + ')" />';
    }
    //var p = 'cursor: default;""';
    var p = '';
    var n = p;
    var pstyle = " inactive";
    var nstyle = pstyle;
    var count = srcs.length - 1;

    if (id > 1) {

      p = 'onclick="Gall.ImgThuCh(\'' + gal + '\', ' + (id - 1) + ');"';
      pstyle = '';
    }

    if (id < count) {
      n = 'onclick="Gall.ImgThuCh(\'' + gal + '\', ' + (id + 1) + ');"';
      nstyle = '';
    }
    imgs += '</div>' +
      '</div>' +
      '<div class="btnl' + pstyle + '" id="' + gal + '_btnl"' + p + '>&lt;</div>' +
      '<div class="btnr' + nstyle + '" id="' + gal + '_btnr"' + n + '>&gt;</div>';

    return (imgs);
  };

  var GenerateImg = function (cont, idx, srcs, alts) {
    var img = '<div class="imgcont" >'
      + '<img id="' + gal + '_img" src="' + srcs[idx] + '" alt = "' + alts[idx] + '" onclick="Gall.ImgBox(\'' + gal + '\', ' + idx + ')" />'
      + '</div>';

    return (img);
  };

  var GetImages = function (cont, type) {

    var imgs = cont.getElementsByTagName(type);
    return imgs;
  };

  var GetImageLinks = function (imgs, type) {
    imgscou = imgs.length;
    var i;
    var srcs = Array();

    for (i = 0; i < imgscou; i++) {
      if (type == 'img') {
        srcs[i] = imgs[i].src;
      } else {
        var url = imgs[i].style.backgroundImage;
        srcs[i] = url.slice(5, (url.length - 2));
      }
    }
    return srcs;
  };

  var GetImageAlts = function (imgs) {
    var imgscou = imgs.length;
    var i;
    var srcs = new Array();

    for (i = 0; i < imgscou; i++) {
      srcs[i] = imgs[i].alt;
    }
    return srcs;
  };

  var Render = function (gall) {
    var tpl = "";
    var imgscou = 0;
    gal = gall;
    var cont = document.getElementById(gall);
    var imgst = GetImages(cont, 'img');
    imgs = imgst;
    var imglinks = GetImageLinks(imgst, 'img');
    var imgalts = GetImageAlts(imgst);

    HideImages(imgst);

    tpl += GenerateImg(cont, 0, imglinks, imgalts);
    tpl += GenerateThumbnails(cont, imglinks, imgalts);

    cont.innerHTML = "<div class='gall'>" + tpl + "</div>";
  };

  var CreateAttr = function (el, name, val) {
    var attr = document.createAttribute(name);
    attr.value = val;
    el.setAttributeNode(attr);

  };

  var CreateEl = function (el, type, text) {
    var inode = document.createElement(type);
    if (text != "") {
      var tnode = document.createTextNode(text);
      inode.appendChild(tnode);
    }
    var nd = el[0];
    nd.appendChild(inode);
    return inode;
  };

  var BoxRender = function (content) {
    //append container
    var mybody = document.getElementsByTagName('body');
    var mdiv = CreateEl(mybody, 'div', ' ');

    mdiv.setAttribute('class', 'gall');
    mdiv.setAttribute('id', 'gall_float');

    var box = '<div class="overlayer" id="overlayer"></div>'
      + '<div class="outerframe" id="outerframe">'
      + '<div class="outerbox">'
      + content
      + '</div>'
      + '</div>';
    mdiv.innerHTML = box;
  };

  var ImgBoxRender = function (gall, id) {
    actid = id + 1;
    gal = gall;

    id++;

    var cont = document.getElementById(gall);
    var imgs = GetImages(cont, 'img');
    var imglinks = GetImageLinks(imgs, 'img');
    var imgalts = GetImageAlts(imgs);

    var p = 'cursor: default;""';
    var n = p;
    var pstyle = " inactive";
    var nstyle = pstyle;
    var count = imglinks.length - 1;

    if (id > 1) {

      p = 'onclick="Gall.ImgCh(\'' + gall + '\', ' + (id - 1) + ');"';
      pstyle = '';
    }
    if (id < count) {
      n = 'onclick="Gall.ImgCh(\'' + gall + '\', ' + (id + 1) + ');"';
      nstyle = '';
    }

    var content = '<div class="imgbox">'
      + '<img class="img" id="imgbox_im" src="' + imglinks[id] + '" />'
      + '<div class="btntop">'
      + '<a href="#" ' + p + ' class="less' + pstyle + '">&lt;</a>'
      + ' <span class="displ">' + id + ' / ' + (count) + '</span>'
      + '<a href="#" ' + n + ' class="greater' + nstyle + '">&gt;</a>'
      + '</div>'
      + '<a href="#" onclick="Gall.CloseFloat();" class="close">X</a>'
      + '<br>'
      + '<div class="desc">' + imgalts[id] + '</div>'
      + '</div>';
    BoxRender(content);

    //get screen orientation and change view port
    var height = document.getElementById('overlayer').clientHeight;
    var width = document.getElementById('overlayer').clientWidth;
    var wimg = document.getElementById('imgbox_im').offsetWidth;
    var himg = document.getElementById('imgbox_im').offsetHeight;


    var imgrat = wimg / himg;
    var viewrat = width / height;


    if (viewrat > imgrat) {
      //view is narrowed than img align to img height
      document.getElementById("imgbox_im").setAttribute("style", "height:" + (height * 0.95 - 40) + "px");

    } else if (viewrat <= imgrat) {
      //img is narrowed than view align to width
      document.getElementById("imgbox_im").setAttribute("style", "width:" + (width * 0.9 - 40) + "px");
    }

    window.addEventListener("resize", ImgBoxResize);
  };


  var CloseFloatWin = function () {
    var el = document.getElementsByTagName('body')[0];
    el.removeChild(document.getElementById('gall_float'));

    //return false;
  };

  var ImgBoxRenderCall = function (gall, id) {
    ImgBoxRender(gall, id);
    ImgThuChange(gall, id);
    return (false);
  };

  var ImgChange = function (gall, id) {
    CloseFloatWin();
    ImgBoxRender(gall, id - 1);
    ImgThuChange(gall, id - 1);
    return (false);
  };

  var ImgThuChange = function (gall, id) {
    id++;
    var cont = document.getElementById(gall);
    var imgs = GetImages(cont, 'img');
    var imglinks = GetImageLinks(imgs, 'img');
    var imgalts = GetImageAlts(imgs);

    var el = document.getElementById(gall + '_img');
    el.src = imglinks[id];
    el.setAttribute(
      'onclick',
      'Gall.ImgBox(\'' + gall + '\', ' + (id - 1) + ');'
    );

    var count = imglinks.length - 1;

    var ell = document.getElementById(gall + '_btnl');
    if (id > 1) {
      ell.setAttribute(
        'onclick',
        'Gall.ImgThuCh(\'' + gall + '\', ' + (id - 2) + ');'
      );
      ell.removeAttribute('class');
      ell.setAttribute(
        'class',
        'btnl'
      );
    } else {
      ell.removeAttribute('onclick');
      ell.setAttribute(
        'class',
        'btnl inactive'
      );
    }

    var elr = document.getElementById(gall + '_btnr');
    if (id < count) {
      elr.setAttribute(
        'onclick',
        'Gall.ImgThuCh(\'' + gall + '\', ' + (id) + ');'
      );
      elr.removeAttribute('class');
      elr.setAttribute(
        'class',
        'btnr'
      );
    } else {
      elr.removeAttribute('onclick');
      elr.setAttribute(
        'class',
        'btnr inactive'
      );
    }
    return (false);
  };

  var ImgBoxResize = function () {
    var dummy = 1;
    ImgChange(gal, actid);
  };

  //public function
  return {
    Run: function (gall) {
      return Render(gall);
    },
    ImgBox: function (gall, id) {
      return ImgBoxRenderCall(gall, id);
    },
    CloseFloat: function () {
      return CloseFloatWin();
    },
    ImgCh: function (gall, id) {
      return ImgChange(gall, id);
    },
    ImgThuCh: function (gall, id) {
      return ImgThuChange(gall, id);
    }
  };

}();

//only in codepen
Gall.Run("gal0");
//Gall.Run("gal1");

//Gall.ImgBox("gal0", 1);


