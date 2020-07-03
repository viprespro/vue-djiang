<template>
  <div id="details-video">
    <!-- Header组件 -->
    <Header></Header>
    <!-- 视频插件 -->
    <div class="details-video-content clearfix">
      <!-- 三级标题区域 start -->
      <!-- {{id}} -->
      <div class="layout-wrapper">
        <div class="layout phone-none">
          <div class="c1-wrapper">
            <div class="c1">
              <breadCrumbNav></breadCrumbNav>
            </div>
          </div>
        </div>
      </div>
      <!-- 三级标题区域 end -->
      <!-- 内容左右块 -->
      <div class="layout-wrapper mx-video-skin">
        <div class="layout r-75-25 clearfix">
          <div class="c1-wrapper">
            <div class="c1">
              <!-- 主要视频区域 start -->
              <div class="mx-media-n mx-m">
                <!-- 视频容器部分 start -->
                <div ref="my-player" class="dplayer dplayer-no-danmaku dplayer-paused">
                  <div class="dplayer-mask"></div>
                  <div class="dplayer-video-wrap">
                    <video
                      class="dplayer-video dplayer-video-current"
                      webkit-playsinline
                      x-webkit-airplay="allow"
                      playsinline
                      poster="https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png"
                      crossorigin="anonymous"
                      preload="auto"
                      src
                    >
                      <track
                        kind="metadata"
                        default
                        src="https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.vtt"
                      />
                    </video>
                    <div class="dplayer-danmaku">
                      <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
                    </div>
                    <div class="dplayer-subtitle"></div>
                    <div class="dplayer-bezel">
                      <span class="dplayer-bezel-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32">
                          <path
                            d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"
                          />
                        </svg>
                      </span>

                      <span class="diplayer-loading-icon">
                        <svg version="1.1" viewBox="0 0 22 22">
                          <svg x="7" y="1">
                            <circle
                              class="diplayer-loading-dot diplayer-loading-dot-0"
                              cx="4"
                              cy="4"
                              r="2"
                            />
                          </svg>
                          <svg x="11" y="3">
                            <circle
                              class="diplayer-loading-dot diplayer-loading-dot-1"
                              cx="4"
                              cy="4"
                              r="2"
                            />
                          </svg>
                          <svg x="13" y="7">
                            <circle
                              class="diplayer-loading-dot diplayer-loading-dot-2"
                              cx="4"
                              cy="4"
                              r="2"
                            />
                          </svg>
                          <svg x="11" y="11">
                            <circle
                              class="diplayer-loading-dot diplayer-loading-dot-3"
                              cx="4"
                              cy="4"
                              r="2"
                            />
                          </svg>
                          <svg x="7" y="13">
                            <circle
                              class="diplayer-loading-dot diplayer-loading-dot-4"
                              cx="4"
                              cy="4"
                              r="2"
                            />
                          </svg>
                          <svg x="3" y="11">
                            <circle
                              class="diplayer-loading-dot diplayer-loading-dot-5"
                              cx="4"
                              cy="4"
                              r="2"
                            />
                          </svg>
                          <svg x="1" y="7">
                            <circle
                              class="diplayer-loading-dot diplayer-loading-dot-6"
                              cx="4"
                              cy="4"
                              r="2"
                            />
                          </svg>
                          <svg x="3" y="3">
                            <circle
                              class="diplayer-loading-dot diplayer-loading-dot-7"
                              cx="4"
                              cy="4"
                              r="2"
                            />
                          </svg>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="dplayer-controller-mask"></div>
                  <div class="dplayer-controller">
                    <div class="dplayer-icons dplayer-comment-box">
                      <button
                        class="dplayer-icon dplayer-comment-setting-icon"
                        data-balloon="设置"
                        data-balloon-pos="up"
                      >
                        <span class="dplayer-icon-content">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 32 32"
                          >
                            <path
                              d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"
                            />
                          </svg>
                        </span>
                      </button>
                      <div class="dplayer-comment-setting-box">
                        <div class="dplayer-comment-setting-color">
                          <div class="dplayer-comment-setting-title">设置弹幕颜色</div>
                          <label>
                            <input type="radio" name="dplayer-danmaku-color-0" value="#fff" checked />
                            <span style="background: #fff;"></span>
                          </label>
                          <label>
                            <input type="radio" name="dplayer-danmaku-color-0" value="#e54256" />
                            <span style="background: #e54256"></span>
                          </label>
                          <label>
                            <input type="radio" name="dplayer-danmaku-color-0" value="#ffe133" />
                            <span style="background: #ffe133"></span>
                          </label>
                          <label>
                            <input type="radio" name="dplayer-danmaku-color-0" value="#64DD17" />
                            <span style="background: #64DD17"></span>
                          </label>
                          <label>
                            <input type="radio" name="dplayer-danmaku-color-0" value="#39ccff" />
                            <span style="background: #39ccff"></span>
                          </label>
                          <label>
                            <input type="radio" name="dplayer-danmaku-color-0" value="#D500F9" />
                            <span style="background: #D500F9"></span>
                          </label>
                        </div>
                        <div class="dplayer-comment-setting-type">
                          <div class="dplayer-comment-setting-title">设置弹幕类型</div>
                          <label>
                            <input type="radio" name="dplayer-danmaku-type-0" value="top" />
                            <span>顶部</span>
                          </label>
                          <label>
                            <input type="radio" name="dplayer-danmaku-type-0" value="right" checked />
                            <span>滚动</span>
                          </label>
                          <label>
                            <input type="radio" name="dplayer-danmaku-type-0" value="bottom" />
                            <span>底部</span>
                          </label>
                        </div>
                      </div>
                      <input
                        class="dplayer-comment-input"
                        type="text"
                        placeholder="输入弹幕，回车发送"
                        maxlength="30"
                      />
                      <button
                        class="dplayer-icon dplayer-send-icon"
                        data-balloon="发送"
                        data-balloon-pos="up"
                      >
                        <span class="dplayer-icon-content">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 32 32"
                          >
                            <path
                              d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div class="dplayer-icons dplayer-icons-left">
                      <button class="dplayer-icon dplayer-play-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32">
                          <path
                            d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"
                          />
                        </svg>
                      </button>
                      <div class="dplayer-volume">
                        <button class="dplayer-icon dplayer-volume-icon">
                          <span class="dplayer-icon-content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 21 32"
                            >
                              <path
                                d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"
                              />
                            </svg>
                          </span>
                        </button>
                        <div
                          class="dplayer-volume-bar-wrap"
                          data-balloon-pos="up"
                          data-balloon="70%"
                        >
                          <div class="dplayer-volume-bar">
                            <div
                              class="dplayer-volume-bar-inner"
                              style="background: rgb(183, 218, 255); width: 70%;"
                            >
                              <span class="dplayer-thumb" style="background: #b7daff"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span class="dplayer-time">
                        <span class="dplayer-ptime"></span> /
                        <span class="dplayer-dtime"></span>
                      </span>
                    </div>
                    <div class="dplayer-icons dplayer-icons-right">
                      <div class="dplayer-comment">
                        <button
                          class="dplayer-icon dplayer-comment-icon"
                          data-balloon="发送弹幕"
                          data-balloon-pos="up"
                        >
                          <span class="dplayer-icon-content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 32 32"
                            >
                              <path
                                d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>

                      <div class="dplayer-setting">
                        <button
                          class="dplayer-icon dplayer-setting-icon"
                          data-balloon="设置"
                          data-balloon-pos="up"
                        >
                          <span class="dplayer-icon-content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 32 28"
                            >
                              <path
                                d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"
                              />
                            </svg>
                          </span>
                        </button>
                        <div class="dplayer-setting-box">
                          <div class="dplayer-setting-origin-panel">
                            <div class="dplayer-setting-item dplayer-setting-speed">
                              <span class="dplayer-label">速度</span>
                              <div class="dplayer-toggle">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  viewBox="0 0 32 32"
                                >
                                  <path
                                    d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="dplayer-setting-item dplayer-setting-loop">
                              <span class="dplayer-label">洗脑循环</span>
                              <div class="dplayer-toggle">
                                <input
                                  class="dplayer-toggle-setting-input"
                                  type="checkbox"
                                  name="dplayer-toggle"
                                />
                                <label for="dplayer-toggle"></label>
                              </div>
                            </div>
                            <div class="dplayer-setting-item dplayer-setting-showdan">
                              <span class="dplayer-label">显示弹幕</span>
                              <div class="dplayer-toggle">
                                <input
                                  class="dplayer-showdan-setting-input"
                                  type="checkbox"
                                  name="dplayer-toggle-dan"
                                />
                                <label for="dplayer-toggle-dan"></label>
                              </div>
                            </div>
                            <div class="dplayer-setting-item dplayer-setting-danunlimit">
                              <span class="dplayer-label">海量弹幕</span>
                              <div class="dplayer-toggle">
                                <input
                                  class="dplayer-danunlimit-setting-input"
                                  type="checkbox"
                                  name="dplayer-toggle-danunlimit"
                                />
                                <label for="dplayer-toggle-danunlimit"></label>
                              </div>
                            </div>
                            <div class="dplayer-setting-item dplayer-setting-danmaku">
                              <span class="dplayer-label">弹幕透明度</span>
                              <div class="dplayer-danmaku-bar-wrap">
                                <div class="dplayer-danmaku-bar">
                                  <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="dplayer-setting-speed-panel">
                            <div class="dplayer-setting-speed-item" data-speed="0.5">
                              <span class="dplayer-label">0.5</span>
                            </div>
                            <div class="dplayer-setting-speed-item" data-speed="0.75">
                              <span class="dplayer-label">0.75</span>
                            </div>
                            <div class="dplayer-setting-speed-item" data-speed="1">
                              <span class="dplayer-label">正常</span>
                            </div>
                            <div class="dplayer-setting-speed-item" data-speed="1.25">
                              <span class="dplayer-label">1.25</span>
                            </div>
                            <div class="dplayer-setting-speed-item" data-speed="1.5">
                              <span class="dplayer-label">1.5</span>
                            </div>
                            <div class="dplayer-setting-speed-item" data-speed="2">
                              <span class="dplayer-label">2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="dplayer-full">
                        <button
                          class="dplayer-icon dplayer-full-in-icon"
                          data-balloon="页面全屏"
                          data-balloon-pos="up"
                        >
                          <span class="dplayer-icon-content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 32 33"
                            >
                              <path
                                d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"
                              />
                            </svg>
                          </span>
                        </button>
                        <button
                          class="dplayer-icon dplayer-full-icon"
                          data-balloon="全屏"
                          data-balloon-pos="up"
                        >
                          <span class="dplayer-icon-content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 32 33"
                            >
                              <path
                                d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div class="dplayer-bar-wrap">
                      <div class="dplayer-bar-time hidden" style="left: 617px;">00:57</div>
                      <div class="dplayer-bar-preview"></div>
                      <div class="dplayer-bar">
                        <div class="dplayer-loaded" style="width: 40.7117%;"></div>
                        <div
                          class="dplayer-played"
                          style="width: 16.3135%; background: rgb(183, 218, 255);"
                        >
                          <span class="dplayer-thumb" style="background: #b7daff"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="dplayer-info-panel dplayer-info-panel-hide">
                    <div class="dplayer-info-panel-close">[x]</div>
                    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
                      <span class="dplayer-info-panel-item-title">Player version</span>
                      <span class="dplayer-info-panel-item-data"></span>
                    </div>
                    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
                      <span class="dplayer-info-panel-item-title">Player FPS</span>
                      <span class="dplayer-info-panel-item-data"></span>
                    </div>
                    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
                      <span class="dplayer-info-panel-item-title">Video type</span>
                      <span class="dplayer-info-panel-item-data"></span>
                    </div>
                    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
                      <span class="dplayer-info-panel-item-title">Video url</span>
                      <span class="dplayer-info-panel-item-data"></span>
                    </div>
                    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
                      <span class="dplayer-info-panel-item-title">Video resolution</span>
                      <span class="dplayer-info-panel-item-data"></span>
                    </div>
                    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
                      <span class="dplayer-info-panel-item-title">Video duration</span>
                      <span class="dplayer-info-panel-item-data"></span>
                    </div>
                  </div>
                  <div class="dplayer-menu">
                    <div class="dplayer-menu-item">
                      <a target="_blank" href="https://github.com/MoePlayer/vue-dplayer">GitHub</a>
                    </div>

                    <div class="dplayer-menu-item">
                      <a target="_blank" href="javascript:void(0);">视频统计信息</a>
                    </div>

                    <div class="dplayer-menu-item">
                      <a target="_blank" href="https://diygod.me">关于作者</a>
                    </div>

                    <div class="dplayer-menu-item">
                      <a target="_blank" href="https://github.com/MoePlayer/DPlayer">DPlayer v1.22.2</a>
                    </div>
                  </div>
                  <div class="dplayer-notice"></div>
                </div>
                <!-- 视频容器部分 end -->
                <!-- 下层标题遮罩 start -->
                <div class="mx-media-title">
                  <h1>北臧村镇“不忘初心 牢记使命”主题教育暨牢记使命”主题教育暨</h1>
                  <div class="mx-media-time">
                    <span>2020年03月17日 17:07</span>
                    <span style="margin-left:10px;">user1111</span>
                  </div>
                  <div id="media-info" class="mx-media-info">
                    尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课
                    尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记
                    讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课尚书记讲党课
                  </div>
                </div>
                <!-- 下层标题遮罩 end -->
              </div>
              <!-- 主要视频区域 end -->
              <!-- 观看次数+分享区域 start-->
              <div class="mx-media-watch clearfix">
                <div class="left-icon">
                  <span>
                    <i class="iconfont icon-yanjing"></i>
                    60
                  </span>
                </div>
              </div>
              <!-- 观看次数+分享区域 end-->
              <!-- 视频内容简介 start -->
              <div class="mx-media-main mx-m b-shadow">
                <div class="mx-media-text-body mx-media-noheight">播放视频： 尚书记讲党课</div>
              </div>
              <!-- 视频内容简介 end -->
            </div>
          </div>
          <!-- 右边推荐模块 -->
          <div class="c2-wrapper">
            <div class="c2">
              <hotKeywords></hotKeywords>
              <topicSimple></topicSimple>
              <sheetNewsSide></sheetNewsSide>
              <topicTitleInfo></topicTitleInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer组件 -->
    <Footer></Footer>
  </div>
