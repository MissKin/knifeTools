<template>
  <div>
    <p v-for="(item, index) in list" :key="index">{{item.label}}

      <p v-for="(two, index2) in twolist" :key="index2">{{two.label}}</p>
    </p>
    {{twolist}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [{
          label: '栏目一',
          name: 'one',
          children: [
            {
              'label': '栏目二二',
              'name': '201',
              'conact': ['203', '205', '206'],  // x相关的二级类目的 name值
              'children': [
                {
                  'label': '栏目三',
                  'name': '301',
                  'previewUrl': 'https'
                },
                {
                  'label': '栏目三',
                  'name': '302',
                  'previewUrl': 'https'
                },
                {
                  'label': '栏目三',
                  'name': '303',
                  'previewUrl': 'https'
                }
              ]
            },
            {
              'label': '栏目二二',
              'name': '202',
              'conact': ['203', '205', '207'],  // x相关的二级类目的 name值
              'children': [
                {
                  'label': '栏目三',
                  'name': '311',
                  'previewUrl': 'https'
                },
                {
                  'label': '栏目三',
                  'name': '312',
                  'previewUrl': 'https'
                },
                {
                  'label': '栏目三',
                  'name': '313',
                  'previewUrl': 'https'
                }
              ]
            }
          ]
        }]
      }
    },
    computed: {
      twolist () {
        return this.list.children
      }
    }
  }
</script>
