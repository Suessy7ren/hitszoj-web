<template>
  <div class="px-3 py-3">
    <a-upload-dragger
    :file-list="fileList" 
    :remove="handleRemove" 
    :before-upload="beforeUpload"
    style="width: 300px;"
    >
    <p>
    <v-icon large>mdi-cloud-upload</v-icon>
    </p>
    <p class="ant-upload-text">
    点击或拖动以上传文件
    </p>
    <p class="ant-upload-hint">
    您只能够提交一个文件
    </p>
    </a-upload-dragger>
    <a-button
      type="primary"
      :disabled="fileList.length === 0 || fileList.length > 1"
      :loading="uploading"
      style="margin-top: 16px;"
      @click="handleUpload"
    >
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    </a-button>
  </div>
</template>
<script>
import * as qiniu from "qiniu-js";
// import {getToken } from '@/api/qiniu';
import {generateUploadToken} from "@/api/token-generator";
export default {
  data() {
    return {
      fileList: [],
      uploading: false,
      token: "",
      key: "",

    };
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      return false;
    },
    isCompressed(ext){
      //请自行补充后缀
      return [
        'zip', 'rar', 'tar', '7z',].
        indexOf(ext.toLowerCase()) !== -1;
    },
    handleUpload() {
      const { fileList } = this;
      let file = fileList[0]//限定了只有一个文件
      this.uploading = true;

      //限制文件大小
      const isLt2M = file.size / 1024 / 1024 < 2;
      if(!isLt2M){
        this.$message.error("文件大小必须小于2MB");
        this.uploading = false;
        return false;
      }
      let fileName = file.name;
      //限制文件格式

      var index= fileName.lastIndexOf(".");
      var ext = fileName.substr(index+1);
      if(!this.isCompressed(ext)){
        this.$message.error("请上传zip/rar/tar/7z格式的文件");
        this.uploading = false;
        return false;
      }

      /*
      变量定义：
      1、filename: 文件名
      2、accout: 学号
      3、path: 存储路径
       */

      
      let account = "19011" //假学号，请自行修改
      let path = "test/" + account + "/" + fileName //假路径，请自行修改

      //获取token
      // getToken(fileName, account, path).then(res =>{
      //   this.token = res.data.data;
      //   this.key = path;
      // })

      //测试用，实际应用请删除，前端手动生成token
      let policy = {};
      const bucketName = 'hitszoj';
      const deadline = Math.round(new Date().getTime() / 1000) + 3600;
      policy.scope = bucketName;
      policy.deadline = deadline;

      this.token = generateUploadToken(policy);
      this.key = path
      //实际使用请删除以上部分

      //上传时的配置
      let config = {
        useCdnDomain: true,//是否使用cdn加速域名
      }

      //设置文件的配置
      let putExtra = {
        fname: '',
        params:{},
        mimeType: null
      }

      //实例化七牛云上传实例
      var key = this.key;
      var token = this.token
      const observable = qiniu.upload(file, key, token, putExtra, config)
      
      let _this = this

      //设置实例监听
      const observer = {
        next(res){
          //当前上传的百分比
          console.log(res.total.percent)
        },
        error(err){
          // 错误
          console.log(err)
          _this.$message.error("上传失败，请重新上传");
          _this.uploading = false;
          return false;
        },
        complete(res){
          // 上传成功
          
          _this.fileList = []
          _this.$message.success("上传成功");
          _this.uploading = false;
          return res;
        }
      }

      //开始上传
      observable.subscribe(observer);
    },
  },
};
</script>
