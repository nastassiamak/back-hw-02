

//готовые данные для преиспользования в тестах

import {BlogBbType} from "../../src/db/blog-db-type";
import {DBType} from "../../src/db/db";
import {SETTINGS} from "../../src/setting";
import {fromUTF8ToBase64} from "../../src/global_middlewares/admin-middleware";
import {PostDBType} from "../../src/db/post-db-type";

export const codedAuth = fromUTF8ToBase64(SETTINGS.ADMIN)

export const createString = (length: number) => {
    let s =''
    for (let i = 1; i <= length; i++) {
        s += i % 10
    }
    return s;
}


export const blog1: BlogBbType = {
    id: new Date().toISOString() + Math.random(),
    name: 'name1',
    description: 'description1',
    websiteUrl: 'http://example.com',
} as const // dataset нельзя изменять

export const blog5: BlogBbType = {
    id: new Date().toISOString() + Math.random(),
    name: 'name5',
    description: 'description5',
    websiteUrl: 'http://example5.com',
} as const // dataset нельзя изменять

export const post1: PostDBType ={
    id: new Date().toISOString() + Math.random(),
    title: 't1',
    shortDescription: 's1',
    content: 'c1',
    blogId: blog1.id,
    blogName: 'n1'
}


export const dataset1: DBType = {
    blogs: [blog1],
    posts:[]
}

export const dataset2: DBType = {
    blogs: [blog1 , blog5],
    posts: [post1]
} as const //dataset нельзя изменять
