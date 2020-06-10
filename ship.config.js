const semver = require("semver");
module.exports = {
    buildCommand: () => null,
    getNextVersion: ({ revisionRange, commitTitles, commitBodies, currentVersion, dir }) => {
        // always major update
        return semver.inc(currentVersion, "major");
    }
};
