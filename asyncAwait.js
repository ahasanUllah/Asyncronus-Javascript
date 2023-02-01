const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails= {
            name: 'Technical Meeting',
            location: "Google meet",
            time: '7.00pm',
            date: '2 jan 2023'
        }
        resolve(meetingDetails)
    }else {
        reject(new Error('meeting already scheduled'))
    }
}) 

const addToCalender = (meetingDetails) => {
    const calender = `${meetingDetails.name} has been located on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender)
    
}

async function myMeeting() {
    try{
        const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails)
    console.log(calender);
    }
    catch{console.log('Something went worng')}
}
myMeeting()

