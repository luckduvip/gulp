template.helper('getStatus',function(status,type){
	if(status == 0){ //未处理
		if(type == 1){
			return "待牛人确定";
		}
		return "待确定";
	}else if(status == 1){ //导师确认
		return "待支付";
	}else if(status == 2){ //导师拒绝
		if(type == 1){
			return "已取消"
		}
		return "约见不成功";
	}else if(status == 3){ //已支付
		if(type == 1){
			return "已支付";
		}
		return "约见成功";
	}else if(status == 4){ //申请退款
		return "申请退款";
	}else if(status == 5){ //已退款
		return "已退款";
	}else if(status == 6){ //已完成
		return "已完成";
	}else if(status == 7){ //不退款
		return "不退款";
	}else if(status == 8){ //学生已取消
		if(type == 1){
			return "学生已取消";
		}
		return "已取消";
	}else if(status == 9){ //导师已取消
		if(type == 1){
			return "已取消";
		}
		return "导师已取消";
	}else if(status == 10){ //退款中已取消
		return "退款中";
	}
})
template.helper("handleDate",function(time){
	var d = new Date(time*1000);
	return d.Format("MM-dd hh:mm:ss");
})
template.helper("handleTime",function(time,type){
	if(type == 1){
		return time.substr(5,5);
	}
	return time.substr(-8,5);
})
