var gulp = require("gulp");

gulp.task("copy-index",function(){
	gulp.src("index.html").pipe(gulp.dest("dist"));
});

gulp.task("copytoserver",function(){
	gulp.src("index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\yang"));
});
gulp.task("watchall",function(){
	gulp.watch("index.html",["copytoserver"]);
})
