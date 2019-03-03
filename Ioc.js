
/**
 * 控制反转（Inversion of Control，缩写为IoC），是面向对象编程中的一种设计原则，
 * 可以用来减低计算机代码之间的耦合度。
 * 其中最常见的方式叫做依赖注入（Dependency Injection，简称DI），
 * 还有一种方式叫“依赖查找”（Dependency Lookup）。

 */
/** 原则：
 * 高层模块不应该依赖低层模块。两个都应该依赖抽象
 * 抽象不应该依赖具体实现
 * 面向接口编程，而非面向实现编程 
 *
 */

// 球队信息
class Team {
    constructor() {
        this.name = 'rock'
    }
}
// 球员
class Player {
    constructor() {
        this.team = new Team()
    }
    info() {
        console.log(this.team.name)
    }
}
//invoke 
let player1 = new Player()
player1.info()
//----------------------- 球员换队了 team 更新了
// 球队 信息不依赖具体实现
// 面向接口即面向抽象编程
class TeamInfo {
    constructor(name) {
        this.name = name
    }
}
class PlayerInfo {
    // 此处的参数，是teamInfo的一个实例，不直接依赖具体的实例
    // 面向抽象
    constructor(team) {
        this.team = team
    }
    info() {
        console.log(this.team.name)
    }
}
let team = new TeamInfo('nba1')
let player2 = new PlayerInfo(team)
player2.info()

// DI 依赖注入

