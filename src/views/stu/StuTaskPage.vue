<template>
 <div>
   <v-container id="main-view">
     <header class="text-h4 my-6">我的作业列表</header>
     <div
         v-for="(homework, index) in homeworks"
         v-bind:key="index"
     >
       <v-card
           outlined
           elevation="0"
           class="my-4"
       >
         <v-card-title>{{  homework.title }}</v-card-title>
         <v-card-subtitle>截止日期：{{  homework.deadline }}</v-card-subtitle>
         <v-card-actions class="mx-1">
           <v-chip small color="warning">进行中</v-chip>
           <v-spacer></v-spacer>
           <v-btn
               text
               @click="homework.showDetail = !homework.showDetail"
           >
             详情
             <v-icon>{{ homework.showDetail ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
           </v-btn>
         </v-card-actions>

         <v-expand-transition>
           <div v-show="homework.showDetail">
             <v-divider></v-divider>
             <div class="px-3 py-3">
               <a-upload-dragger
                   name="file"
                   :multiple="true"
                   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                   @change="handleChange"
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
             </div>
           </div>
         </v-expand-transition>
       </v-card>
     </div>
   </v-container>
 </div>
</template>

<script>
export default {
  name: "StuTaskPage",
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
  data () {
    return {
      homeworks: [
        {
          title: '线性表',
          deadline: '2021-09-01 23:59:59',
          showDetail: false
        },
        {
          title: '栈和队列',
          deadline: '2021-09-09 23:59:59',
          showDetail: false
        },
        {
          title: '最短路算法',
          deadline: '2021-12-01 23:59:59',
          showDetail: false
        }
      ]
    }
  }
}
</script>

<style scoped>
#main-view {
  max-width: 800px;
}
</style>