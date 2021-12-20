import request from '@/utils/request'

/**
 * 获取列表数据
 */
export const getArticleList = data => {
  return Promise.resolve({
    list: [
      {
        _id: '612ba1c5deac5b28b4324b3c',
        ranking: 12,
        title: '动态面包屑',
        author: 'super-admin',
        publicDate: '1636188374591',
        desc: '动态生**成的面包屑数据1的**&l'
      },
      {
        _id: '612ba1c5deac5b28b4324b39',
        ranking: 13,
        title: '权限验证',
        author: 'Sunday',
        publicDate: '1629099597000',
        desc: '页面权限、功能权限、动态权限、权限配置'
      },
      {
        _id: '616421ceeb09f845500f584b',
        ranking: 14,
        author: 'super-admin',
        title: '无标题',
        desc: '312321',
        publicDate: '1633952206648'
      },
      {
        _id: '612ba1c5deac5b28b4324b3d',
        ranking: 15,
        title: 'Tags View',
        author: 'Sunday',
        publicDate: '1629099597000',
        desc: '便签快捷导航功能'
      },
      {
        _id: '61768d3eeb09f845500f5852',
        ranking: 16,
        author: 'super-admin',
        title: 'helo',
        desc: '优先级第一的课程，希望学有所成！',
        publicDate: '1635159358368'
      },
      {
        _id: '6177b46feb09f845500f58a8',
        ranking: 17,
        author: 'super-admin',
        title: 'ddddd',
        desc: 'aaaasdsd\nffff\n\n\nad',
        publicDate: '1635234927226'
      },
      {
        _id: '617763ffeb09f845500f5855',
        ranking: 18,
        author: 'super-admin',
        title: '无标题',
        desc: '11111111111',
        publicDate: '1635214335977'
      },
      {
        _id: '61776c66eb09f845500f5856',
        ranking: 19,
        author: 'super-admin',
        title: '无标题',
        desc: '',
        publicDate: '1635216486039'
      },
      {
        _id: '6177b6d0eb09f845500f58ab',
        ranking: 20,
        author: 'super-admin',
        title: '无标题',
        desc: 'asfdsadfasdfas\nasd',
        publicDate: '1635235536232'
      },
      {
        _id: '61793160eb09f845500f58b4',
        ranking: 21,
        author: 'super-admin',
        title: '111',
        desc: '1111111111111',
        publicDate: '1635332448222'
      }
    ],
    total: 46,
    page: '1',
    size: '10'
  })
}

/**
 * 修改排序
 */
export const articleSort = data => {
  return request({
    url: '/article/sort',
    method: 'POST',
    data
  })
}

/**
 * 获取文章详情
 */
export const articleDetail = articleId => {
  return Promise.resolve({
    _id: '612ba1c5deac5b28b4324b3c',
    ranking: 12,
    title: '动态面包屑',
    author: 'super-admin',
    publicDate: '1636188374591',
    desc: '动态生**成的面包屑数据1的**&l',
    content:
      '<p>动态生**成的面包屑数据1的**</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>&lt;p&gt;M&lt;/p&gt;</code></pre></div>',
    __v: 0
  })
}

/**
 * 删除文章
 */
export const deleteArticle = articleId => {
  return request({
    url: `/article/delete/${articleId}`
  })
}

/**
 * 创建文章
 */
export const createArticle = data => {
  return request({
    url: '/article/create',
    method: 'POST',
    data
  })
}

/**
 * 编辑文章详情
 */
export const articleEdit = data => {
  return request({
    url: '/article/edit',
    method: 'POST',
    data
  })
}