</template>
<style scoped="scoped">
.c1,
.c2 {
}
.layout-wrapper {
  width: 100%;
  display: block;
  clear: both;
}
/* 第一档  移动端  大小翻倍*/
@media only screen and (max-width: 959px) {
  .phone-none {
    display: none;
  }
  .mx-media-n {
    margin: 0 !important;
  }
  /* .mx-m {
    margin: 20px 0 0;
  } */
  /* 移动端菜单滚动 */
  .touch {
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .layout {
    width: 100%;
    margin: 0 auto;
  }
  .layout .c1,
  .layout .c2 {
    float: none !important;
    width: 100% !important;
    padding: 0 !important;
  }
  /* 都是2倍 */
  .mx-bread-crumb {
    padding: 0 160px 0 20px;
  }
  /* 视频页通用样式 -n 表示normal  -s 表示特殊 */
  .mx-media-s {
    /* background:#90683c; */
  }
  .mx-media-n {
    display: block;
    background-color: #27272f;
  }
  .mx-media-title {
    padding: 30px 60px 40px;
  }
  .mx-media-title h1 {
    display: block;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
  }
  .mx-media-time {
    display: block;
    margin: 10px 0 0;
    color: rgba(255, 255, 255, 0.3);

    font-size: 14px;
  }
  .mx-media-info {
    color: rgba(255, 255, 255, 0.5);
    display: block;
    margin: 10px 0 0;
    position: relative;
    line-height: 48px;
    /* max-height: 40px; */
    overflow: hidden;
    font-size: 24px;
  }
  .mx-media-watch {
    padding: 30px;
    background-color: #fffdf8;
  }
  .mx-media-watch .left-icon {
    display: inline-block;
    float: left;
    color: #5d2e00;
    font-size: 30px;
    line-height: 84px;
  }
  .mx-media-watch .left-icon span {
    display: inline-block;
    margin: 0 20px;
  }
  /* 字体图标微调 */
  .mx-media-watch .left-icon span i {
    display: inline-block;
    position: relative;
    top: 2px;
    font-size: 40px !important;
  }
  /* 视频内容简介区域 */
  .mx-media-main {
    display: block;
    padding: 60px 100px 100px;
    font-size: 32px;
    line-height: 2;
    color: #5d2e00;
    background-color: #fffdf8;
  }
}
/* 第二档 */
@media only screen and (min-width: 960px) and (max-width: 1239px) {
  .layout {
    width: 960px;
    margin: 0 auto;
  }
  .r-75-25 .c1 {
    width: 720px;
    float: left;
  }
  .r-75-25 .c2 {
    width: 240px;
    float: right;
  }
}
/* 第三档 pc端 */
@media only screen and (min-width: 1240px) {
  .layout {
    width: 1200px;
    margin: 0 auto;
  }
  .r-75-25 .c1 {
    width: 900px;
    float: left;
  }
  .r-75-25 .c2 {
    width: 300px;
    float: right;
  }
}
</style>
<script>
//导入Header头文件
import Header from "../../components/common/Header.vue";
//导入面包屑
import breadCrumbNav from "../../components/common/breadCrumbNav";
//导入 右边推荐模块

import hotKeywords from "../../components/common/hotKeywords.vue";
import topicSimple from "../../components/common/topicSimple.vue";
import sheetNewsSide from "../../components/common/sheetNewsSide.vue";
import topicTitleInfo from "../../components/common/topicTitleInfo.vue";
//导入Footer脚文件
import Footer from "../../components/common/Footer.vue";
// 导入视频插件
import DPlayer from "dplayer";
// import VueDPlayer from 'vue-dplayer'
// import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  // props: {
  //   id: {}
  // },
  data(){
    return {
     paramsData:{}
    }
  },
  mounted() {
    //操作dom
    this.getDetailsData();
    // this.dplayerInit();
    
    console.log(this.paramsData)
  },
  methods: {
    //利用传递过来的参数获取对应id的详情
    async getDetailsData(){
      this.paramsData=this.$route.query;
      let {data:res}= await this.$http.get('/api/detail',{
        params:{
          access_token:this.paramsData.access_token,
          category_id:this.paramsData.category_id,
          id:this.paramsData.id,
          type:this.paramsData.type
        }
      })
      console.log(res);
      let data=res.data;
      this.detailsInfo=data.detail;
      console.log(this.detailsInfo.videoUrl)
      this.dplayerInit();

    },
    //视频插件实例化
    dplayerInit() {
      //创建一个视频插件实例
      const dp = new DPlayer({
        container: document.querySelector(".dplayer"),
        autoplay: false,
        // http://static.smartisanos.cn/common/video/t1-ui.mp4
        // "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4",

        video: {
          // 测试demo
          url:this.$store.state.ipAddress+'/'+this.detailsInfo.videoUrl,
            

          type: "auto"
        }
      });
    }
  },
  components: {
    Header,
    breadCrumbNav,
    hotKeywords,
    topicSimple,
    sheetNewsSide,
    topicTitleInfo,
    Footer
  }
};
</script>


