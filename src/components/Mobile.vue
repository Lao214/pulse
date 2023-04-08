<template>
  <div class="box">
    <!--头部-->
    <div class="header">
      <h1
        style="
          font-size: 0.9rem;
          color: #fff;
          line-height: 2.5rem;
          text-align: center;
        "
      >
        员工学习与发展调查
      </h1>
      <section class="tips">
        <div class="first">
          <div class="icon">
            <img src="../assets/test-header-1.svg" alt="" />
          </div>
          <div class="tip-text"><span>没有时间限制</span></div>
        </div>
        <div class="first">
          <div class="icon">
            <img src="../assets/test-header-2.svg" alt="" />
          </div>
          <div class="tip-text"><span>答案无对错之分</span></div>
        </div>
        <div class="first">
          <div class="icon">
            <img src="../assets/test-header-3.svg" alt="" />
          </div>
          <div class="tip-text"><span>无隐私泄漏风险</span></div>
        </div>
      </section>
    </div>
    <!--内容-->
    <div class="main">
      <fieldset
        v-for="(item, index) in questionAndOptions"
        :key="index"
        class="question"
      >
        <legend>
          <span>{{ item.text }}</span>
        </legend>
        <div class="group_option">
          <div class="radios">
            <span>
              <label class="container">
                <input
                  :checked="item.radio[0]"
                  type="checkbox"
                  value="-2"
                  @click="choose(index, 0, item)"
                />
                <div
                  :id="index + '-' + '0'"
                  class="checkmarks checkmark-1"
                ></div>
              </label>
            </span>
            <span>
              <label class="container">
                <input
                  :checked="item.radio[1]"
                  type="checkbox"
                  value="-1"
                  @click="choose(index, 1, item)"
                />
                <div
                  :id="index + '-' + '1'"
                  class="checkmarks checkmark-2"
                ></div>
              </label>
            </span>
            <span>
              <label class="container">
                <input
                  :checked="item.radio[2]"
                  type="checkbox"
                  value="0"
                  @click="choose(index, 2, item)"
                />
                <div
                  :id="index + '-' + '2'"
                  class="checkmarks checkmark-3"
                ></div>
              </label>
            </span>
            <span>
              <label class="container">
                <input
                  :checked="item.radio[3]"
                  type="checkbox"
                  value="1"
                  @click="choose(index, 3, item)"
                />
                <div
                  :id="index + '-' + '3'"
                  class="checkmarks checkmark-4"
                ></div>
              </label>
            </span>
            <span>
              <label class="container">
                <input
                  :checked="item.radio[4]"
                  type="checkbox"
                  value="2"
                  @click="choose(index, 4, item)"
                />
                <div
                  :id="index + '-' + '4'"
                  class="checkmarks checkmark-5"
                ></div>
              </label>
            </span>
          </div>
        </div>
        <div class="captions">
          <div class="text-green">完全同意</div>
          <div class="text-purple">完全不同意</div>
        </div>
      </fieldset>

      <fieldset class="question">
        <legend>
          <span>{{ scheduleDetails.openQuestion }}：</span>
        </legend>
        <div class="textarea-container">
          <textarea
            v-model="openQuestion"
            class="textarea"
            placeholder="感谢您的填写🙏"
          ></textarea>
        </div>
      </fieldset>
    </div>
    <!--用户信息-->
    <div class="infomation">
      <fieldset class="info">
        <legend>
          <span>您的工号：</span>
        </legend>
        <input
          v-model="answerForm.jobNo"
          class="info-input"
          type="text"
          placeholder="请输入您的工号"
        />
      </fieldset>
      <fieldset class="info">
        <legend>
          <span>您的姓名：</span>
        </legend>
        <input
          v-model="answerForm.realName"
          class="info-input"
          type="text"
          placeholder="请输入您的姓名"
        />
      </fieldset>

      <fieldset class="info">
        <legend>
          <span>您的性别：</span>
        </legend>
        <div class="info-option">
          <div class="left-option">
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseSex(1)"
                  />
                  <div
                    id="sexMan"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">男</div>
            </div>
          </div>
          <div class="right-option">
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseSex(0)"
                  />
                  <div
                    id="sexWoman"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">
                女&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="info">
        <legend>
          <span>您的年龄：</span>
        </legend>
        <div class="info-option">
          <div class="left-option">
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseAge(20)"
                  />
                  <div
                    id="age20"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">20岁及以下</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseAge(25)"
                  />
                  <div
                    id="age25"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">21-25岁</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseAge(30)"
                  />
                  <div
                    id="age30"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">26-30岁</div>
            </div>
          </div>
          <div class="right-option">
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseAge(35)"
                  />
                  <div
                    id="age35"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">31-35岁</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseAge(40)"
                  />
                  <div
                    id="age40"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">36-40岁</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseAge(45)"
                  />
                  <div
                    id="age45"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">41岁及以上</div>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="info">
        <legend>
          <span>您的学历：</span>
        </legend>
        <div class="info-option">
          <div class="left-option">
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseDegree(1)"
                  />
                  <div
                    id="degree1"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">小学及以下</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseDegree(2)"
                  />
                  <div
                    id="degree2"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">初中</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseDegree(3)"
                  />
                  <div
                    id="degree3"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">高中/职高</div>
            </div>
          </div>
          <div class="right-option">
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseDegree(4)"
                  />
                  <div
                    id="degree4"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">大专</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseDegree(5)"
                  />
                  <div
                    id="degree5"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">本科</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseDegree(6)"
                  />
                  <div
                    id="degree6"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">硕士及以上</div>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="info">
        <legend>
          <span>您的管理职：</span>
        </legend>
        <div class="info-option">
          <div class="left-option">
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseGrage(1)"
                  />
                  <div
                    id="grade1"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">无</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseGrage(2)"
                  />
                  <div
                    id="grade2"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">线组级</div>
            </div>
          </div>
          <div class="right-option">
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseGrage(3)"
                  />
                  <div
                    id="grade3"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">课理级</div>
            </div>
            <div class="option">
              <span>
                <label class="container">
                  <input
                    checked="checked"
                    type="checkbox"
                    @click="chooseGrage(4)"
                  />
                  <div
                    id="grade4"
                    class="checkmarks checkmark4"
                    style="height: 0.8rem; width: 0.8rem"
                  ></div>
                </label>
              </span>
              <div class="text-option">经理级以上</div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <!--底部-->
    <div class="footer">
      <button v-show="!loadingFlag" class="animated-button" @click="sumbit()">
        提 交
      </button>
      <div v-show="loadingFlag" class="spinner">
        <svg viewBox="25 25 50 50" class="circular">
          <circle
            stroke-miterlimit="10"
            stroke-width="3"
            fill="none"
            r="20"
            cy="50"
            cx="50"
            class="path"
          ></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import scheduleApi from "@/api/schedule";
