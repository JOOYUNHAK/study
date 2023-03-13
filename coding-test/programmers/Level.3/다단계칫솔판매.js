function solution(enroll, referral, seller, amount) {
    var answer = [];
    const graph = new Graph();
    for( let i = 0; i < enroll.length; i++ ) {
        graph.insert(enroll[i], referral[i]);
    }
    for( let i = 0; i < seller.length; i++ ) {
        const sellerName = seller[i];
        const price = amount[i] * 100;
        graph.up(sellerName, price);
    }
    for( let i = 0; i < enroll.length; i++ ) {
        answer.push(
            graph.getPerson(enroll[i]).money
        )
    }
    return answer;
}

class Person {
    constructor(name) {
        this.name = name;
        this.money = 0;
    }

    addMoney(money) {
        this.money += money;
    }
}

class Graph {
    constructor() { this.graph = {}; }

    insert(name, refName) {
        const newPerson = new Person(name);
        this.graph[name] = [newPerson];
        if( refName !== '-' ) {
            const refPerson = this.graph[refName][0];
            this.graph[name].push(refPerson);
        }
    }

    getPerson(name) {
        return this.graph[name][0]
    }

    up(sellerName, price) {
        const seller = this.graph[sellerName][0];
        const bonus = Math.floor(price * 0.1);
        const realMoney = price - bonus;
        if( bonus < 1 ) {
            seller.addMoney(price);
            return;
        }
        seller.addMoney(realMoney);
        if( !this.graph[sellerName][1] ) return;
        const refPerson = this.graph[sellerName][1];
        return this.up(refPerson.name, bonus);
    }
}
