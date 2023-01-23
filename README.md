# Document Todo App With JSDoc

https://ttaerrim.github.io/todo-jsdoc/

## Introduce

- Use [JSDoc BoilerPlate](https://github.com/pocojang/jsdoc-boilerplate)

### CREATE

할 일 추가 (내용 required): `create`

### READ

- 모든 할 일을 조회 `read` with no parameter
- ID로 특정 할 일 조회 `read` with ID parameter

### UPDATE

- 특정 할 일 수정 `updateTodo`
- 특정 할 일의 특정 태그 수정 `updateTodoTag`

### DELETE

- ID로 특정 할 일 삭제 `deleteTodo`
- 모든 할 일 초기화 `deleteAllTodo`
- 특정 할 일의 특정 태그 삭제 `deleteSpecificTagInTodo`
- 특정 할 일의 모든 태그 삭제 `deleteAllTagInTodo`

### Install

```bash
npm install
or
yarn
```

### Build

```bash
npm run docs
or
yarn docs
```

#### Reference

- [jsdoc.app](https://jsdoc.app)