import answerApi from "@/api/answer";

export default {
  data() {
    return {
      radio: true,
      loadingFlag: false,
      scheduleDetails: {},
      questions: [],
      questionAndOptions: [],
      answer: {},
      answerTags: {},
      ques: {},
      tags: [],
      answerForm: {},
      openQuestion: "",
      realName: "",
      jobNo: "",
      completeTime: 0,
      source: "",
      appId: "GSZDIv6rmA8d2LujhLa30g2",
    };
  },
  created() {
    this.getQuestion();
    // 计时器，完成时间
    this.timer = setInterval(() => {
      this.completeTime++;
      this.answerForm.completeTime = this.completeTime;
    }, 1000);
    // 获取系统类型
    this.getSystem();
    // 获取浏览器
    this.getBrowser();

    /* 相信数据begin */
    var test = window.location.href;
    let arr = test.split("?code=");
    this.code = arr[1];
    if (this.code) {
      setTimeout(() => {
        answerApi
          .getUserInfoByBelieve("code=" + this.code + "&appid=" + this.appId)
          .then((res) => {
            // console.log(this.code)
            this.source = "相信";
            this.answerForm.source = "相信";
            this.answerForm.jobNo = res.data.civetno;
            this.answerForm.realName = res.data.realname;
            if (res.data.civetno) {
              const form = {
                code: this.answerForm.jobNo,
                source: "相信",
              };
              this.view(form);
            }
          });
      }, 1000);
    }
    /* 相信数据end */

    /* 微信公众号begin */
    let arrGZH = test.split("?fromway=");
    let way = arrGZH[1];
    if (way === "wxoffacc") {
      // wxoffacc表示来自微信公众号
      this.source = "微信公众号";
      console.log(this.source);
      const form = {
        source: "微信公众号",
      };
      this.view(form);
    }
    /* 微信公众号end */
  },
  mounted() {
    // 获取富学宝典 信息
    setTimeout(() => {
      // console.log("1s")
      if (this.$jobNo) {
        // 确定来源 为 富学宝典
        this.source = "富学宝典";
        this.answerForm.source = "富学宝典";
        this.answerForm.jobNo = this.$jobNo;
        this.answerForm.realName = this.$realName;
        const form = {
          code: this.answerForm.jobNo,
          source: "富学宝典",
        };
        this.view(form);
      }
    }, 1000);

    setTimeout(() => {
      // console.log("1s")
      if (!this.source) {
        // 确定来源 为 富学宝典
        this.source = "其他";
        const form = {
          source: "其他",
        };
        this.view(form);
      }
    }, 1700);
  },
  methods: {
    view(form) {
      // 记录访问
      answerApi.addVisitor(form).then((res) => {});
    },
    getSystem() {
      var system = navigator.userAgent;
      this.ua = system;
      //判断android ios windows
      var android = system.indexOf("Android");
      var iphone = system.indexOf("iPhone");
      var ipad = system.indexOf("ipad");
      var windows = system.indexOf("windows");
      var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
      if (android !== -1) {
        console.log("Android");
        this.answerForm.os = "Android";
        // return 'android'
      }
      if (iphone !== -1 || ipad !== -1 || isMac) {
        console.log("ios");
        this.answerForm.os = "ios";
        // return 'ios'
      }
      if (windows !== -1) {
        console.log("windows");
        this.answerForm.os = "windows";
        // return 'windows'
      }
    },
    getBrowser() {
      var userAgent = navigator.userAgent;
      //取得浏览器的userAgent字符串
      //判断是否Opera浏览器
      if (userAgent.indexOf("Opera") > -1) {
        this.answerForm.browser = "Opera";
      }
      //判断微信浏览器
      else if (
        userAgent.indexOf("MicroMessenger") > -1 ||
        userAgent.indexOf("micromessenger") > -1
      ) {
        this.answerForm.browser = "MicroMessenger";
      }
      //判断是否是QQ浏览器
      else if (userAgent.indexOf("MQQBrowser") > -1) {
        this.answerForm.browser = "MQQBrowser";
      }
      //判断是否Edge浏览器
      else if (userAgent.indexOf("Edg") > -1) {
        this.answerForm.browser = "Edge";
      }
      //判断是否Firefox浏览器
      else if (userAgent.indexOf("Firefox") > -1) {
        this.answerForm.browser = "firefox";
      }
      // 判断是否是小米浏览器
      else if (userAgent.indexOf("MiuiBrowser") > -1) {
        this.answerForm.browser = "MiuiBrowser";
      }
      //判断是否Chrome浏览器
      else if (userAgent.indexOf("Chrome") > -1) {
        this.answerForm.browser = "Chrome";
      }
      //判断是否Chrome浏览器
      else if (userAgent.indexOf("360SE") > -1) {
        this.answerForm.browser = "360SE";
      }
      //判断是否Safari浏览器
      else if (userAgent.indexOf("Safari") > -1) {
        this.answerForm.browser = "Safari";
      }
      //判断是否IE浏览器
      else if (
        userAgent.indexOf("compatible") > -1 &&
        userAgent.indexOf("MSIE") > -1 &&
        !isOpera
      ) {
        this.answerForm.browser = "IE";
      } else if (userAgent.indexOf("Trident") > -1) {
        this.answerForm.browser = "IE";
      }
    },
    getQuestion() {
      var date = this.formatDate();
      console.log(date);
      scheduleApi.getQuestionBySchedule(date).then((res) => {
        if (res.data.code === 200) {
          this.scheduleDetails = res.data.data.question;
          this.answerForm.scheduleId = this.scheduleDetails.id;
          this.tags = this.scheduleDetails.tags.split("-");
          this.module = this.scheduleDetails.module.split("-");
          this.questions = JSON.parse(this.scheduleDetails.details);
          this.questions.forEach((element) => {
            const ques = {};
            ques["text"] = element;
            ques["radio"] = [true, true, true, true, true];
            this.questionAndOptions.push(ques);
          });
        }
      });
    },
    choose(index, radioIndex, row) {
      document
        .getElementById(index + "-" + radioIndex)
        .classList.replace("checkmarks", "checkmark");
      this.questionAndOptions[index]["radio"][radioIndex] =
        !this.questionAndOptions[index]["radio"][radioIndex];
      this.answer[row.text] = radioIndex + 1;
      this.answerTags[
        "第" +
          (index + 1) +
          "题" +
          "-" +
          this.module[radioIndex] +
          "-" +
          this.tags[radioIndex]
      ] = radioIndex + 1;
      this.questionAndOptions[index]["isChecked"] = true;
      console.log(this.questionAndOptions);
      console.log(this.answer);
      console.log(this.answerTags);
      if (!this.questionAndOptions[index]["radio"][radioIndex]) {
        for (
          var i = 0;
          i < this.questionAndOptions[index]["radio"].length;
          i++
        ) {
          if (i != radioIndex) {
            this.questionAndOptions[index]["radio"][i] = true;
            document
              .getElementById(index + "-" + i)
              .classList.replace("checkmark", "checkmarks");
          }
        }
      }
      document.getElementById(index + "-" + radioIndex).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      // document.getElementById((index+1) + '-' + radioIndex).scrollIntoView()
      // 取消选择
      // if(this.questionAndOptions[index]['radio'][radioIndex]) {
      // document.getElementById(index + '-' + radioIndex).classList.replace("checkmark","checkmarks")
      // }
    },
    chooseSex(sex) {
      this.answerForm["sex"] = sex;
      if (sex === 0) {
        document
          .getElementById("sexMan")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("sexWoman")
          .classList.replace("checkmarks", "checkmark");
      }
      if (sex === 1) {
        document
          .getElementById("sexMan")
          .classList.replace("checkmarks", "checkmark");
        document
          .getElementById("sexWoman")
          .classList.replace("checkmark", "checkmarks");
      }
    },
    chooseAge(age) {
      if (age === 20) {
        document
          .getElementById("age25")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age30")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age35")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age40")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age45")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age20")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["ageRange"] = "20岁及以下";
      } else if (age === 25) {
        document
          .getElementById("age20")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age30")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age35")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age40")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age45")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age25")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["ageRange"] = "21-25岁";
      } else if (age === 30) {
        document
          .getElementById("age20")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age25")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age35")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age40")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age45")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age30")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["ageRange"] = "26-30岁";
      } else if (age === 35) {
        document
          .getElementById("age20")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age25")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age30")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age40")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age45")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age35")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["ageRange"] = "31-35岁";
      } else if (age === 40) {
        document
          .getElementById("age20")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age25")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age30")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age35")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age45")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age40")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["ageRange"] = "36-40岁";
      } else if (age === 45) {
        document
          .getElementById("age20")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age25")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age35")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age40")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age30")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("age45")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["ageRange"] = "41岁及以上";
      }
    },
    chooseDegree(degree) {
      if (degree === 1) {
        document
          .getElementById("degree2")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree3")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree4")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree5")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree6")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree1")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["degree"] = "小学及以下";
      } else if (degree === 2) {
        document
          .getElementById("degree1")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree3")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree4")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree5")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree6")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree2")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["degree"] = "初中";
      } else if (degree === 3) {
        document
          .getElementById("degree1")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree2")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree4")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree5")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree6")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree3")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["degree"] = "高中/职高";
      } else if (degree === 4) {
        document
          .getElementById("degree1")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree2")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree3")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree5")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree6")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree4")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["degree"] = "大专";
      } else if (degree === 5) {
        document
          .getElementById("degree1")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree2")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree3")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree4")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree6")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree5")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["degree"] = "本科";
      } else if (degree === 6) {
        document
          .getElementById("degree1")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree2")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree3")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree4")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree5")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("degree6")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["degree"] = "硕士及以上";
      }
    },
    chooseGrage(grade) {
      if (grade === 1) {
        document
          .getElementById("grade2")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade3")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade4")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade1")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["grade"] = "无";
      } else if (grade === 2) {
        document
          .getElementById("grade1")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade3")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade4")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade2")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["grade"] = "课理级";
      } else if (grade === 3) {
        document
          .getElementById("grade1")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade2")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade4")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade3")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["grade"] = "线组级";
      } else if (grade === 4) {
        document
          .getElementById("grade1")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade2")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade3")
          .classList.replace("checkmark", "checkmarks");
        document
          .getElementById("grade4")
          .classList.replace("checkmarks", "checkmark");
        this.answerForm["grade"] = "经理级以上";
      }
    },
    sumbit() {
      this.loadingFlag = true;
      if (!this.answerForm.jobNo) {
        this.$message({
          type: "warning",
          message: "请填写工号",
        });
        this.loadingFlag = false;
      } else {
        for (var i = 0; i < this.questionAndOptions.length; i++) {
          if (!this.questionAndOptions[i].isChecked) {
            this.$message({
              type: "warning",
              message: "第" + (i + 1) + "题您还没选择答案，请选择答案",
            });
            this.loadingFlag = false;
            return;
          }
        }
        this.answerForm["answerData"] = JSON.stringify(this.answer);
        this.answerForm["tagsScore"] = JSON.stringify(this.answerTags);
        this.answerForm["openAnswer"] =
          this.scheduleDetails.openQuestion + ":" + this.openQuestion;
        answerApi.addAnswer(this.answerForm).then((res) => {
          if (res.data.code === 200) {
            this.$message({
              type: "success",
              message: "提交成功",
            });
            this.loadingFlag = false;
            clearInterval(this.timer);
            this.timer = null;
            this.$emit("sumbit");
          }
        });
      }
    },
    formatDate() {
      var date = new Date();
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.box {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* 头部样式 */
.header {
  height: 8rem;
  background-color: #576cbc;
}
.tips {
  height: 5rem;
  /* background-color: pink; */
}
.first {
  display: flex;
  height: 1.1rem;
  width: 9rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 0.6rem;
}
img {
  height: 0.9rem;
  width: 0.9rem;
  margin-left: 10px;
  padding-top: 0.1rem;
}
.tip-text {
  line-height: 0.6rem;
  font-size: 0.5rem;
  color: #576071;
  margin-left: 10px;
  padding-top: 0.3rem;
}
/* 内容样式 */
.question {
  text-align: center;
  /* margin-top: 5px; */
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-color: #e3e9f2;
}
legend {
  font-size: 0.6rem;
  font-weight: 600;
  color: #576071;
  line-height: 1.6rem;
  text-align: center;
  white-space: normal;
  padding-top: 20px;
}
.captions {
  display: flex;
  align-items: center;
  width: 10rem;
  margin: 10px auto;
  justify-content: space-between;
}
.text-green {
  display: inline-block;
  font-size: 0.5rem;
  margin-left: 9px;
  font-weight: 600;
  color: #19376d;
}
.text-purple {
  display: inline-block;
  font-size: 0.5rem;
  font-weight: 600;
  color: #576cbc;
  margin-right: 9px;
  /* margin-left: 4rem; */
  /* margin-left: 210px; */
}
/*圆形选框*/
.group_option {
  display: flex;
  justify-content: center;
}
.radios {
  display: flex;
  align-items: center;
  width: 9rem;
  justify-content: space-between;
}
/* Hide the default checkbox */
.container input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  /* display: flex; */
  cursor: pointer;
  font-size: 0.6rem;
  user-select: none;
  /* margin-right: 20px; */
}

/* Create a custom checkbox */
.checkmark {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  height: 0.6rem;
  width: 0.6rem;
  border: 4px solid #88619a;
  border-radius: 50%;
}

.checkmarks {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  height: 1.5rem;
  width: 1.5rem;
  border: 4px solid #88619a;
  border-radius: 50%;
  transition: ease-out 0.5s;
  box-shadow: inset 0 0 0 0 #88619a;
}
.checkmark-1,
.checkmark-2 {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  height: 1.5rem;
  width: 1.5rem;
  border: 4px solid #19376d;
  border-radius: 50%;
  transition: ease-out 0.5s;
  box-shadow: inset 0 0 0 0 #19376d;
}
.checkmark-3 {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  height: 1.5rem;
  width: 1.5rem;
  border: 4px solid #a5d7e8;
  border-radius: 50%;
  transition: ease-out 0.5s;
  box-shadow: inset 0 0 0 0 #a5d7e8;
}

.checkmark-4,
.checkmark-5 {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  height: 1.5rem;
  width: 1.5rem;
  border: 4px solid #576cbc;
  border-radius: 50%;
  transition: ease-out 0.5s;
  box-shadow: inset 0 0 0 0 #576cbc;
}

/* .checkmarks:hover {
  background-color: #008744;
  color: white;
  box-shadow: inset 0 -100px 0 0 rgb(118, 172, 118);
} */

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #fff;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: block;
}

