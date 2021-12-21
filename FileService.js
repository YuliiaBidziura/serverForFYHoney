const { v4: uuid } = require('uuid')
const path = require('path')

class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePatch = path.resolve('static', fileName);
            file.mv(filePatch);
            return fileName;

        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new FileService();