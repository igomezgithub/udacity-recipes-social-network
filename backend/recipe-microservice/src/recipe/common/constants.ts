export enum RabbitMQ {
    RecipeQueue = 'recipes'
}

export enum RecipeMSG {
    CREATE = 'CREATE_RECIPE',
    FIND_ALL = 'FIND_RECIPES',
    FIND_ONE = 'FIND_RECIPE',
    UPDATE = 'UPDATE_RECIPE',
    DELETE = 'DELETE_RECIPE',
    ADD_COMMENT = 'ADD_COMMENT'
}
