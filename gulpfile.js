const gulp = require("gulp");

const rutas = {
	rutasCSS: 'src/assets/css/*.css',
	rutasJS: 'src/assets/js/*.js',
	rutaAssets: 'public/src/assets',
	rutaNodeModules: 'node_modules/'
};
gulp.task("estilos", function(){
	gulp.src(rutas.rutaNodeModules)
	.pipe(gulp.dest("public"))
});
gulp.task("assets", function(){
	gulp.src('index.html')
	.pipe(gulp.dest("public"))
});
gulp.task('prepararJS', function(){
	gulp.src(rutas.rutasJS)
	.pipe(gulp.dest(rutas.rutaAssets + "/js"))
});
gulp.task('prepararCSS', function(){
	gulp.src(rutas.rutasCSS)
	.pipe(gulp.dest(rutas.rutaAssets + "/css"))
});
gulp.task("observar", function(){
	gulp.watch('index.html',['assets']);
	gulp.watch(rutas.rutaCSS,['prepararCSS']);
	gulp.watch(rutas.rutasJS,['prepararJS']);
	gulp.watch(rutas.rutaViews,['views']);
});
