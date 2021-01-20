var Main = {
	template : `
	<template>
	<div>
		<div style="width: 800px; margin: 0 auto;">
			<img src="./resources/images/main.PNG" width="800"></img>
		</div>
  		<div style="text-align: center; color: white; padding: 5px; margin-top: 50px;">
  			<p style="font-size: 18pt;">(주)<b>이모션애드테크</b></p>
  			<p style="font-size: 10pt; margin-top: 10px;">2018년에 설립한 (주)이모션애드테크는 디지털 광고기획 및 컨설팅 전문기업입니다.<br>
			우리는 탄탄한 기획력을 바탕으로 다양한 산업 분야에 효과적으로 광고를 전송할 수 있는 솔루션들을 기업들에게 제공해왔습니다.<br>
			(주)이모션애드테크는 고객과 함께합니다.
  			</p>
		</div>
 	</div>
</template>
	`	
}
var Member = {
	template : `
	<v-container class="gray lighten-5" style="max-width: 560px;">
	    <v-row class="m-5">
	      <v-col cols="6" v-for="m in member" :key="index">
	          <v-card elevation="2" tile height="300">
	            <v-img
	             cover
	              height="200"
	              :src="m.image"
	            ></v-img>
	            <v-card-title class="justify-center">{{m.position}}<br>{{m.name}}</v-card-title>
	          </v-card>
	      </v-col>
	   	</v-row> 
	</v-container>
	`,
	data() {
    	return {
    		member: [
    			{
    				name: '한재희',
    				position: 'PM',
    				image: './resources/images/member1.png' 
    			},
    			{
    				name: '이태훈',
    				position: '개발팀장',
    				image: './resources/images/member4.png'
    			},
    			{
    				name: '김종완',
    				position: '개발자',
    				image: './resources/images/member3.png'
    			},
    			{
    				name: '엄대정',
    				position: '개발자',
    				image: './resources/images/member2.png'
    			},
    		
    		]
   		 }
  }
}
