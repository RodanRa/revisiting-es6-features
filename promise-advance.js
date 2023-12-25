async function waitFor3Sec(){
    return new Promise((resolve, reject)=> setTimeout(resolve, 3000))
}

async function waitFor5Sec(){
    return new Promise(async (resolve, reject)=> {
        await waitFor3Sec()
        console.log('Waited for 3 sec')
        resolve()
    }
    )
}

async function main(){
    // waitFor3Sec().then(()=>console.log('resolved'))
    const con = true
    if(con) await waitFor3Sec();
    console.log('resolved')
}

main()
// console.log('Called before resolved')

// waitFor5Sec().then(()=>console.log('abc'))
// console.log('xyz')


