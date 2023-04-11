

export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const SHOW_JOBS_LIST='SHOW_JOBS_LIST'


export const addToFavorite = (jobs) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: jobs
    }
}

export const removeFromFavorite = (fav) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: fav
    }
}

export const showJobsList = (jobs) => {
    return {
        type: SHOW_JOBS_LIST,
        payload: jobs
    }
}

export const getFetch=(query)=>{
return async(dispatch,getState)=>{
    try {
        let response=await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`)
        let jobslist= await response.json()
        //console.log('sono la fetch',jobslist.data)
        dispatch(showJobsList(jobslist.data))
    } catch (error) {
        console.log(error)
    }
}
}

