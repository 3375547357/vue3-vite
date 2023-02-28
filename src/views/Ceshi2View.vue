<template>
	<div>
		<p>计数器实例: {{ count }}</p>
		<input @click="myFn" type="button" value="点我加 1">
		<input type="text" v-model="username">
		<input type="text" v-model="password">
		<p>{{username}}{{password}}</p>
		<input type="button" class="hidden-xs-only" @click="but" value="确定">
		<input type="button" class="hidden-xs-only" @click="token" value="解析后的token">
	</div>
</template>

<script lang="ts" setup>
	import router from './router'
	import {
		ref
	} from 'vue';
	import axios from 'axios';
	const count = ref(3);
	const myFn = (value: number) => {
		// console.log(value);
		count.value += 1;
	}
	const username = ref("");
	const password = ref("");
	const but = () => {
		console.log(username.value);
		axios.post('https://443409hb31.imdo.co/index.php/token', {
			username: username.value, //可以获取输入框数据
			password:password.value
		}).then(res => {
			console.log(res.data);
			localStorage.setItem('token',res.data);
			// window.location.href="/";
		}).catch(err => {
			//添加错误，这里也会显示
			console.log("获取数据失败" + err);
		})
	}
	const token = () => {
		axios.post('https://443409hb31.imdo.co/index.php/verifyToken', {
			token:localStorage.getItem("token")
		}).then(res => {
			console.log(res.data);
			// console.log(res.data[0][0]['username']);
			// window.location.href="/";
			if(res.data==0){
				localStorage.removeItem('token');
			}
			
		}).catch(err => {
			//添加错误，这里也会显示
			console.log("获取数据失败" + err);
		})
	}
</script>

<style>
</style>