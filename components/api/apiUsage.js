import { getAxiosInstanceApi, getAxiosInstanceApiWithOutToken } from "./api";
import { cachiosInstance } from "./cacheApi";

export const getCategory = (callback) => {
    cachiosInstance.get(`/category`, {
        ttl: 300
    }).then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const postComments = (postId,callback) => {
    getAxiosInstanceApiWithOutToken().get(`/comment/${postId}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const newComment = (postId,data,callback) => {
    getAxiosInstanceApi().post(`/comment/${postId}`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const newReply = (commentId,data,callback) => {
    getAxiosInstanceApi().post(`/replyComment/${commentId}`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const auth = (data,callback) => {
    getAxiosInstanceApi().post(`/auth`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const resetPassword = (data,callback) => {
    getAxiosInstanceApi().post(`/resetPassword`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const newRegister = (data,callback) => {
    getAxiosInstanceApi().post(`/user/register`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const userLogin = (data,callback) => {
    getAxiosInstanceApi().post(`/user/login`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const userInfo = (callback) => {
    getAxiosInstanceApi().get(`/userInfo`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const updateUserInfo = (data,callback) => {
    getAxiosInstanceApi().put(`/userInfo`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const updateUserPassword = (data,callback) => {
    getAxiosInstanceApi().post(`/changePassword`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const contactUsApi = (data,callback) => {
    getAxiosInstanceApi().post(`/contactUs`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const userAvatar = (data,callback) => {
    getAxiosInstanceApi().post(`/userAvatar`,data)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const likePost = (postId,callback) => {
    getAxiosInstanceApi().put(`/likePost/${postId}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const dislikePost = (postId,callback) => {
    getAxiosInstanceApi().put(`/dislikePost/${postId}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const savePost = (postId,callback) => {
    getAxiosInstanceApi().post(`/savePost/${postId}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const deleteSavedPost = (postId,callback) => {
    getAxiosInstanceApi().delete(`/savePost/${postId}`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
export const deleteUserAvatar = (callback) => {
    getAxiosInstanceApi().delete(`/userAvatar`)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
            callback(false, error.response.data);
        })
};
