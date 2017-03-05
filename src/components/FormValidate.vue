<style></style>
<template>
    <div class="form">
        <!--普通表单验证-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
                <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>

        <!--自定义表单验证-->
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>

        <!--自己写一个表单 并具有自定义验证 一个用户信息列表-->
        <el-form :model="myRuleForm" :rules="myRules" ref="myRuleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="myRuleForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio class="radio" v-model="myRuleForm.sex" label="1">男</el-radio>
                <el-radio class="radio" v-model="myRuleForm.sex" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input type="text" v-model="myRuleForm.age" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input type="text" v-model="myRuleForm.phone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('myRuleForm')">提交</el-button>
                <el-button @click="resetForm('myRuleForm')">重置</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>
<script>
    export default {
        name: 'FormValidate',
        data() {
            // 自定义函数有5个参数 这里是采用的三个参数 第一个为验证字段 第二个为值 第三个为回调函数
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    //值为空的时候 触发回调函数 抛出显示的错误内容
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            // 验证通过是 直接执行回调函数
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            // 自定义验证用户年龄
            let myRuleAgeValidate = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }

                if (!Number(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'));
                    } else {
                        // 验证通过是 直接执行回调函数
                        callback();
                    }
                }

            };
            let myRulePhoneValidate = (rule, value, callback) => {
                let reg = /^\d{11}$/
                if (!reg.test(value)) {
                    return callback(new Error('请输入正确的手机格式'));
                } else {
                    // 验证成功必须要执行回调函数
                    callback();
                }

            }
            return {
                myRuleForm: {
                    name: '',
                    sex: '1',
                    phone: ''
                },
                myRules: {
                    name: [{ required: true, message: '请输入用户名' }],
                    age: [{ validator: myRuleAgeValidate, trigger: 'blur' }],
                    phone: [{ validator: myRulePhoneValidate, trigger: 'blur' }]
                },
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                },
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules2: {
                    // 自定义验证 自带验证方式不同的是 通过对象的 validator 指定验证的函数 validatePass
                    // 用自定义的函数 去验证表单的内容
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                //验证表单元素的所有信息 传入一个回调函数 
                console.log('asdasd');
                this.$refs[formName].validate((valid) => {
                    // 验证通过 值为true 执行 submit事件
                    console.log(valid);
                    if (valid) {
                        alert('submit!');
                    } else {
                        // 验证不通过 执行错误时的函数
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                // 清除表单元素的内容
                this.$refs[formName].resetFields();
            }
        }
    }

</script>