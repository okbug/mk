/**
 * 登录
 */
export const login = data => {
  return Promise.resolve({
    token: 'e2be9c23-10f5-4ae0-821e-835e2ca0cc41'
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return Promise.resolve({
    role: [
      {
        id: '1',
        title: '超级管理员'
      }
    ],
    _id: '612ba1cfdeac5b28b4324b3e',
    id: '612710a9ec87aa543c9c3420',
    username: 'super-admin',
    title: '超级管理员',
    avatar:
      'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
    permission: {
      menus: [
        'userManage',
        'roleList',
        'permissionList',
        'articleRanking',
        'articleCreate'
      ],
      points: [
        'distributeRole',
        'importUser',
        'removeUser',
        'distributePermission'
      ]
    }
  })
}
