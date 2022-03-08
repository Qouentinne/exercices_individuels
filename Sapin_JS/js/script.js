function create_branches(tree, init, i){
    if (i<=1){
        return tree
    }
    tArr = Array.from(init)
    tArr.splice(init.length-4, 2)
    cBranch = tArr.join('')
    cBranch = cBranch.padStart(init.length-1, ' ')
    tree = cBranch + tree
    return create_branches(tree, cBranch, i-1) + tree
}

function build_tree(n){
    //init
    base1 = "\\\n"
    base1 = base1.padStart(2*n+2, "*")
    base = "/"+base1
    summit1 = "+\n"
    summit1.padStart(n+2, ' ')
    summit2 = "/*\\\n"
    summit2.padStart(n-1, ' ')
    summit = summit1 + summit2
    //recursion
    let tree = ""
    tTree = create_branches(base, base, n-1)
    fTree = summit + tTree

    console.log(fTree)
}

