import gulp from 'gulp';
import zip from 'gulp-zip';
import * as del from 'del'
const { series, parallel, src, dest, task } = gulp;

const source = './barneprat/**/*';
const workFolder = './temp';
const demoFolder = './demos/barneprat';
const outputFolder = './output';

function UpdateDemosAndDistributionWithNewSDK() {
    return src(source)
        .pipe(dest(demoFolder))
        .pipe(dest(`${workFolder}/barneprat/`));
}

function copyGameTemplate() {
    return src("spill/**/*")
        .pipe(dest(workFolder));
}

function createDistributionTemplate() {
    return src(`${workFolder}/**`)
        .pipe(zip('template.zip'))
        .pipe(dest(outputFolder));
}

function clean(cb) {
    del.deleteSync(workFolder, { force: true });
    cb();
}

export default series(UpdateDemosAndDistributionWithNewSDK, copyGameTemplate, createDistributionTemplate, clean);