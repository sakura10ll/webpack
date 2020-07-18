// let $imgBox = $('.imgBox');
// let $img = $imgBox.children('img');
// let $window = $(window);
// 在onload 事件和 onscroll 事件触发
// $window.on('load scroll', function(){
//   if($img.attr('isLoad')==="true"){
//     // 之前加载过则不会再重新加载
//     return;
//   }
//   let $A = $imgBox.outerHeight() + $imgBox.offset().top; // 获取图片本身的高度,距上偏移的高度
//   let $B = $window.outerHeight() + $window.scrollTop(); // 获取当前一屏的高度，滚动条卷去的高度
//   if($A <= $B){
//     // 加载真实的图片
//     $img.attr('src', $img.attr('data-img'));
//     $img.on('load', function(){
//       // 加载成功  fadeIn 是 jquery中的渐现动画
//       $img.css('display', 'block');
//       // $img.stop().fadeIn();

//     }) 
//     $img.attr('isLoad', true); // attr存储的自定义属性值都是字符串格式"true"
//   }
// });

// 多个图片懒加载
let $container = $(".container");
let $window = $(window);
let $imgBoxs = null;
// 造假数据
let str = '';
new Array(20).fill(null).forEach(item=>{
  str +=`<div class="imgBox">
    <img src="" alt="" data-img="http://www.zhufengpeixun.cn/main/img/banner10.png"/>
  </div>`;
});
$container.html(str);
$imgBoxs = $container.children('.imgBox');
$window.on("load scroll", function(){
  // 获取浏览器底边框与body的距离
  let $B = $window.outerHeight() + $window.scrollTop();
  // 循环每个图片的区域,根据自己区域距body的距离,计算里面的图片是否加载
  $imgBoxs.each((index, item)=>{
    let $item = $(item);
    if($item.attr('isLoad') === 'true'){
      return;
    }
    let $itemA = $item.outerHeight() + $item.offset().top;
    if($itemA <= $B){
      $item.attr('isLoad', true);
      let $img = $item.children('img');
      $img.attr('src', $img.attr('data-img'));
      $img.on('load', () => $img.stop().fadeIn());
    }
  })
})
