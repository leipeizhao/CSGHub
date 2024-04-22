export const application_spaces = {
  title: "应用空间",
  placeholder: "应用空间名字",
  name: "应用空间名称",
  nickname: "应用空间别名",
  namespaceName: "命名空间/应用空间名称",
  desc: "应用空间介绍",
  stoppedDesc: "此空间已被其所有者暂停。",
  sleepingDesc: "由于长时间未操作，该空间已进入休眠状态。",
  buildDesc: "应用空间正在构建中，请稍后",
  errorDesc: "应用空间运行错误，请查看日志",
  restart: "重启",
  wakeup: "唤醒",
  restartSpace: "重启应用空间",
  stop: "暂停",
  stopSpace: "暂停应用空间",
  toggleStatusSuccess: '更新成功，请等待 Space 状态切换',
  gradioGuide: {
    notice: '开始使用您的 gradio 应用空间！',
    noticeDesc: '应用空间创建成功！空间运行需要程序文件，请参考下面案例创建 app.py 文件。',
    cloneTitle: '克隆应用空间',
    createTitle: '创建 Gradio app.py 文件',
    submitTitle: '提交并推送',
    successNotes: '提交成功后，应用会部署运行在当前页面。',
    dependencyNotesTitle: '关于依赖：',
    dependencyNotes1: '您可以在版本库根目录下添加 requirements.txt 文件，以指定 Python 依赖项。',
    dependencyNotes2: '如果需要，也可以在版本库根目录下添加 packages.txt 文件，指定 Debian 依赖项。',
    dependencyNotes3: 'Gradio 软件包已预装，其版本在 README.md 文件的 sdk_version 字段中设置。',
    docNotesTitle: '关于文档：',
    docNotes1: '点击此处查看 gradio Spaces 的完整文档',
    useToken: '使用我的 token'
  },
  errorPage: {
    log: '日志',
    build: '构建',
    container: '控制台',
    errorAlert: '应用空间发布失败',
    errorAlertDesc: '代码运行失败，查看日志',
    showErrorLogs: '查看日志',
    startFailed: 'Space 启动失败',
    startSuccess: 'Space 启动成功'
  },
  new: {
    title: '新建应用空间',
    subTitle1: '应用空间是托管机器学习演示应用代码的 Git 仓库',
    subTitle2: '你可以使用不同的 SDK 构建应用空间',
    owner: '所有者',
    name: '空间名称',
    namePlaceholder: '2-70个字母数字_.-的字符串，_.-不能并列出现',
    nickname: '空间别名',
    nicknamePlaceholder: '请输入别名',
    description: '应用空间介绍',
    descriptionPlaceholder: '请输入简介',
    coverImage: '封面图片',
    coverImageDesc1: '点击上传，或将文件拖到此处',
    coverImageDesc2: '支持 PNG, JPG 格式，高宽比5:2，小于2M',
    sdk: '选择应用空间SDK',
    sdkDesc: '你可以Gradio作为你的空间。后续将开放 Streamlit、 Static、 Docker 等来托管应用。',
    cloudResource: '空间云资源',
    cloudResourceDesc1: '您可以随时在空间设置中切换到不同的空间云资源。',
    cloudResourceDesc2: '切换到付费资源后，将根据使用时长向您收取费用。',
    public: '公开',
    publicDesc: '任何互联网上的人都可以看到这个仓库。只有你（个人）或你所在组织的成员可以提交。',
    private: '私有',
    privateDesc: '只有你（个人）或你所在组织的成员可以看到并提交到这个仓库。',
    notes: '创建应用空间后，你可以使用网页或 Git 上传你的文件。',
    create: '创建应用空间',
    createSuccess: "应用空间创建成功",
    tip: "应用于应用空间路径，创建后不可更改" 
  },
  edit: {
    cloudResource: '空间云资源',
    cloudResourceDesc: '可切换到不同的空间云资源。切换到付费资源后，将根据使用时长向您收取费用。',
    currentCloudResource: '当前云资源',
    runningStatus: '运行状态',
    runningStatusDesc: '切换运行或关停应用空间',
    tips: "将会显示在应用空间列表页面中，选填",
    tips2: "一段关于应用空间的介绍，选填",
    changeVisibility: "修改应用空间可见性",
    statusText: "当前应用空间目前是",
    status: "状态",
    visibility: "应用空间可见性",
    del: "删除应用空间",
    delTips: "此操作",
    delTips2: "撤销，这将永久删除",
    delTips3: "应用空间仓库及其所有文件。",
    privateVis: "只有创建者或组织成员可见",
    publicVis: "任何人都可以看到此应用空间",
    confirmDel: "我已知晓,确认删除",
    privateInfo: "，仅创建者或者组织管理员可进行提交",
    publicInfo: "， 任何互联网上的人都可以看到此应用空间。",
    needName: "请先提供应用空间别名",
    needDesc: "请先提供应用空间介绍",
  },
  download: "下载应用空间",
  downloadSpace: "下载应用空间数据",
  app: "应用",
  status: {
    noAppfile: '待初始化',
    building: '构建中',
    deploying: '部署中',
    startup: '启动中',
    running: '运行中',
    sleeping: '待机中',
    stopped: '暂停中',
    buildingFailed: '构建失败',
    deployFailed: '部署失败',
    runtimeError: '运行报错'
  }
}