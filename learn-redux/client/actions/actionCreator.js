// Increment like
export function increment( index ) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// Add comment
export function add_comment( postId, author, comment ) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// Remove comment
export function remove_comment( postId, index ) {
	return {
		type: 'REMOVE_COMMENT',
		index,
		postId
	}
}