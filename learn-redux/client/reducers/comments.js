// A reducer takes in two things

// 1. The action ( info of what happened )
// 2.  A copy of the current state

function comments( state = [], action ) {
	console.log( state, action );

	return state;
}

export default comments;
