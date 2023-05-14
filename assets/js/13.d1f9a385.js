(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{286:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"工作日志5-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作日志5-8"}},[s._v("#")]),s._v(" 工作日志5.8-")]),s._v(" "),a("h2",{attrs:{id:"_5-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-8"}},[s._v("#")]),s._v(" 5.8")]),s._v(" "),a("ul",[a("li",[s._v("下载并配置好 lio-sam 的运行环境并用rosbag跑出来了仿真")]),s._v(" "),a("li",[s._v("配置了 Ubuntu22.04 虚拟机并安装ros2环境")]),s._v(" "),a("li",[s._v("跑通了viobot的代码，并尝试安装无线网卡驱动(未成功)")])]),s._v(" "),a("h2",{attrs:{id:"_5-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-9"}},[s._v("#")]),s._v(" 5.9")]),s._v(" "),a("p",[s._v("安装liovx遇到的问题：\n教程地址：https://github.com/Livox-SDK/LIO-Livox\n按照github上的所需条件进行安装，但教程有所变化")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Ubuntu(16.04 or 18.04)作者使用的是18.04")])]),s._v(" "),a("li",[a("p",[s._v("ROS（melodic or kinetic）作者使用的是melodic\n这里推荐使用鱼香ROS一键安装")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget http://fishros.com/install -O fishros && . fishros\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("，跟着提示安装对应的ROS版本即可。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("Eigen\n使用命令一键安装即可：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo apt-get install libeigen3-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("ceres-solver")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#安装依赖项\n#CMake\nsudo apt-get install cmake\n\n# google-glog + gflags\n\nsudo apt-get install libgoogle-glog-dev libgflags-dev\n\n# Use ATLAS for BLAS & LAPACK\n\nsudo apt-get install libatlas-base-dev\n\n# Eigen3\n\nsudo apt-get install libeigen3-dev\n\n# SuiteSparse (optional)\n\nsudo apt-get install libsuitesparse-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("开始安装\ntar zxf ceres-solver-2.1.0.tar.gz\nmkdir ceres-bin\ncd ceres-bin\ncmake ../ceres-solver-2.1.0\nmake -j3\nmake test\nmake install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("PCL")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo apt-get install ros-melodic-pcl-ros\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("再参考这个教程即可https://blog.csdn.net/qq_35102059/article/details/118569636")]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[s._v("livox_ros_driver\n参考教程：https://github.com/Livox-SDK/livox_ros_driver/blob/master/README_CN.md")])]),s._v(" "),a("li",[a("p",[s._v("Suitesparse")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo apt-get install libsuitesparse-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"8"}},[a("li",[s._v("livox")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#进入livox_ros_driver的工作空间\ncd ws_livox/src/\ngit clone https://github.com/Livox-SDK/LIO-Livox\ncd ..\ncatkin_make\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("#这时候会遇到报错原因是因为其camkelist.txt文件中使用了过时的语法，将-c++11改为-c++17即可")]),s._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[s._v("安装模拟器仿真成功")])]),s._v(" "),a("h2",{attrs:{id:"_5-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-10"}},[s._v("#")]),s._v(" 5.10")]),s._v(" "),a("ul",[a("li",[s._v("商量了一下向张老师提一下关于新楼场地需求的事\n"),a("ul",[a("li",[s._v("方案一（最理想的）\n"),a("ul",[a("li",[s._v("8 X 8 的无人机室内集群场地")]),s._v(" "),a("li",[s._v("robomaster战队实验场地和研讨室，场地为12 X 8的 3 V 3 高校联盟赛地图，研讨室为原407工作区大小（估计为10 X 10）")]),s._v(" "),a("li",[s._v("无人机室内避障+路径规划（穿越机+视觉slam无人机）室内实验场地")])])]),s._v(" "),a("li",[s._v("方案二（比较现实的）\n"),a("ul",[a("li",[s._v("总体为两个407的大小")])])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);