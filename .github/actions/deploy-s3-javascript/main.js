const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
function run() {
    // 01] Get some input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: false });
    const distFolder = core.getInput('dist-folder', { required: true });
    //02] Uploade files
    core.notice(`Deploying to bucket: ${bucket} in region: ${bucketRegion} from folder: ${distFolder}`);
}
run();