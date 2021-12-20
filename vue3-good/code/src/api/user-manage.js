import request from '@/utils/request'

/**
 * 获取用户列表数据
 */
export const getUserManageList = data => {
  return Promise.resolve({
    list: [
      {
        role: [
          {
            id: '1',
            title: '超级管理员'
          }
        ],
        _id: '612ba1cfdeac5b28b4324b3e',
        id: '612710a9ec87aa543c9c3420',
        openTime: '1433088000000',
        username: 'super-admin',
        mobile: '188xxxx0001',
        avatar:
          'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png'
      },
      {
        role: [
          {
            id: '2',
            title: '管理员'
          }
        ],
        _id: '612ba1cfdeac5b28b4324b3f',
        id: '612710a9ec87aa543c9c3421',
        username: 'admin',
        openTime: '1559318400000',
        mobile: '188xxxx0002',
        avatar:
          'https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg'
      }
    ],
    total: 1673,
    page: '1',
    size: '2'
  })
}

/**
 * 批量导入
 */
export const userBatchImport = data => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}

/**
 * 删除指定数据
 */
export const deleteUser = id => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}

/**
 * 获取所有用户列表数据
 */
export const getUserManageAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}

/**
 * 获取用户详情
 */
export const userDetail = id => {
  return Promise.resolve({
    role: [
      {
        id: '1',
        title: '超级管理员'
      }
    ],
    remark: ['超级管理员', 'BOSS'],
    experience: [
      {
        startTime: '1538323200000',
        endTime: '1551369600000',
        title: '慕课网',
        desc: '混合开发京东商城'
      },
      {
        startTime: '1614528000000',
        endTime: '1625068800000',
        title: '慕课网',
        desc: 'uni-app 开发企业级小程序'
      }
    ],
    _id: '612ba1cfdeac5b28b4324b3e',
    id: '612710a9ec87aa543c9c3420',
    openTime: '1433088000000',
    username: 'super-admin',
    title: '超级管理员',
    mobile: '188xxxx0001',
    avatar:
      'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
    gender: '男',
    nationality: '汉',
    address: '北京市朝阳区xx大道 11xx0 号 3 层',
    major: '在线职业教育平台',
    glory: '国内领先的线上 IT 教育品牌'
  })
}

/**
 * 获取指定用户角色
 */
export const userRoles = id => {
  return request({
    url: `/user-manage/role/${id}`
  })
}

/**
 * 分用户分配角色
 */
export const updateRole = (id, roles) => {
  return request({
    url: `/user-manage/update-role/${id}`,
    method: 'POST',
    data: {
      roles
    }
  })
}
