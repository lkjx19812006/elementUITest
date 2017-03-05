<style>

</style>
<template>
    <div>
        <div class="block">
            <el-button icon="el-icon-caret-right">
                <!--系统自带标签 用样式控制-->
                <i class="el-icon-edit"></i> 默认按钮
            </el-button>
            <el-button icon="el-icon-caret-right" type="primary">
                <i class="el-icon-delete"></i> 主要按钮
            </el-button>
            <!--el框架标签 直接用名字就可以了-->
            <el-button icon="search" type="text">文字按钮</el-button>
            <el-button type="primary" icon="search">搜索</el-button>

            <!--带禁用标志的按钮 :disabled="true"-->
            <el-button :plain="true" :disabled="true">主要按钮</el-button>
            <el-button type="primary" :disabled="true">主要按钮</el-button>
            <el-button type="text" :disabled="false">文字按钮</el-button>
        </div>
        <!--带显示颜色按钮-->
        <div class="block">
            <span class="demonstration">默认显示颜色</span>
            <span class="wrapper">
                <el-button type="success">成功按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info">信息按钮</el-button>
            </span>
        </div>
        <!--hover变色按钮-->
        <div class="block">
            <span class="demonstration">hover 显示颜色</span>
            <span class="wrapper">
                <el-button :plain="true" type="success">成功按钮</el-button>
                <el-button :plain="true" type="warning">警告按钮</el-button>
                <el-button :plain="true" type="danger">危险按钮</el-button>
                <el-button :plain="true" type="info">信息按钮</el-button>
            </span>
        </div>
        <!--带图标按钮-->
        <div class="block">
            <el-button type="primary" icon="edit"></el-button>
            <el-button type="primary" icon="share"></el-button>
            <el-button type="primary" icon="delete"></el-button>
            <el-button type="primary" icon="search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
        <!--按钮组-->
        <div class="block">
            <el-button-group>
                <el-button type="primary" icon="arrow-left">上一页</el-button>
                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
            <el-button-group>
                <el-button type="primary" icon="edit"></el-button>
                <el-button type="primary" icon="share"></el-button>
                <el-button type="primary" icon="delete"></el-button>
            </el-button-group>
        </div>
        <!-- 加载按钮 -->
        <div class="block">
            <!--:loading="true"按钮禁用状态 false 按钮激活状态-->
            <el-button type="primary" :loading="true">加载中...</el-button>
        </div>
        <!--按钮尺寸-->
        <div class="block">
            <el-button type="primary" size="large">大型按钮</el-button>
            <el-button type="primary">正常按钮</el-button>
            <el-button type="primary" size="small">小型按钮</el-button>
            <el-button type="primary" size="mini">超小按钮</el-button>
        </div>
        <!--原生按钮种类-->
        <div class="block">
            <el-button type="primary" native-type="submit" > 提 交 </el-button>
            <el-button type="primary" native-type="button" > 按 钮 </el-button>
            <el-button type="primary" native-type="reset" > 重 置 </el-button>           
        </div>
        
    </div>
</template>
<script>
    export default {
        name: 'Button',
        data() {
            return {
            }
        }
    }

</script>