<style lang="less" scoped>
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    
    .el-col {
        border-radius: 4px;
    }
    
    .bg-purple-dark {
        background: #99a9bf;
    }
    
    .bg-purple {
        background: #d3dce6;
    }
    
    .bg-purple-light {
        background: #e5e9f2;
    }
    
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        text-align:center;
        line-height: 36px;
    }
    
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
<template>
    <!--col offset是整体移动 push pull是单个移动-->
    <div>
        <el-row :gutter="100">
            <el-col :span="24"  icon="el-icon-caret-right" >
                <div class=" grid-content bg-purple-dark">
                    我占24份
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="100">
            <el-col :span="12" >
                <div class="grid-content bg-purple">
                    我占12份
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    我占12份
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="50">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    我占8份
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    我占8份
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    我占8份
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    我占6份
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    我占6份
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    我占6份
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    我占6份
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col  :offset="4" :span="4">
                <div class="grid-content bg-purple">
                    我占4份
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light">
                    我占4份
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    我占4份
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light">
                    我占4份
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    我占4份
                </div>
            </el-col>
            <!--<el-col :span="4" >
                <div class="grid-content bg-purple-light">
                    我占4份
                </div>
            </el-col>-->
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'layout',
        data() {
            return {
            }
        }
    }

</script>