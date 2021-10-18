export enum RabbitMQ {
    UserQueue = 'users',
    RecipeQueue = 'recipes',
    CommentQueue = 'comments'
}

export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER'
}

export enum RecipeMSG {
    CREATE = 'CREATE_RECIPE',
    FIND_ALL = 'FIND_RECIPES',
    FIND_ONE = 'FIND_RECIPE',
    UPDATE = 'UPDATE_RECIPE',
    DELETE = 'DELETE_RECIPE',
    ADD_COMMENT = 'ADD_COMMENT'
}

export enum CommentMSG {
    CREATE = 'CREATE_COMMENT',
    FIND_ALL = 'FIND_COMMENTS',
    FIND_ONE = 'FIND_COMMENT',
    UPDATE = 'UPDATE_COMMENT',
    DELETE = 'DELETE_COMMENT'
}