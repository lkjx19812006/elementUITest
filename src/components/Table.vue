<style scoped>
    .demo-table-expand {
        font-size: 0;
    }
    
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
<template>
    <div class="table">
        <el-table :data="tableData" style="width: 80%; margin: 50px">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="type" label="类型">
                <template scope="scope">
                    <p> {{scope.$index + 1}}</p>
                    <p v-if=" scope.row.type === '资源'">
                        breedName: {{ scope.row.breedName }}
                    </p>
                    <p v-if=" scope.row.type === '活动'">
                        <a :href="scope.row.url" target="_blank">{{scope.row.url}}</a>
                    </p>
                    <!--<div slot="reference" class="name-wrapper">
                    <el-tag>{{ scope.row.name }}</el-tag>
                </div>-->
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--带展开列表的table-->
        <template>
            <el-table :data="tableData5" style="width: 80%; margin: 50px">
                <el-table-column type="expand">
                    <template scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="商品名称">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="所属店铺">
                                <span>{{ props.row.shop }}</span>
                            </el-form-item>
                            <el-form-item label="商品 ID">
                                <span>{{ props.row.id }}</span>
                            </el-form-item>
                            <el-form-item label="店铺 ID">
                                <span>{{ props.row.shopId }}</span>
                            </el-form-item>
                            <el-form-item label="商品分类">
                                <span>{{ props.row.category }}</span>
                            </el-form-item>
                            <el-form-item label="店铺地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="商品描述">
                                <span>{{ props.row.desc }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="商品 ID" prop="id">
                </el-table-column>
                <el-table-column label="商品名称" prop="name">
                </el-table-column>
                <el-table-column label="描述" prop="desc">
                </el-table-column>
            </el-table>
        </template>
        <!--texts属性设置文字-->
        <span class="demonstration">texts属性设置文字</span>
        <el-rate v-model="value3" show-text :texts="texts">
            
        </el-rate>
    </div>
</template>

<script>
    export default {
        name: 'myTable',
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    type: '资源',
                    breedName: '三叶草',
                    url: ''
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    type: '活动',
                    breedName: '',
                    url: 'http://www.baidu.com'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    type: '资源',
                    breedName: '三叶草',
                    url: ''
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    type: '活动',
                    breedName: '',
                    url: 'http://www.baidu.com'
                }],
                tableData5: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }],
                value3: null,
                texts:['一般','还行','一般','还行','极好']
            }
        },
        methods: {
            handleEdit(index, obj) {
                console.log(index, obj);
            },
            handleDelete(index, obj) {
                console.log(index, obj);
            }
        }
    }

</script>