 //页面加载完成开始加载小星星
            window.onload = function(){
                //设置定时器   1秒钟显示一个小星星
                window.setInterval("ShowStart()",1000);
            }
            //动画主函数
            function ShowStart(){
                //创建图片节点
                var img = document.createElement("img");
                //将图片节点追加到body节点下
                document.body.appendChild(img);
                //设置img的属性
                img.setAttribute("src","img/Mazz.png");
                var width = getRandom(30,80);
                img.setAttribute("width",width);
                //设置星星的随机坐标
                var x = getRandom(0,window.innerWidth-50);
                var y = getRandom(0,window.innerHeight-50);
                img.setAttribute("style","position: absolute;left:"+x+"px; top:"+y+"px;");
                //为星星添加onclick事件属性
                img.setAttribute("onclick","removeImg(this)");
            }
            //随机数函数
            function getRandom(min,max){
                var random = Math.random()*(max-min) + min;
                random = Math.floor(random);
                return random;
            }
            //删除星星函数
            function removeImg(obj){
                document.body.removeChild(obj);
            }
