# FreeRTOS 与 RT-Thread 对比

以上为两款市面上较为常见的开源嵌入式实时操作系统，本文主要为24赛季及之后电控组 RTOS 对比选型。

## 共同点

- 开源；
- C语言编写；
- 可通过 config 文件自定义配置；
- kernel 实现嵌入式实时操作系统基本功能；
- 用户量大，资料丰富；

## 不同的优缺点

### FreeRTOS：

[源码仓库](https://github.com/FreeRTOS/FreeRTOS-Kernel)

#### 优点

- 可通过 cubeMX 工具直接进行配置生成工程代码；
- 往届其他大部分战队及 RM 官方示例使用；

#### 缺点

- 国外社区，资料及交流没那么方便；
- 可能不太适应其命名规则；



### RT-Thread：

[源码仓库](https://github.com/RT-Thread/rt-thread)

#### 优点

- 国产，中文资料丰富，社区活跃；[RT-Thread 文档中心](https://www.rt-thread.org/document/site/#/)
- Kconfig，scons，env，menuconfig 等多种开发工具，可以灵活的对项目进行图形化界面配置和构建；
- 丰富的板级支持包和各种常见外设驱动（ stm32 系列的驱动是 rt-thread 最完善的）；
- 可通过 FinSH 工具对开发板进行命令行调试，直观明确；
- 内核通过 C 实现的面向对象，可以学习借鉴；
- 对其比较熟悉，并且由于其较为完善的 bsp ，可以让新手快速上手，易于培训；
- 可以与其核心维护人员交流沟通；

#### 缺点

- 部分外设驱动可能存在问题需要自行修改；
- 需要学习掌握的工具更多；
- 使用 RTT 的战队相对较少，相关的踩坑经验和分享较少；



我对 FreeRTOS 源码的了解较少，虽然是通过 FreeRTOS 初学的 RTOS ，并且之前电控使用的都是 FreeRTOS。更多见解欢迎补充。