/* Show the checkmark when checked */
/* .container input:checked ~ .checkmark:after  {
  display: none;
} */

/* 勾样式 */
.container .checkmark::after {
  left: 0.5rem;
  top: 0.1rem;
  width: 0.5rem;
  height: 0.9rem;
  border: solid #576071;
  border-width: 0 0.1rem 0.1rem 0;
  transform: rotate(45deg);
}

/* .container .checkmark-2:after {
  left: 0.4rem;
  top: 0.3em;
  width: 0.4em;
  height: 0.8em;
  border: solid seagreen;
  border-width: 0 0.1rem 0.1rem 0;
  transform: rotate(45deg);
}
.container .checkmark-3::after {
  left: 0.25rem;
  top: 0.2em;
  width: 0.3em;
  height: 0.6em;
  border: solid seagreen;
  border-width: 0 0.1rem 0.1rem 0;
  transform: rotate(45deg);
} */
.container .checkmark4:after {
  left: 0.22rem;
  top: 0rem;
  width: 0.25rem;
  height: 0.5rem;
  border: solid #576071;
  border-width: 0 0.1rem 0.1rem 0;
  transform: rotate(45deg);
}
/*输入框样式 */
.textarea-container {
  position: relative;
  margin: 20px 0;
}

.textarea {
  width: 9rem;
  padding: 10px;
  border: 2px solid #88619a;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  height: 150px;
}

