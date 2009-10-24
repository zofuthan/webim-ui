var path = "";
path = document.location.href.split("/webim");
path = path.length > 1 ? (path[0] + "/") : "";
var webim = window.webim, log = webim.log;
webim.defaults.urls = {
	online:path + "webim/online.php",
	online_list:path + "webim/online_list.php",
	offline:path + "webim/offline.php",
	message:path + "webim/message.php",
	refresh:path + "webim/refresh.php",
	status:path + "webim/status.php"
};

webim.layout.webapi.defaults.shortcuts = menu;
webim.setting.url = path + "webim/setting.php";
webim.history.defaults.urls = {
	load: path + "webim/histories.php",
	clear: path + "webim/clear_history.php"
};
webim.buddy.defaults.url = path + "webim/buddies.php";
webim.notification.defaults.url = path + "webim/notifications.php";

//webim.defaults.soundUrls = {
//	lib: path + "webim/static/assets/sound.swf",
//	msg: path + "webim/static/assets/sound/msg.mp3"
//};
