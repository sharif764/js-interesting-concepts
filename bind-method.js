const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ kibria',
    trratDey: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero BAlam'
}
const heroTreatDey = kibria.trratDey.bind()