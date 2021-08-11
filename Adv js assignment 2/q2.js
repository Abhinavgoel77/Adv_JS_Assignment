//2. Given the position of two queens on a chess board, indicate whether or not they are positioned so that they can attack each other.
// Write a class called QueenAttack
// Create constructor that initializes the position for two queens
// Create a function canAttack which determines whether based on two position the queens can attack each other or not
// *Position will be based on matrix system ie first position will be [0,0] and last will be [7,7]

//------------------------------------------------------------------------
//code :



class QueenAttack {
    constructor(pos_1, pos_2) {
        this.pos_1 = pos_1;
        this.pos_2 = pos_2;
    }

      Attack() {
        if (this.pos_1[0] == this.pos_2[0])        // if the both queens have same x-axis
            return true;

        if (this.pos_1[1] == this.pos_2[1])        // if the both queens have same y-axis
            return true;

        if (Math.abs(this.pos_1[0] - this.pos_2[0]) == Math.abs(this.pos_1[1] - this.pos_2[1]))  // if they can intersect diagonally
            return true;

        return false;
    }
}

const pos_1 = [0, 0];                    //position of both the queens
const pos_2 = [7, 7];

const obj = new QueenAttack(pos_1, pos_2);
console.log(obj.Attack());                      // printing the output