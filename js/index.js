// 立即执行函数，防止变量污染 (function() {})();

// 柱状图模块1
;
(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'))
        // 2.指定配置项和数据
    var option = {
            color: ['#2f89cf'],
            // 提示框组件
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                },
            },
            // 修改图表位置大小
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true,
            },
            // x轴相关配置
            xAxis: [{
                type: 'category',
                data: ['2016', '2017', '2018', '2019', '2020', '2021'],
                axisTick: {
                    alignWithLabel: true,
                },
                // 修改刻度标签，相关样式
                axisLabel: {
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: 10,
                },
                // x轴样式不显示
                axisLine: {
                    show: false,
                },
            }, ],
            // y轴相关配置
            yAxis: [{
                type: 'value',
                // 修改刻度标签，相关样式
                axisLabel: {
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 12,
                },
                // y轴样式修改
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.6)',
                        width: 2,
                    },
                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)',
                    },
                },
            }, ],
            // 系列列表配置
            series: [{
                name: '收入',
                type: 'bar',
                barWidth: '35%',
                // ajax传动态数据
                data: [8090, 8869, 9716, 10756, 11642, 12931],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5,
                },
            }, ],
        }
        // 3.把配置项给实例对象
    myChart.setOption(option)

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize()
    })
})()

// 柱状图模块2
;
(function() {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar2 .chart'))

    // 声明颜色数组
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
        // 2.指定配置项和数据
    var option = {
            grid: {
                top: '10%',
                left: '22%',
                bottom: '10%',
                // containLabel: true
            },
            xAxis: {
                // 不显示x轴相关信息
                show: false,
            },
            yAxis: [{
                    type: 'category',
                    // y轴数据反转，与数组的顺序一致
                    inverse: true,
                    // 不显示y轴线和刻度
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    // 将刻度标签文字设置为白色
                    axisLabel: {
                        color: '#fff',
                    },
                    data: ['粮食', '油料', '烤烟', '肉类', '水产品'],
                },
                {
                    // y轴数据反转，与数组的顺序一致
                    inverse: true,
                    show: true,
                    // 不显示y轴线和刻度
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    // 将刻度标签文字设置为白色
                    axisLabel: {
                        color: '#fff',
                    },
                    data: [103.4, 76.17, 21.14, 207.86, 24.87],
                },
            ],
            series: [{
                    // 第一组柱子（条状）
                    name: '条',
                    type: 'bar',
                    // 柱子之间的距离
                    barCategoryGap: 50,
                    // 柱子的宽度
                    barWidth: 10,
                    // 层级 相当于z-index
                    yAxisIndex: 0,
                    // 柱子更改样式
                    itemStyle: {
                        barBorderRadius: 20,
                        // 此时的color可以修改柱子的颜色
                        color: function(params) {
                            // params 传进来的是柱子的对象
                            // dataIndex 是当前柱子的索引号
                            // console.log(params);
                            return myColor[params.dataIndex]
                        },
                    },
                    data: [70, 34, 60, 78, 69],
                    // 显示柱子内的百分比文字
                    label: {
                        show: true,
                        position: 'inside',
                        // {c} 会自动解析为数据（data内的数据）
                        formatter: '{c}%',
                    },
                },
                {
                    // 第二组柱子（框状 border）
                    name: '框',
                    type: 'bar',
                    // 柱子之间的距离
                    barCategoryGap: 50,
                    // 柱子的宽度
                    barWidth: 14,
                    // 层级 相当于z-index
                    yAxisIndex: 1,
                    // 柱子修改样式
                    itemStyle: {
                        color: 'none',
                        borderColor: '#00c1de',
                        borderWidth: 2,
                        barBorderRadius: 15,
                    },
                    data: [100, 100, 100, 100, 100],
                },
            ],
        }
        // 3.把配置项给实例对象
    myChart.setOption(option)

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize()
    })
})()

// 折线图模块1
;
(function() {
    // 年份对应数据
    var yearData = [{
            year: '2019', // 年份
            data: [
                // 两个数组是因为有两条线
                [5.8, 5.4, 5.5, 5.6, 5.6],
                [7.0, 7.3, 7.7, 8.0, 8.9],
                [12.8, 13.0, 13.3, 13.4, 12.2],
                [9.2, 9.5, 9.6, 9.8, 9.5],
            ],
        },
        {
            year: '2020', // 年份
            data: [
                // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
            ],
        },
    ]

    var myChart = echarts.init(document.querySelector('.line .chart'))

    var option = {
        // 修改两条线的颜色
        color: ['#00f2f1', '#ed3f35', '#236B8E', '#8C7853'],
        tooltip: {
            trigger: 'axis',
        },
        // 图例组件
        legend: {
            // 当serise 有name值时， legend 不需要写data
            // 修改图例组件文字颜色
            textStyle: {
                color: '#4c9bfd',
            },
            right: '10%',
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true, // 显示边框
            borderColor: '#012f4a', // 边框颜色
        },
        xAxis: {
            type: 'category',
            boundaryGap: false, // 去除轴间距
            data: ['2016', '2017', '2018', '2019', '2020'],
            // 去除刻度线
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#4c9bfb', // x轴文本颜色
            },
            axisLine: {
                show: false, // 去除轴线
            },
        },
        yAxis: {
            type: 'value',
            // 去除刻度线
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#4c9bfb', // x轴文本颜色
            },
            axisLine: {
                show: false, // 去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a',
                },
            },
        },
        series: [{
                type: 'line',
                smooth: true, // 圆滑的线
                name: '生活用品及服务',
                data: yearData[0].data[0],
            },
            {
                type: 'line',
                smooth: true, // 圆滑的线
                name: '医疗保健',
                data: yearData[0].data[1],
            },
            {
                type: 'line',
                smooth: true, // 圆滑的线
                name: '交通通信',
                data: yearData[0].data[2],
            },
            {
                type: 'line',
                smooth: true, // 圆滑的线
                name: '教育文化娱乐',
                data: yearData[0].data[3],
            },
        ],
    }

    myChart.setOption(option)

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function() {
        myChart.resize()
    })

    // 5.点击切换2020 和 2021 的数据
    $('.line h2 a').on('click', function() {
        // console.log($(this).index());
        // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()]
        option.series[0].data = obj.data[0]
        option.series[1].data = obj.data[1]
            // 选中年份高亮
        $('.line h2 a').removeClass('a-active')
        $(this).addClass('a-active')

        // 需要重新渲染
        myChart.setOption(option)
    })
})()

