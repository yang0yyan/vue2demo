import axios from "axios";
import { Message } from "element-ui";

export class FileUtil {
  static imgType = ["jpg", "jpeg", "png", "gif", "tif", "tiff"];
  static docType = ["txt", "doc", "docx", "pdf", "ppt", "pptx", "xls", "xlsx"];
  static otherType = ["zip", "rar", "tar", "7z"];
  static appType = [];

  static imgMimeType = ["image/jpeg", "image/png", "image/gif", "image/tiff"];
  static docMimeType = [
    "text/plain",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  static otherMimeType = [
    "application/zip",
    "application/rar",
    "application/x-tar",
  ];
  static appMimeType = [];

  constructor() {}

  static {
    FileUtil.appType = new Array()
      .concat(FileUtil.imgType)
      .concat(FileUtil.docType)
      .concat(FileUtil.otherType);
    FileUtil.appMimeType = []
      .concat(FileUtil.imgMimeType)
      .concat(FileUtil.docMimeType)
      .concat(FileUtil.otherMimeType);
  }

  /**
   * 1.操作文件的工具（继续完善中……）
   *
   * 2.用于文件预览和下载
   * 3.在组件‘multiFileUpload’有使用，
   * 4.注意 预览服务地址 和 文件服务地址
   */

  /**
   * 是否是预览服务支持的预览格式
   *
   * @param filePath 文件服务中的文件路径
   */
  static canPreviewFile = (filePath) => {
    let fileType = filePath.slice(filePath.lastIndexOf(".") + 1);
    if (fileType) fileType = fileType.toLowerCase();
    return FileUtil.appType.includes(fileType);
  };

  /**
   * 预览文件
   *
   * @param filePath 文件服务中的文件路径
   */
  static previewFile = (filePath) => {
    var flieUrl = this.#fastDFSBaseLocation() + filePath;
    var url = this.#fileViewBaseUrl() + window.btoa(flieUrl);
    window.open(url, "_blank");
  };

  /**
   * 下载文件
   *
   * @param filePath 文件服务中的文件路径
   */
  static downloadFlie = (filePath, fileName) => {
    axios
      .get(this.#fastDFSBaseLocation() + filePath, { responseType: "blob" })
      .then((res) => {
        const blob = new Blob([res.data], {
          type: res.headers["content-type"],
        });
        var a = document.createElement("a");
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(a);
        a.click();
        body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((e) => {
        if (e.message) {
          Message.error(e.message);
        }
      });
  };

  // 文件服务
  static #fastDFSBaseLocation() {
    let baseUrl = "";
    if (process.env.NODE_ENV === "production") {
      baseUrl = "https://153.3.104.58:38088/ZdyDown";
    } else {
      baseUrl = "https://218.2.192.195:28088/ZdyDown";
    }
    return baseUrl;
  }

  // 预览服务
  static #fileViewBaseUrl() {
    let baseUrl = "";
    if (process.env.NODE_ENV === "production") {
      baseUrl = "https://153.3.104.58:38088/fileView/onlinePreview?url=";
    } else {
      baseUrl = "https://218.2.192.195:28088/fileView/onlinePreview?url=";
    }
    return baseUrl;
  }

  /**
     * 格式化文件数据
     * 专为multiFileUpload打造，
     * 生成数据格式：
     *  {
          'status': 'success',
          'name': '',
          'size': 0,
          'percentage': 100,
          'response': {
            'code': 200,
            'message': '成功',
            'data': ''
          }
     *  }
     *
     * @param filePath 文件服务中的文件路径
     */
  static setFileList = (nameList, pathList) => {
    if (!pathList || pathList.length === 0) return [];
    let fileList = [];
    pathList.forEach((item, index) => {
      var data = {
        status: "success",
        name: nameList[index],
        size: 0,
        percentage: 100,
        response: {
          code: 200,
          message: "成功",
          data: item,
        },
      };
      fileList.push(data);
    });
    return fileList;
  };
}
