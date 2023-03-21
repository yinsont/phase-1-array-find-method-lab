// code your solution here
superbowlWin = (record) => {   
    
    for (let result in record){
        if (record.find(record => record.result === 'W')){
            let win = record.find(record => record.result === 'W').year
            return win
        }
    }
    return undefined
}