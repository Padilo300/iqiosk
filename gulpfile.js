var gulp         = require('gulp')              , // ���������� Gulp
	
	browserSync  = require('browser-sync')      ; // ���������� Browser Sync
	


gulp.task('start', function() {      // ������� ���� browser-sync
	browserSync({                           // ��������� browserSync
		server: {                           // ���������� ��������� �������
			baseDir: 'app'                  // ���������� ��� ������� - app
		},
		notify: false                       // ��������� �����������
	});
});
