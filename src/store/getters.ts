const getters = {
    sidebar: (state:any) => state.app.sidebar,
    device: (state:any) => state.app.device,
    token: (state:any) => state.user.token, // 建立token的快捷访问
    name: (state:any) => state.user.userInfo.username, // 建立用户名的快捷访问
    userId: (state:any) => state.user.userInfo.userId,
    staffPhoto: (state:any) => state.user.userInfo.staffPhoto, // 建立头像的快捷访问
    companyId: (state:any) => state.user.userInfo.companyId, // 建立头像的快捷访问
    routes: (state:any) => state.permission.routes // 建立权限模块下的快捷访问
  }
  export default getters
  