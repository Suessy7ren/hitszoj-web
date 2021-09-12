<template>
  <div>
    <v-container class="main-cols-wrapper">
      <v-row class="my-6">

        <v-col cols="12" sm="9">
          <v-card
              class="mb-13 pb-4"
              outlined
              elevation="0"
          >
            <div
                v-for="(blog, index) in blogs"
                v-bind:key="index"
                class="blog-item pt-3"
            >
              <v-row class="py-4 mx-2">
                <v-col cols="12">
                  <div class="mb-3">
                    <span class="text-subtitle-1 grey--text mr-3">{{ blog.author }}</span>
                    <span class="text-subtitle-1 grey--text mr-3">{{ blog.createTime }}</span>
                    <span>
                      <v-chip
                          v-for="(tag, index) in blog.tags" v-bind:key="index"
                          class="ml-2"
                          @click="() => {}"
                          outlined
                          label
                          small
                      >
                        {{ tag.name }}
                      </v-chip></span>
                  </div>
                  <div class="text-h5">
                    <a class="blog-title">{{ blog.title }}</a>
                  </div>

                  <div class="mb-1 mt-4">
                    <div>{{ blog.digest }}</div>
                  </div>
                </v-col>
              </v-row>
              <v-divider class="mx-2" v-if="index != blogs.length - 1"/>
            </div>


          </v-card>
        </v-col>

        <v-col cols="0" sm="3">
          <v-card
              max-width="300"
              elevation="0"
              outlined
              flat
          >
            <v-card-subtitle>
              <v-icon class="mr-2" small>mdi-tag</v-icon>
              标签
            </v-card-subtitle>
            <v-divider/>
            <div class="px-2 py-1">
              <span v-for="(tag, index) in tags" v-bind:key="index">
              <v-chip
                  class="mx-1 my-2 text-caption"
                  outlined
              >
                {{ tag.name }}
              </v-chip>
            </span>
            </div>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "StuArticle",
  data() {
    return {
      blogs: [
        {
          title: '单调栈的用法',
          bannerPicture: 'https://coiggahou.gitee.io/cjpark/img/data_structure.png',
          digest: '本文介绍数据结构中单调栈的用法',
          author: 'Euphonium',
          createTime: '2020-09-11',
          tags: [
            {
              name: '栈'
            },
            {
              name: '单调栈'
            }
          ]
        },
        {
          title: '最短路算法总结',
          digest: '介绍 Dijkstra, SPFA 等多种最短路算法',
          author: 'Alston',
          createTime: '2021-10-10',
          tags: [
            {
              name: '图论'
            },
            {
              name: '最短路'
            },
            {
              name: '算法'
            }
          ]
        }
      ],
      tags: [
        {
          name: '栈',
        },
        {
          name: '队列'
        },
        {
          name: '最短路'
        },
        {
          name: '链表'
        },
        {
          name: '双指针'
        },
        {
          name: '并查集'
        },
        {
          name: '字符串'
        }
      ]
    }
  }
}
</script>

<style scoped>

.main-cols-wrapper {
  max-width: 1200px;
}

.blog-item:hover {
  background-color: rgb(252, 252, 252);
}

.blog-title {
  color: #000
}

.blog-title:hover {
  color: rgb(33,130,243);
}
</style>