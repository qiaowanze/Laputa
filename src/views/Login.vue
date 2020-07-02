<template>
  <div class='login'>
    <div class="loginText">
      <span>登录</span>
    </div>
    <form>
      <div class="lable">
        <span>请输入你的邮箱账号\手机*</span>
        <input type="text" v-model.lazy='phoneNumber' @change="PhNb" />
      </div>
      <div class="lable">
        <span>请输入密码*</span>
        <input type="password" v-model.lazy="password" />
      </div>
      <div class="code">
        <div class="lable">
          <span>验证码*</span>
          <input type="text" v-model.lazy="codeKey" @change="code"/>
        </div>
        <div class="codeImg" @click="handleChangeCode()">
          <span>{{this.random}}</span>
        </div>
      </div>
      <div class='remberPw'>
        <van-checkbox v-model="checked" shape="square" icon-size="18px" @click="handleRemeber()">记住密码</van-checkbox>
        <span style="color:blue" @click="handleForget()">忘记密码?</span>
      </div>
      <div class="loginIN">
        <button @click="loginNow()">登录</button>
      </div>
    </form>
    <div class='Noaccount'>
      <span>还没有账号？</span>
      <span @click="handleRegister()" class="reger">注册</span>
    </div>
    <div class="otherLogin">
        <div class="otherway">其他登录方式</div>
        <!-- <a href="https://api.weibo.com/oauth2/authorize?client_id=4116565080&response_type=code&redirect_uri=https://www.skypixel.com/api/website/oauth/sina/callback">
          <div class="iconfont icon-icon-test72 sina"></div>
        </a> -->
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'
import { Checkbox, Toast } from 'vant'
Vue.use(Checkbox).use(Toast)
export default {
  data () {
    return {
      checked: false,
      phoneNumber: '',
      password: '',
      codeKey: '',
      random: Math.random().toString(36).substr(2, 4),
      a: false,
      b: false
    }
  },
  computed: {
    ...mapState('login', ['namePassword'])
  },
  methods: {
    ...mapMutations('login', ['setToken', 'setNamePassword']),
    PhNb () {
      var reg = /^1[3-9]\d{9}$/
      if (reg.test(this.phoneNumber)) {
        this.a = true
      } else {
        Toast.fail('格式不符,11位手机号码')
        this.a = false
      }
    },
    code () {
      if (this.codeKey === this.random) {
        this.b = true
      } else {
        this.b = false
        Toast.fail('验证码错误')
      }
    },
    handleRegister () {
      console.log('点击跳转注册页面')
      this.$router.push('/signup')
    },
    handleChangeCode () {
      this.random = Math.random().toString(36).substr(2, 4)
    },
    handleForget () {
      console.log('忘记密码')
    },
    handleRemeber () {
      console.log('是否记住密码', !this.checked)
    },
    loginNow () {
      if (this.a && this.b) {
        this.$axios({
          url: 'http://39.99.182.33/api/users/login',
          method: 'post',
          data: {
            tel: this.phoneNumber,
            password: this.password
          }
        }).then(res => {
          if (res.data.code === '10008') {
            Toast.success('登录成功，即将跳转主页')
            this.setToken({
              token: res.data.data.token,
              userId: res.data.data.userid
            })
            console.log(res)
            setTimeout(() => {
              this.$router.push('/')
            }, 1000)
            // 是否点击了保存密码
            if (this.checked) {
              if (this.namePassword.length === 0) {
                this.setNamePassword({
                  tel: this.phoneNumber,
                  password: this.password
                })
              } else {
                var temp = this.namePassword.some((val) => {
                  return val.tel === this.phoneNumber
                })
                console.log(temp)
                if (temp) {
                  console.log('此前已保存')
                } else {
                  this.setNamePassword({
                    tel: this.phoneNumber,
                    password: this.password
                  })
                }
              }
            }
          } else if (res.data.code === '10007') {
            Toast.fail('密码错误')
          } else if (res.data.code === '10006') {
            Toast.fail('手机号未注册')
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .login{
    box-sizing: border-box;
    padding: 1.2rem .8rem .8rem;
    .loginText{
      font: 900 2rem "";
      margin-bottom: .8rem;
    }
    .code{
      display: flex;
      justify-content: flex-start;
    }
    .lable{
      flex: 3;
      margin-bottom: .5rem;
      font-size: .6rem;
      color: #4b4b4b;
      line-height: .8rem;
      span{
        font-weight: 700;
        display: block;
        margin-bottom: .5rem;
      }
      input{
        box-sizing: border-box;
        width: 100%;
        background: #fff;
        font-weight: 400;
        padding: .6rem;
        border-radius: .2rem;
        border: .5px solid #dfdfdf;
        margin: 0;
      }
    }
    .codeImg{
      flex: 1;
      background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583428769002&di=b0d2f90134ef72a0e248c790eb0ee2f4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170919%2F4a396e47d2c94abda851d0e4778bc889.jpeg) no-repeat;
      margin-left: 0.5rem;
      height: 2.3rem;
      margin-top: 1.2rem;
      line-height: 2.3rem;
      text-align: center;
      span{
        font-size: 2rem;
      }
    }
    .remberPw{
      display: flex;
      justify-content: space-between;
      margin-top: .75rem;
      font-size: 0.6rem;
    }
    .loginIN{
      button{
        width: 100%;
        height: 2.5rem;
        background: #1088f2;
        color: white;
        border: 0;
        border-radius: .2rem;
        margin-top: 2rem;
      }
    }
    .Noaccount{
      text-align: center;
      margin-top: .4rem;
      color: #707473;
      font-size: 0.6rem;
      .reger{
        color: #1088f2;
      }
    }
    .otherLogin{
      height: 8rem;
      line-height: 1.5rem;
      color: #707473;
      font-size: .7rem;
      text-align: center;
      margin-top: 2rem;
      .otherway{
        height: 6rem;
        line-height: 6rem;
      }
    }
  }
</style>