.textarea:focus,
.textarea:hover {
  border-color: #777;
}
/*用户信息 */
.info {
  display: flex;
  text-align: center;
  padding: 10px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-color: #e3e9f2;
}
.info-input {
  display: flex;
  width: 9rem;
  padding: 10px;
  border: 2px solid #88619a;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 auto;
  /* resize: none; */
}
.info-option {
  display: flex;
  width: 9rem;
  margin: 0 auto;
  justify-content: space-between;
}
.text-option {
  font-size: 0.5rem;
  font-weight: 600;
  color: #88619a;
  /* vertical-align: bottom; */
  padding-top: 0.8rem;
  padding-left: 0.3rem;
}
.option {
  display: flex;
}

/* 提交按钮 */
.footer {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.animated-button {
  background-color: #88619a;
  border: none;
  color: #ffffff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  margin: 4px 2px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 5px;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}

.animated-button:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
}

.animated-button:hover:after {
  width: 210px;
  height: 200px;
  opacity: 1;
}

.animated-button:focus {
  outline: none;
}

.animated-button:active {
  transform: translateY(2px);
  box-shadow: none;
}

.spinner {
  --red: #33a474;
  --blue: #88619a;
  --green: #008744;
  --yellow: #ffa700;
  position: relative;
  width: 60px;
}

.spinner:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.circular {
  animation: rotate73451 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash0175 1.5s ease-in-out infinite,
    color7123 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate73451 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash0175 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color7123 {
  100%,
  0% {
    stroke: var(--red);
  }

  40% {
    stroke: var(--blue);
  }

  66% {
    stroke: var(--green);
  }

  80%,
  90% {
    stroke: var(--yellow);
  }
}
</style>