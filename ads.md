nextjs接入adsterra横幅的小技巧
adsterra官方给的代码全是html的，搞成next/Script的小组件会因为延迟加载等问题导致横幅飞到页面底部，无法控制位置

另外如果要一个横幅显示多次，或者想根据手机和电脑显示不同的横幅，组件逻辑会很复杂

查了下网上教程都是教怎么写组件的，试了下都有或多或少的坑

最后想到一个办法：放到html里，然后在组件里iframe进去，实测是能赚到广告费的，并且可以随意控制位置

不同横幅可以放到不同的html里，就能实现根据实际情况显示不同的横幅

iframe示例：

<html>
    <body style="padding: 0;margin:0px;">
        <script type="text/javascript">
            atOptions = {
                'key' : 'KEY',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
            };
        </script>
        <script data-cfasync="false" type="text/javascript" src="//www.highperformanceformat.com/KEY/invoke.js"></script>
    </body>
</html>

广告组件：

"use client"
import { useEffect, useState } from 'react';

export default function Banner() {
    const [adWidth, setAdWidth] = useState(320);
    const [adHeight, setAdHeight] = useState(50);

    useEffect(() => {
        const updateWidth = () => {
            setAdWidth(window.innerWidth >= 768 ? 728 : 320);
            setAdHeight(window.innerWidth >= 768 ? 90 : 50);
        };
        updateWidth()
    }, []);

    return (
        <div className="flex justify-center">
            <iframe
                src={`/adsterra_${adWidth}.html`}
                width={`${adWidth}px`}
                height={`${adHeight}px`}
                scrolling="no"
            />
        </div>
    );
}
