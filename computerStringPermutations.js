function permutations(str){
    if(str.length==1){
        return [str]
    }

    let first_element = str[0]
    let other_half = str.slice(1,str.length)

    let L = permutations(other_half)
    let n = L[0].length
    let i,j;
    let D=[]
    for(i of L){
        for(j=0;j<=n;j++){
            D.push(i.slice(0,j)+first_element+i.slice(j,n))
        }
    }
    return D
}

let s = permutations('ABCDEF')
console.log(s)