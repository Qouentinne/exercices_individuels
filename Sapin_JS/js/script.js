function create_branches(tree, init, i){
    if (i<=2){
        return tree
    }
    tArr = Array.from(init)
    tArr.splice(init.length-4, 2)
    cBranch = tArr.join('')
    cBranch = cBranch.padStart(init.length-1, ' ')
    tree = cBranch + tree
    return create_branches(tree, cBranch, i-1)
}

function build_tree(n){
    //init
    let base1 = "\\\n"
    base1 = base1.padStart(2*n+1, "*")
    base = "/"+base1
    let summit1 = "+\n"
    summit1=summit1.padStart(n+2, ' ')
    let summit2 = "/*\\\n"
    summit2=summit2.padStart(n+3, ' ')
    let summit3 = "/***\\\n"
    summit3=summit3.padStart(n+4, ' ')
    summit = summit1 + summit2 + summit3
    //recursion
    tTree = create_branches(base, base, n-1)
    fTree = summit + tTree

    console.log(fTree)
}

