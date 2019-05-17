<template lang="html">
  <div class="">
    <Header/>
  <!-- head YDC end -->

  <!-- content YDC begin -->
    <section>
      <div class="ydc-content-slide ydc-body">
        <div class="ydc-page-content" style="overflow:hidden">
          <div class="ydc-reg-title">
            <ul class="clearfix">
              <li v-for="(reg,index) in steps" :key="index" class="ydc-reg-step" :class="reg_tab >= index ?'active':''">
                <em></em>
                <h3>{{reg}}</h3>
              </li>
            </ul>
          </div>
          <div class="ydc-reg-form clearfix">



            <form action="" v-if="reg_tab == 0">
              <div class="ydc-reg-form-group clearfix">
                <label>邮箱账号:</label>
                <div class="ydc-reg-form-input">
                  <input type="text" id="loginEmail" name="username" class="ydc-form-control" autocomplete="off" placeholder="账号通行证/邮箱">
                </div>
                <div class="ydc-reg-form-text">
                  <p>请填写账号邮箱，作为登录帐号。<br>没有账号邮箱？
                  <a href="#" @click="jiai()">立即注册>></a></p>
                  <!-- <router-link :to="{ name: 'login', params: {} }"></router-link> -->
                </div>
              </div>
              <div class="ydc-reg-form-group clearfix">
                <label>密码:</label>
                <div class="ydc-reg-form-input">
                  <input type="password" id="psd" name="username" class="ydc-form-control" autocomplete="off" placeholder="密码">
                </div>
                <div class="ydc-reg-form-text">
                  <p><a href="javascript:;">忘记密码？</a></p>
                </div>
              </div>
              <div class="ydc-reg-form-group">
                <div class="ydc-reg-form-button">
                  <a class="btn" type="submit" href="go-reg-username.html" >登录</a>
                </div>
              </div>
            </form>





            <form action="" v-if="reg_tab == 1">
              <div class="ydc-reg-form-class">
                <div class="ydc-reg-text-center">
                  <div v-for="(item,index) in items" :key="index" class="ydc-text-center-item">
                    <div class="ydc-text-item-list" @click="current_type=index">
                      <div class="ydc-text-item-list-title">
                        <div class="ydc-text-ab">
                          <input type="radio" name="rdo" class="rdolist" />
                          <label class="rdobox">
                            <span class="check-image" :class="current_type==index?'check-image':'unchecked'"></span>
                            <span class="radiobox-content"></span>
                          </label>
                        </div>
                        <div class="ydc-text-item-list-mt1">
                          <img :src="item.src" alt="">
                        </div>
                      </div>
                      <div class="ydc-text-item-list-text">
                        <h2>{{item.title}}</h2>
                        <p>{{item.text}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="ydc-reg-form-group">
                <div class="ydc-reg-form-button clearfix">
                  <a class="btn" href="#" @click="jiai()">下一步</a>
                </div>
              </div>
            </form>







            <form :action="SERVER + 'sql/form3'" v-if="reg_tab == 2"  ref="form3" method="post" enctype="multipart/form-data">
  						<div class="ydc-reg-form-class ydc-reg-form-reg">
  							<div class="ydc-reg-form-group clearfix">
  								<label>帐号名称:</label>
  								<div class="ydc-reg-form-input">
  									<input type="text" id="loginEmail" name="display_name" class="ydc-form-control" autocomplete="off" placeholder="" style="width:200px;">
  									<div class="ydc-reg-form-text">
  										<p>请输入2至14字的帐号名称</p>
  									</div>
  								</div>
  							</div>
                <div class="ydc-reg-form-group clearfix">
  								<label>帐号密码:</label>
  								<div class="ydc-reg-form-input">
  									<input type="password" id="psd" name="password" class="ydc-form-control" autocomplete="off" placeholder="">
  									<div class="ydc-reg-form-text">
  										<p>请输入2至14字的帐号简介</p>
  									</div>
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>帐号简介:</label>
  								<div class="ydc-reg-form-input">
  									<input type="text" id="psd" name="slogan" class="ydc-form-control" autocomplete="off" placeholder="">
  									<div class="ydc-reg-form-text">
  										<p>请输入2至14字的帐号简介</p>
  									</div>
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>帐号分类:</label>
  								<div class="ydc-reg-form-input">
  									<select name="catalog">
  										<option v-for="(cate,index) in cate_list" :key="index" :value="index">{{cate}}</option>
  									</select>
  								</div>
  								<div class="ydc-reg-form-text">
  									<p>请输入2至14字的帐号名称</p>
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>帐号图标:</label>
  								<div class="ydc-reg-form-input">
  									<input type="file" id="" name="icon" class="" autocomplete="off" placeholder="">
  									<div class="ydc-reg-form-text">
  										<p>选取至少160*160尺寸的图片。请勿上传二维码或其他推广性质图片作为图标。</p>
  									</div>
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>帐号描述:</label>
  								<div class="ydc-reg-form-input ydc-reg-form-input-width">
  									<textarea name="description">请详细描述您的帐号，30至120字</textarea>
  									<div class="ydc-reg-form-text">
  										<p>请输入2至14字的帐号名称</p>
  									</div>
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>已有内容渠道及链接:</label>
  								<div class="ydc-reg-form-input ydc-reg-form-input-width">
  									<textarea name="other_channels">请详细描述您的帐号，30至120字</textarea>
  									<div class="ydc-reg-form-text">
  										<p>例如已发布文章的网站地址、博客地址、微信号等，方便我们作为审核参考。</p>
  									</div>
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>已有内容渠道截图:</label>
  								<div class="ydc-reg-form-input">
  									<input type="file" id="file" name="username" class="" autocomplete="off" placeholder="">
  									<div class="ydc-reg-form-text">
  										<p>截图中必须包含个人账号名或昵称等信息,支持.jpg.png格式，大小不超过5M。</p>
  									</div>
  								</div>

  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>姓名:</label>
  								<div class="ydc-reg-form-input">
  									<input type="text" id="user1" name="name" class="ydc-form-control" autocomplete="off" placeholder="">
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>身份证号:</label>
  								<div class="ydc-reg-form-input clearfix">
  									<input type="text" id="user2" name="identify_number" class="ydc-form-control" autocomplete="off" placeholder="">
  									<div class="ydc-reg-form-text">
  										<p>帐号信息填写需真实有效，如发现虚假以及非个人真实信息导致帐号收益无法提取，责任由帐号个人承担</p>
  									</div>
  									<div class="ydc-warning-default fl" style="height:auto; font-size:12px;">
  										<p>提交本页信息后，使用当前账号登录客户端3.0版本<br>点击「我的」-「实名认证」进行实名认证。</p>
  									</div>
  								</div>

  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>所在城市:</label>
  								<div class="ydc-reg-form-input">
  									<select v-model="cur_pro" name="province">
  										<option v-for="(pro,index) in sheng" :key="index" :value="pro.id">{{pro.cityname}}</option>
  									</select>
  									<select v-model="cur_city" name="city">
  										<option v-for="(city,index) in citys" :value="city.id" :key="index">{{city.cityname}}</option>
  									</select>
  								</div>

  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>联系手机:</label>
  								<div class="ydc-reg-form-input">
  									<input type="text" id="user4" name="username" class="ydc-form-control" autocomplete="off" placeholder="">
  									<div class="ydc-reg-form-text">
  										<p>请输入手机号并验证</p>
  									</div>
  								</div>
  								<div class="ydc-reg-yzm">
  									<button>获取验证码</button>
  								</div>

  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>邮箱:</label>
  								<div class="ydc-reg-form-input">
  									<input type="text" id="user5" name="email" class="ydc-form-control" autocomplete="off" placeholder="" value="Haisen@qq.com">
  								</div>
  								<div class="ydc-reg-form-text">
  									<p>请使用自己日常使用邮箱便于接受相关信息</p>
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>QQ/微信号:</label>
  								<div class="ydc-reg-form-input">
  									<input type="text" id="user6" name="qq_wx" class="ydc-form-control" autocomplete="off" placeholder="">
  								</div>
  								<div class="ydc-reg-form-text">
  									<p>请输入常用QQ/微信号方便联系沟通</p>
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label>推荐人:</label>
  								<div class="ydc-reg-form-input">
  									<input type="text" id="user7" name="recommend_code" class="ydc-form-control" autocomplete="off" placeholder="">
  								</div>
  								<div class="ydc-reg-form-text">
  									<p>选填，若有网易员工推荐您入驻，请填写相应推荐码。</p>
  								</div>
  							</div>
  							<div class="ydc-reg-form-group clearfix">
  								<label></label>
  								<div class="ydc-reg-form-input ydc-reg-form-input-agreement">
  									<label><input type="checkbox" value="yes" id="agreement" checked=""> 我已经阅读并同意 <a href="agreement.html" target="_blank">《车讯号媒体开放平台注册协议》</a>。</label>
  								</div>
  							</div>
  						</div>
  						<div class="ydc-reg-form-group">
  							<div class="ydc-reg-form-button" style="margin-left:255px;">
  								<a class="btn btn-border fl" @click="reg_tab--">上一步</a>
  								<a class="btn fl" @click="submit_from()">提交申请</a>
  							</div>
  						</div>
  					</form>
          </div>
          <RightBanner/>
        </div>
      </div>
    <Footer/>
    </section>
  </div>
</template>

<script>
import Footer from '@/components/footer'
import Header from '@/components/Header'
import RightBanner from '@/components/rightBanner'
import mt1 from '../assets/images/icon/mt1.png'
import mt2 from '../assets/images/icon/mt2.png'
import mt3 from '../assets/images/icon/mt3.png'
import mt4 from '../assets/images/icon/mt4.png'

import {SERVER} from '@/config'
import {fetch_form} from '@/lib/fetch'
export default {
  data(){
    return{
      steps:['登录邮箱账号','选择帐号类别','填写媒体信息'],
      items:[
        {src: mt1,title:'媒体',text:'适合报纸、杂志、电视台、网站等以内容生产为主，有国家新闻出版广电总局认可资质的媒体机构申请。'}
        ,{src: mt2,title:'自媒体',text:'适合垂直领域专家、意见领袖、评论家等个人创作者或以内容生产为主的自媒体公司'}
        ,{src: mt3,title:'组织结构',text:'适合党政机关、事业单位和各类公共场馆、公益机构、学校'}
        ,{src: mt4,title:'企业',text:'适合企业、公司及其分支机构、旗下品牌等申请，品牌宣传，主要用于商业品牌推广等申请。'}
      ],
      reg_tab:0,
      current_type:-1,
      cate_list :[],
      sheng:[],
      citys:null,
      cur_pro:0,
      cur_city:1,
      SERVER
    }
  },
  async created(){
    // 分类 catelist
    {
      let res=await fetch(SERVER + 'api/catelist');
      let arr=await res.json();
      this.cate_list = arr;
    }
    // 省份
    {
      let res=await fetch(SERVER + 'sql/sheng');
      let arr=await res.json();
      this.sheng = arr;
      // 省份一查询完 就吧省份里面的第一个的 id给到 ccur——pro  显示第一个
      this.cur_pro = this.sheng[0].id;
    }
    // 城市
    {

      let res=await fetch(SERVER + `sql/city/${this.sheng[0].id}`);
        let arr=await res.json();
        this.citys = arr;

    }
  },
  components:{Footer,Header,RightBanner},
  methods:{
    jiai(){
      if(this.reg_tab > 0 && this.current_type == -1){
          alert('请选择账号类别');
      }else{
        this.reg_tab++
      }
    },
    async submit_from(){
      let json = await fetch_form(this.$refs.form3);
      console.log(json);
    }
  },
  watch:{
    async cur_pro(){
        let res= await fetch(SERVER + `sql/city/${this.cur_pro}`);
        let arr=await res.json();
        this.citys = arr;
        this.cur_city = arr[0].id;
    }
  }

}
</script>

<style lang="css" scoped>
</style>
