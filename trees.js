/**
 * Created by GodaiYuusaku on 11/15/16.
 */
function TreeNode(data) {
    if (!data) {
        throw new Error("You must initialize this node to something");
    }

    this.data = data;
    this.leftChild = null;
    this.rightChild = null;

    this.getLeftChild = function () {
        return this.leftChild;
    };

    this.setLeftChild = function (node) {
        this.leftChild = node;
    };

    this.getRightChild = function () {
        return this.rightChild;
    };

    this.setRightChild = function (node) {
        this.rightChild = node;
    };

    this.compare = function (item) {
        if (item > this.data)
            return 1;
        else if (item < this.data)
            return -1;
        else
            return 0;
    };

    this.print = function () {

    }
}

function find(item, node) {
    if (!node) {
        return null;
    }

    if (node.compare(item) === 1) {
        return find(item, node.right);
    }
    else if (node.compare(item) === -1) {
        return find(item, node.left);
    }
    else {
        return node;
    }
}

var dictionary = new TreeNode()

