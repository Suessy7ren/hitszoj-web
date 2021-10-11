<template>
  <div class="px-3 py-3">
 
    <a-upload-dragger
        name="file"
        :file-list='fileList'
        :multiple="false"
        :action="uploadPath"
        @change="handleChange"
        :before-upload="beforeUpload"
        :data = "postData"
        style="width: 300px;"
        
    >
        <p>
        <v-icon large>mdi-cloud-upload</v-icon>
        </p>
        <p class="ant-upload-text">
        点击或拖动以上传文件
        </p>
        <p class="ant-upload-hint">
        将要提交的文件拖动到这里或手动选择文件
        </p>
    </a-upload-dragger>
    <br/>
    <a-button 
      type="primary" 
      >
      提交
    </a-button>

    



  </div>
</template>


<script>
//七牛上传插件
// import {generateUploadToken} from "@/api/token-generator";
// import * as qiniu from 'qiniu-js';
import {getToken } from '@/api/qiniu';
import {sendFiledata2Backend} from '@/api/data2backend'

export default {
  data(){
    return{
      uploadPath: 'http://upload-z2.qiniup.com', // 七牛云统一的上传地址
      postData:{
        token: '',
        key: 'test'
      }
    }
  },
  methods: {
    //选择上传文件
    processFileData(info){
      console.log("begin to transfer data to the back-end database")
      let data = {
        "account": "test2",//假学号，请修改
        // "lastModified": info.file.lastModified,
        // "uploadDate": info.file.lastModifiedDate.constructor(),// upload date
        "fileName": info.file.name,
        // "size": info.file.size,
        // "type": info.file.type,
        // "hash": info.file.response.hash,
        "path": info.file.response.key,
        // "state": "uploadSuccess"
      }
      console.log("key----------")
      console.log(info.file.response.key)
      return data
    },
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
        console.log("finish uploading")
        let data = this.processFileData(info)
        console.log(data)
        sendFiledata2Backend(data).then(res =>{
            console.log(res.data)
        })
      } else if (status === 'error') {
        console.log("error")
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload(file) {
      //限制大小
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
        return false;
      }

      //限制文件后缀
      // const isZip = file.type === 'zip';
      // if (!isZip) {
      //   this.$message.error('You can only upload zip file!');
      //   return false;
      // }

      let fileName = file.name;
      let account = "test2"; //假学号，请修改
      console.log("test file name")
      console.log(fileName)
      let path = "test/" + account +"/" + fileName

      // //跟后端联调用的token
      
      getToken(fileName, account, path).then(res =>{
        console.log(res.data)
        let uptoken = res.data.data
        console.log("upoken:")
        console.log(uptoken)
        this.postData.token = uptoken
        this.postData.key = path
      })

      // //生成七牛云上传策略
      // let policy = {};
      // const bucketName = 'hitszoj';
      // const deadline = Math.round(new Date().getTime() / 1000) + 3600;
      // policy.scope = bucketName;
      // policy.deadline = deadline;

      // // 生成七牛云上传token
      // const token = generateUploadToken(policy);
      // var uptoken = token
      // console.log("upoken:")
      // console.log(uptoken)

      // // 将token附带到请求的formData中

      // this.postData.token = uptoken
      // this.postData.key = path
    },
  },

}

</script>