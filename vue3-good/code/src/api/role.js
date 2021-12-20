/**
 * 获取所有角色
 */
export const roleList = () => {
  return Promise.resolve([
    {
      id: '1',
      title: '超级管理员',
      describe: '唯一账号，可以操作系统所有功能'
    },
    {
      id: '2',
      title: '管理员',
      describe: '由超管指定，可以为多个，协助超管管理系统'
    },
    {
      id: '3',
      title: '人事经理',
      describe: '主管人事相关业务'
    },
    {
      id: '4',
      title: '销售经理',
      describe: '主管销售相关业务'
    },
    {
      id: '5',
      title: '保安队长',
      describe: '主管安保相关业务'
    },
    {
      id: '6',
      title: '员工',
      describe: '普通员工'
    }
  ])
}

/**
 * 获取指定角色的权限
 */
export const rolePermission = roleId => {
  return Promise.resolve(['1', '1-1', '1-2', '1-3', '2', '2-1', '3', '4', '5'])
}

/**
 * 为角色修改权限
 */
export const distributePermission = data => {
  return Promise.resolve(null)
}
