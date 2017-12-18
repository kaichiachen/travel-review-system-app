import fetch from './fetch';


// user
export const loginReq = (username, pwd) => fetch(`user/?User.username=${username}&User.pwd=${pwd}`,
  {}, 'GET',
);
export const userRegister = userInfo => fetch('user/',
  userInfo, 'POST',
);
export const deleteUserReq = userid => fetch(`user/${userid}`,
  {}, 'DELETE',
);

export const userListReq = () => fetch('user',
  {}, 'GET',
);

// post
export const addDraftPostReq = postInfo => fetch('draftpost',
  {
    tile: postInfo.title,
    content: postInfo.content,
    submittime: postInfo.time,
    location: postInfo.location,
    author: postInfo.author,
  }, 'POST',
);

export const updateDraftPostReq = postInfo => fetch(`draftpost/${postInfo.id}`,
  {
    tile: postInfo.title,
    content: postInfo.content,
    posttime: postInfo.time,
    location: postInfo.location,
    submittime: postInfo.author,
  }, 'PUT',
);

export const deleteDraftPostReq = postid => fetch(`draftpost/${postid}`,
  {}, 'DELETE',
);

export const reviewPostListReq = () => fetch('reviewpost',
  {}, 'GET',
);

export const addReviewPostReq = postInfo => fetch('reviewpost',
  {
    tile: postInfo.title,
    content: postInfo.content,
    submittime: postInfo.time,
    location: postInfo.location,
    author: postInfo.author,
    count: 0,
    status: 0,
    reviewnum: 0,
  }, 'POST',
);

export const updateReviewPostReq = postInfo => fetch(`reviewpost/${postInfo.id}`,
  postInfo, 'PUT',
);

export const deleteReviewPostReq = postid => fetch(`reviewpost/${postid}`,
  {}, 'DELETE',
);

export const addPostReq = postInfo => fetch('post',
  postInfo, 'POST',
);

export const deletePostReq = postid => fetch(`post/${postid}`,
  {}, 'DELETE',
);

export const postListReq = () => fetch('post',
  {}, 'GET',
);

export const draftListReq = () => fetch('draftpost',
{}, 'GET',
);

export const deleteDraftReq = draftid => fetch(`draftpost/${draftid}`,
{}, 'DELETE',
);

// review
export const reviewListReq = () => fetch('review',
  {}, 'GET',
);

export const addReviewReq = (reviewInfo, postID, name) => fetch('review',
  {
    content: reviewInfo.content,
    ispass: reviewInfo.ispass,
    author: name,
    postid: postID,
  }, 'POST',
);

export const updateReviewReq = reviewInfo => fetch('review',
  reviewInfo, 'PUT',
);

export const deleteReviewReq = reviewid => fetch(`review/${reviewid}`,
  {}, 'DELETE',
);
