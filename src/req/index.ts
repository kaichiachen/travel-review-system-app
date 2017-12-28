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
    title: postInfo.title,
    content: postInfo.content,
    location: postInfo.location,
    author: postInfo.author,
    username: postInfo.username,
    tags: postInfo.tags
  }, 'POST',
);

export const updateDraftPostReq = postInfo => fetch(`draftpost/${postInfo.id}`,
  {
    title: postInfo.title,
    content: postInfo.content,
    location: postInfo.location,
    author: postInfo.author,
    username: postInfo.username,
    tags: postInfo.tags
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
    title: postInfo.title,
    content: postInfo.content,
    // submittime: postInfo.time,
    location: postInfo.location,
    author: postInfo.author,
    tags: postInfo.tags,
    submittime: postInfo.submittime,
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

export const zanListReq = () => fetch('zan',
  {}, 'GET',
);

export const addZanReq = postInfo => fetch('zan',
  {
    postid: postInfo.postid,
    zan: postInfo.zan,
    read: postInfo.read,
  }, 'POST',
);

export const updateZanReq = zanInfo => fetch(`zan/${zanInfo.zanid}`,
  {
    postid: zanInfo.id,
    zan: zanInfo.zan,
    read: zanInfo.read,
  }, 'PUT',
);

export const deleteZanReq = reviewid => fetch(`zan/${reviewid}`,
  {}, 'DELETE',
);
export const zanInfoReq = username => fetch(`zanInfo/?Zaninfo.username=${username}`,
  {}, 'GET',
);
export const addZanInfoReq = (postid, username) => fetch('zanInfo',
  {
    postid: postid,
    username: username,
  }, 'POST',
);
export const deleteZanInfoReq = zanInfoid => fetch(`zanInfo/${zanInfoid}`,
  {}, 'DELETE',
);