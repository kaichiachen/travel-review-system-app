export const setStore = (name, content) => {
  if (!name) return;
  let contents = '';
  if (typeof content !== 'string') {
    contents = JSON.stringify(content);
  } else {
    contents = content;
  }
  window.localStorage.setItem(name, contents);
};

export const getStore = (name) => {
  if (!name) return '';
  return window.localStorage.getItem(name);
};

export const removeStore = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

export const timeConverter = (UNIXtimestamp) => {
  const a = new Date(UNIXtimestamp * 1000);
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  // const hour = a.getHours();
  // const min = a.getMinutes();
  // const sec = a.getSeconds();
  const time = `${year}年${month}${date}日`;
  return time;
};

// export class TreeNode{
//   val = {}
//   left = TreeNode
//   right = TreeNode
//   constructor(){
//     this.val = null;
//     this.left = null;
//     this.right = null;
//   }
  
// }
const TreeNode = () => {
  this.val = null;
  this.left = null;
  this.right = null;
};

const sortListToBST = (postinfo) => {
  const middleIndex = parseInt((postinfo.length / 2).toString(), 0);
  const n = new TreeNode();
  n.val = postinfo[middleIndex];
  if (middleIndex === 0) {
    n.left = null;
  } else {
    n.left = sortListToBST(postinfo.slice(0, middleIndex));
  }
  if (middleIndex + 1 >= postinfo.length) {
    n.right = null;
  } else {
    n.right = sortListToBST(postinfo.slice(middleIndex + 1, postinfo.length));
  }
  return n;
};

/* eslint arrow-body-style: ["error", "always"] */
export const makeBST = (postinfo) => {
  return sortListToBST(postinfo.sort((a, b) => {
    return a.submittime > b.submittime;
  }));
};

export const displayBST = (postBST) => {
  if (postBST === null) {
    return;
  }
  displayBST(postBST.left);
  /* eslint no-console: ["error", { allow: ["debug"] }] */
  console.debug(postBST.val);
  displayBST(postBST.right);
};

const getPostList = (postList, postBST, searchtime) => {
  if (postBST === null) {
    return;
  }
  getPostList(postList, postBST.Left, searchtime);
  if (searchtime > postBST.time) {
    postList.push(postBST);
  }
  getPostList(postList, postBST.Right, searchtime);
};

// export const findPost = (postBST, searchtime, searchString) => {
//   const postList = [];
//   if (postBST === null) {
//     return [];
//   }
//   postList.push(...findPost(postBST.right, searchtime, searchString));
//   /* eslint no-console: ["error", { allow: ["debug"] }] */
//   if (searchtime <= postBST.val.submittime && (searchString === '' || searchString === postBST.val.title || searchString === postBST.val.location)) {
//     postList.push(postBST.val);
//   }
//   postList.push(...findPost(postBST.left, searchtime, searchString));
//   return postList;
// };

export const findPost = (postBST, searchtime) => {
  const postList = [];
  if (postBST === null) {
    return [];
  }
  postList.push(...findPost(postBST.right, searchtime));
  /* eslint no-console: ["error", { allow: ["debug"] }] */
  if (searchtime <= postBST.val.submittime) {
    postList.push(postBST.val);
  }
  postList.push(...findPost(postBST.left, searchtime));
  return postList;
};