import gulp from 'gulp'
import { deleteAsync } from 'del'

gulp.task('clean', async () => {
    await deleteAsync("**/*.js");
})