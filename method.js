const student = {
    name: 'sharif',
    id: 101,
    money: 5000,
    major: 'mathematics',
    isRich: false,
    subject: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics',
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDay: function (expansive) {
        return this.money = this.money - expansive;
    },
}
// student.takeExam();

const result = student.treatDay(2500);
console.log(result);