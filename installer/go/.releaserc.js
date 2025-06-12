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
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
      },
      writerOpts: {
        commitsSort: ['scope', 'subject'],
        transform: (commit, context) => {
          if (commit.scope !== 'installer') {
            return false;
          }
          if (typeof commit.hash === `string`) {
            commit.shortHash = commit.hash.substring(0, 7)
          }
          // Create a new commit object with all original properties preserved
          const modifiedCommit = { 
            ...commit,
            // Override the subject and set scope to empty string
            subject: commit.subject ? commit.subject.replace(/^installer:\s*/, '') : commit.subject,
            scope: '',            

          };
          return modifiedCommit;
        }
      }
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