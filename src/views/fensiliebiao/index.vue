<template>
<div id="container" >

<div id="header" style="background-color:#25B6ED;">
<h1 style="text-align:center">关注列表</h1></div>
	<body bgcolor="#F5F5F5">
	<div style=" width:30%;height:1px;background-color:#E6E6E6;">
	    <div style="margin-top: 10px">
	    <a href="" ><i class="layui-icon layui-icon-left" style="font-size: 50px; color: #FFFFFF;margin-top:5px"></i></a>
	   </div>
	</div>
	<div style=" width:100%;height:120px;background-color: #25B6ED;">
	    <div style="margin-top: 5px;margin-left: 30%;font-size: 100px;color: #FFFFFF;font-weight: 200; ">
	        <p>粉丝列表</p>
	    </div>
	</div>
	<div style=" width:100%;height:200px;background-color:#E6E6E6;">
	    <div style="margin-top: 5px;margin-left: 50px;font-size: 30px;font-weight: 200; ">
	    <p>头像</p>
		<br />
		<br />
		</div>
	    <div style="margin-left: 350px;margin-top: 10px">
	        <a href="" ><i class="layui-icon layui-icon-right" style="font-size: 5px;color: #0C0C0C"></i></a>
	    </div>
		 <div style="margin-top: 5px;right: 0px;font-size: 30px;font-weight: 300; ">
		<p>性别：</p>
		</div>
		<input id="color-input-red" class="chat-button-location-radio-input" type="checkbox" name="color-input-red" value="#f0544d" />
		<label  for="color-input-red"></label >
	</div>
	</body>



</div>
</template>

<script>
export default {

}
</script>

<style>
   *{
	            margin: 0;
	            padding: 0;
	            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
	        }
			#color-input-red +label{
				display: block;
			    width: 150px;
			    height: 150px;
			    cursor: pointer;
			    position: absolute;
			    top: 9%;
			    right: 5%;
			    background: rgba(61, 170, 230, 1);;
			}

			#color-input-red:checked +label::before{
			    display: block;
			    content: "\2714";
			    text-align: center;
			    font-size: 150px;
			    color: white;
			}
			input[type=checkbox]{
				visibility: hidden;
			}
			.round_icon{
			  width: 34px;
			  height: 34px;
			  display: flex;
			  border-radius: 50%;
			  align-items: center;
			  justify-content: center;
			  overflow: hidden;
			}
			.div-inline{
				display: inline;
			}
</style>
