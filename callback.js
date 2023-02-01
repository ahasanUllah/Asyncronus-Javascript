const takeOrder = (custommer, callback) => {
    console.log(`Order has been placed for ${custommer}`);
    callback(custommer);
}

const processOrder = (custommer, callback) => {
    console.log(`processing order for ${custommer}`);

    setTimeout(() => {
        console.log(`cooking completed`);
        console.log(`order processed for ${custommer}`);
        callback(custommer)
    }, 3000);
}

const orderComplete = (custommer) => {
    console.log(`Order has been completed for ${custommer}`);
}


takeOrder('custommer 1', (custommer) => {
    processOrder(custommer, (custommer) => {
        orderComplete(custommer)
    })
})