/**
 * js 文件下载
 *
 * DownloadHelper.js
 * import downloadHelper from './DownloadHelper';
 */

/**
 * http文件下载
 *
 * use：
 * downloadHelper.downloadUrl(response.data);
 *
 * @param url
 */
const downloadUrl = url => {
    let iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    iframe.onload = function () {
        document.body.removeChild(iframe)
    };
    document.body.appendChild(iframe)
};

/**
 * 获取字节流文件
 *
 * use：
 * let blob = new Blob([response.data], {type: 'application/vnd.ms-excel'});
 * let fileName = '文件名称.csv';
 * downloadHelper.downFile(blob, fileName);
 *
 * @param blob
 * @param fileName
 */
function downFile(blob, fileName) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName);
    } else {
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
    }
}

export default {
    downloadUrl: downloadUrl,
    downFile: downFile
};