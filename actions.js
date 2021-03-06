import uuid from uuid;

// ACTION TYPES //
const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


export function createComment(text) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4(),
    }
}

export function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4(),
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

export function thumbUp(votes) {
    return {
        type: THUMB_UP_COMMENT,
        text,
        id: uuid.v4(),
        votes
    }
}

export function thumbDown(votes) {
    return {
        type: THUMB_DOWN_COMMENT,
        text,
        id: uuid.v4(),
        votes
    }
}


const boundCreateComment = text => dispatch(createComment(text));
boundCreateComment('New comment created!');

const boundEditComment = text => dispatch(editComment(text));
boundEditComment('Comment has been edited!');

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment('Comment has been removed!');

const boundThumbUp = votes => dispatch(thumbUp(votes));
boundThumbUp('Thumb up given.');

const boundThumbDown = votes => dispatch(thumbDown(votes));
boundThumbDown('Thumb down given.');

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';