// 折线图模块2
;
(function() {
    var myChart = echarts.init(document.querySelector('.line2 .chart'))

    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: '0%',
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
            },
        },
        grid: {
            top: '30',
            left: '10',
            right: '30',
            bottom: '10',
            containLabel: true,
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12,
                },
            },
            // x轴线的颜色为   rgba(255,255,255,.2)
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.2)',
                },
            },
            data: ['2016', '2017', '2018', '2019', '2020'],
        }, ],
        yAxis: [{
            type: 'value',
            axisTick: {
                // 不显示刻度线
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                },
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12,
                },
            },
            // 修改分割线的颜色
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                },
            },
        }, ],
        series: [{
                name: '自来水受益村数',
                type: 'line',
                smooth: true, // 圆滑的线
                // 单独修改当前线条的样式
                lineStyle: {
                    color: '#0184d5',
                    width: 2,
                },
                // 填充区域渐变透明颜色
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1, [{
                                offset: 0,
                                color: 'rgba(1, 132, 213, 0.4)', // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(1, 132, 213, 0.1)', // 渐变线的结束颜色
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                },
                // 拐点设置为小圆点
                symbol: 'circle',
                // 设置拐点大小
                symbolSize: 5,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: '#0184d5',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 12,
                },
                data: [13518, 13759, 13187, 14077, 13861],
            },
            {
                name: '有线电视村数',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        color: '#00d887',
                        width: 2,
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: 'rgba(0, 216, 135, 0.4)',
                                },
                                {
                                    offset: 0.8,
                                    color: 'rgba(0, 216, 135, 0.1)',
                                },
                            ],
                            false
                        ),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    },
                },
                // 设置拐点 小圆点
                symbol: 'circle',
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: '#00d887',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 12,
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [0, 8707, 11843, 13058, 13243],
            },
            {
                name: '通宽带村数',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        color: '#ff8936',
                        width: 2,
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: 'rgba(0, 216, 135, 0.4)',
                                },
                                {
                                    offset: 0.8,
                                    color: 'rgba(0, 216, 135, 0.1)',
                                },
                            ],
                            false
                        ),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                    },
                },
                // 设置拐点 小圆点
                symbol: 'circle',
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: '#ff8936',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 12,
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [0, 11816, 13047, 13618, 13653],
            },
        ],
    }

    myChart.setOption(option)

    window.addEventListener('resize', function() {
        myChart.resize()
    })
})()

// 饼形图1
;
(function() {
    var myChart = echarts.init(document.querySelector('.pie .chart'))
    var option = {
        // color: ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'],
        // tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)',
        // },
        legend: {
            // 垂直居中,默认水平居中
            // orient: 'vertical',

            bottom: 0,
            left: 10,
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '10',
            },
        },
        series: [{
            name: '年龄分布',
            type: 'pie',
            // 设置饼形图在容器中的位置
            center: ['50%', '42%'],
            // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            // 图形上的文字
            label: {
                show: false,
                position: 'center',
            },
            // 链接文字和图形的线
            labelLine: {
                show: false,
            },
            data: [{
                    value: 963,
                    name: '0-15岁',
                },
                {
                    value: 2310,
                    name: '16-59岁',
                },
                {
                    value: 579,
                    name: '60周岁及以上',
                },
                {
                    value: 453,
                    name: '65周岁及以上',
                },
            ],
        }, ],
    }

    myChart.setOption(option)
    window.addEventListener('resize', function() {
        myChart.resize()
    })
})()

// 饼形图2
;
(function() {
    var myChart = echarts.init(document.querySelector('.pie2 .chart'))
    var option = {
        // color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        // tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b} : {c} ({d}%)',
        // },
        legend: {
            bottom: 0,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: 10,
            },
        },
        series: [{
            name: '地区',
            type: 'pie',
            radius: ['10%', '60%'],
            center: ['50%', '40%'],
            // 半径模式  area面积模式
            roseType: 'radius',
            // 图形的文字标签
            label: {
                fontsize: 10,
            },
            // 引导线调整
            labelLine: {
                // 连接扇形图线长(斜线)
                length: 6,
                // 连接文字线长(横线)
                length2: 8,
            },
            data: [{
                    value: 610.23,
                    name: '贵阳市',
                },
                {
                    value: 660.6675,
                    name: '遵义市',
                },
                {
                    value: 328.26,
                    name: '铜仁市',
                },
                {
                    value: 245.88,
                    name: '安顺',
                },
                {
                    value: 301.71,
                    name: '六盘水',
                },
                {
                    value: 301.5112,
                    name: '黔西南州',
                },
                {
                    value: 374.04,
                    name: '黔东南州',
                },
                {
                    value: 349.4385,
                    name: '黔南州',
                },
                {
                    value: 684.48,
                    name: '毕节',
                },
            ],
        }, ],
    }

    myChart.setOption(option)
    window.addEventListener('resize', function() {
        myChart.resize()
    })
})()