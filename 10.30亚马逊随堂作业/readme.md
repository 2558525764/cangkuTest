[toc]

# 亚马逊购物
![](03slider/02azmazon-AnimationJS/1.png)
## 任务
亚马逊首页活动轮播图。
1. 图片自动切换，鼠标移入图片自动切换停止。
2. 鼠标移入文本区时，切换到对应图片，且文本区升高，鼠标移出文本区时，文本区降低。
3. 单击左右两个按钮时，可以将图片切换到对应方向的下/上一张图。
4. 图片切换时，有淡入淡出效果，底部说明跟随切换，并高亮（橙色显示）。
# 程序逻辑
1. 自动切换图片。
- 切换图片，使用图片堆叠方式，通过控制图片的透明度实现。JS程序中，定时切换样式。
- 定时器，在网页加载时启动，鼠标移入图片区时停止，鼠标移出时再度启动。
- 定时器启动后，更换相关结点的样式(图片、文本)
- 定时器停止，样式保留为最后一次定时器执行时的状态。
- 涉及时间：鼠标移入移出。
2. 上一张/下一场
- 单机“上一张”按钮/图标，切换下一张图片，如果图片达到第一张，让图片切回最后一张。
- 涉及事件：单击
<!-- ## 程序逻辑
1. 鼠标停悬图片有商品信息出来。
2. 轮播图每隔一段时间就会自动跳转下一张轮播图。
3. 左右两边跳转按钮可以实现轮播图手动切换。
4. 鼠标悬停商品信息也可以切换轮播图。
5. 用户根据点击图片或信息跳转到商品详情页面。
6. 鼠标悬停图片则轮播图停止切换图片。 -->