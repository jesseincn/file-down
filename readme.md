# Installation

```bash
npm install file-down --save
```

# Usage

```javascript
import downloadHelper from './DownloadHelper';
```

```javascript
downloadHelper.downloadUrl(response.data);
```

```javascript
let blob = new Blob([response.data], {type: 'application/vnd.ms-excel'});
let fileName = 'filename.csv';
downloadHelper.downFile(blob, fileName);
```