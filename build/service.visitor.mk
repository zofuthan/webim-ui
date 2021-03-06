include build/config.mk

PRODUCT_NAME = service.visitor

JS_APP_FILES = ${JS_SRC_DIR}/ui.buddy.js\
	${JS_SRC_DIR}/ui.setting.js\
	${APP_SRC_DIR}/ui.note.js\
	${APP_SRC_DIR}/ui.visitorstatus.js\
	${APP_SRC_DIR}/ui.logmsg.js\
	${APP_SRC_DIR}/ui.chatlink.js\
	${APP_SRC_DIR}/ui.layout.visitor.js\

CSS_APP_FILES = ${CSS_SRC_DIR}/buddy.css\
	${CSS_SRC_DIR}/setting.css\
	${APP_SRC_DIR}/note.css\
	${APP_SRC_DIR}/chatlink.css\
	${APP_SRC_DIR}/layout.visitor.css\

include build/include.mk
