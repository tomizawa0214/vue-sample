<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>
    <router-view></router-view>
    <div style="height: 700px;"></div>
    <router-link
      id="next-user"
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' } "
    >次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // コンポーネントが表示される時に実行される
  beforeRouteEnter(to, from, next) {
    const isEnter = window.confirm("Welcome To Page");
    if (isEnter) {
      next();
    } else {
      next(false);
    }
  },
  // ネストされたroute-view等に実行される
  beforeRouteUpdate(to, from, next) {
    next()
  },
  // コンポーネントから離れる時に実行される
  beforeRouteLeave(to, from, next) {
    const isLeave = window.confirm("本当にこのページを離れますか？");
    if (isLeave) {
      next();
    } else {
      next(false);
    }
  }
}
</script>