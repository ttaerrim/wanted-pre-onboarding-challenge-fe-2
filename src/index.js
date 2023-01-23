/**
 * 할일
 * @typedef {Object} Todo
 * @property {number} id - 할일 id
 * @property {string} contents - 할일 내용
 * @property {boolean} completed - 할일 완료 여부
 * @property {string} category - 할일 카테고리
 * @property {array} [tags] - 할일 태그들
 */

/**
 * 할일 목록
 * @type {Todo[]}
 */

let todos = [
  {
    id: 1,
    contents: "React",
    completed: true,
    category: "coding",
    tags: ["frontend"],
  },
  {
    id: 2,
    contents: "JavaScript",
    completed: true,
    category: "coding",
    tags: ["frontend", "backend"],
  },
  {
    id: 3,
    contents: "TypeScript",
    completed: false,
    category: "coding",
    tags: ["frontend", "backend"],
  },
  { id: 4, contents: "Laundry", completed: false, category: "housework" },
];

/**
 * CREATE
 * @param {string} contents
 * @param {string} category
 * @param {array} [tags]
 * @returns {Todo}
 */
const create = (contents, category, tags) => {
  return {
    id: todos.length,
    contents,
    completed: false,
    category,
    tags,
  };
};

/**
 * READ
 * @param {number} [id]
 * @returns {Todo[]}
 */

const read = (id) => {
  if (id) {
    const targetTodo = todos.find((todo) => todo.id === id);
    return [targetTodo];
  }
  return todos;
};

/**
 * UPDATE TODO
 * @param {number} id
 * @param {string} [contents]
 * @param {boolean} [completed]
 * @param {string} [category]
 * @param {array} [tags]
 * @returns {Todo[]}
 */

const updateTodo = (id, contents, completed, category, tags) => {
  const targetTodo = todos.find((todo) => todo.id === id);
  if (contents) targetTodo.contents = contents;
  if (completed) targetTodo.completed = completed;
  if (category) targetTodo.category = category;
  if (tags) targetTodo.tags = tags;
  return todos;
};

/**
 * UPDATE Specific tag
 * @param {number} id
 * @param {any} targetTag
 * @param {any} changeTag

 * @returns {Todo[]}
 */

const updateTodoTag = (id, targetTag, changeTag) => {
  const targetTodo = todos.find((todo) => todo.id === id);
  if (!targetTodo.tags) return todos;
  const index = arr.indexOf(targetTag);
  if (index !== -1) {
    arr[index] = changeTag;
    return todos;
  } else {
    return todos;
  }
};

// DELETE
// 특정 할 일의 특정 태그를 삭제할 수 있다.
// 특정 할 일의 모든 태그를 제거할 수 있다.

/**
 * Delete Specific Todo
 * @param {number} id
 * @returns {Todo[]}
 */

const deleteTodo = (id) => {
  const todosWithoutIdTodo = todos.filter((todo) => todo.id !== id);
  todos = todosWithoutIdTodo;
  return todos;
};

/**
 * Delete All Todo
 * @returns {void}
 */
const deleteAllTodo = () => {
  todos = [];
};

/**
 * Delete Specific Tag
 * @param {number} id
 * @param {any} targetTag
 * @returns {Todo[]}
 */

const deleteSpecificTagInTodo = (id, targetTag) => {
  todos.map((todo) => {
    if (todo.id === id) {
      if (todo?.tags.includes(targetTag)) {
        const idx = todo.tags.indexOf(targetTag);
        if (idx > -1) todo.tags.splice(idx, 1);
      }
      return todos;
    }
  });
};

/**
 * Delete Specific Tag
 * @param {number} id
 * @returns {Todo[]}
 */

const deleteAllTagInTodo = (id) => {
  todos.map((todo) => {
    if (todo.id === id) {
      if (todo.hasOwnProperty("tags")) {
        delete todo.tags;
      }
      return todos;
    }
  });
};
