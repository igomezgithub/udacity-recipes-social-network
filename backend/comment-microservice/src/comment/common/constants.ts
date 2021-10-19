export enum RabbitMQ {
    CommentQueue = 'comments'
}

export enum CommentMSG {
    CREATE = 'CREATE_COMMENT',
    FIND_ALL = 'FIND_COMMENTS',
    FIND_ONE = 'FIND_COMMENT',
    UPDATE = 'UPDATE_COMMENT',
    DELETE = 'DELETE_COMMENT'
}
