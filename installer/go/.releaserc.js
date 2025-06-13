module.exports = {
  tagFormat: 'installer-v${version}',
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        { scope: '!installer', release: false },
        { scope: 'installer', type: 'feat', release: 'minor' },
        { scope: 'installer', type: 'fix', release: 'patch' },
        { scope: 'installer', type: 'perf', release: 'patch' },
        { scope: 'installer', type: 'refactor', release: 'patch' },
        { scope: 'installer', type: 'chore', release: 'patch' },
        { scope: 'installer', type: 'docs', release: 'patch' },
        { scope: 'installer', type: 'style', release: 'patch' },
        { scope: 'installer', type: 'test', release: 'patch' },
        { scope: 'installer', breaking: true, release: 'major' }
      ],
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
      }
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'angular',
      // presetConfig: {
      //   scope: "installer",
      //   scopeOnly: true,
      // },
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
      },
      writerOpts: {
        transform: (commit) => {
          // Only include commits with 'installer' scope
          if (commit.scope !== 'installer') {
            return false;
          }
          // Clear the scope to prevent it from being displayed
          commit.scope = null;
          return commit;
        },
        // commitPartial: "* {{subject}} ([{{hash}}]({{commitUrl}}))\n"
      }
      // writerOpts: {
      //   // commitsSort: ['scope', 'subject'],
      //   transform: (commit) => {
      //     if (commit.scope !== 'installer') {
      //       return false;
      //     }
      //     // Create a new commit object with all original properties preserved
      //     // const modifiedCommit = { 
      //     //   ...commit,
      //     //   // Override the subject and set scope to empty string
      //     //   // subject: commit.subject ? commit.subject.replace(/^installer:\s*/, '') : commit.subject,
      //     //   // scope: '',
      //     //   // hash: commit.hash || commit.shortHash   
      //     // };
      //     // return modifiedCommit;
      //   }
      // }
    }],
    ['@semantic-release/github', {
      releaseNameTemplate: 'Installer v${nextRelease.version}',
      successComment: false,
      assets: [
        {
          path: 'release-artifacts/flowfuse-device-installer-linux-amd64'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-linux-arm64'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-linux-arm'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-windows-amd64.exe'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-macos-amd64'
        },
        {
          path: 'release-artifacts/flowfuse-device-installer-macos-arm64'
        }
      ]
    }]
  ]
};